import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import {  verify } from "hono/jwt";
import { updateBlogInput, createBlogInput } from "@kishan-vyas-308/medium-blog";

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  },
  Variables: {
    userId: string;
  }
}>();

blogRouter.use("/*", async (c, next) => {
  const header = c.req.header("Authorization") || "";
  const tokent = header.split(" ")[1] || "";

  try {
    
    const user: any = await verify(tokent, c.env.JWT_SECRET);
  
    if (user) {
      c.set("userId", user.id );
      await next();
    } else {
      c.status(403);
      return c.json({
        message: "User is not Logged In",
      });
    }
  } catch (error) {
    c.status(403);
      return c.json({
        message: "User is not Logged In",
      });
  }


});

blogRouter.post("/", async (c) => {
  const body = await c.req.json();
  const authorId = c.get("userId");
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  const { success } = createBlogInput.safeParse(body);
  if (!success) {
    c.status(411);
    return c.json({ message: "invalid input" });
  }

  const blog = await prisma.blog.create({
   
    data: {
      title: body.title,
      content: body.content,
      authorId: authorId,
    },
  });
  return c.json({
    id: blog.id,
  });
});
blogRouter.put("/", async (c) => {
  const body = await c.req.json();
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

const { success } = updateBlogInput.safeParse(body);
  if (!success) {
    c.status(411);
    return c.json({ message: "invalid input" });
  }

  const blog = await prisma.blog.update({
    where: {
      id: body.id,
    },
    data: {
      title: body.title,
      content: body.content,
     
    },
  });
  return c.json({
    id: blog.id,
  });
});


blogRouter.get("/bulk",async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  const blogs = await prisma.blog.findMany({
    select: {
      content: true,
      title: true,
      id: true,
      author: {
        select: {
          name: true,
        }
      }
    }
  })
  return c.json({blogs});
});

blogRouter.get("/:id", async (c) => {
  const id =  c.req.param("id");
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    
    const blog = await prisma.blog.findFirst({
      where: {
        id: id,
      },
      select : {
        title : true,
        content : true,
        id: true,
        author : {
          select : {
            name : true
          }
        }
      }
    });
    return c.json({
      blog,
    });
  } catch (error) {
    return c.json({
      message: "Error while fetching data",
    });
  }
})

