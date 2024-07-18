import React from "react";
import { Blog } from "../hooks";
import { Avarator } from "./BlogCard";

const FullBlog = ({ blog }: { blog: Blog }) => {
  return (
    <div className="flex w-screen max-w-screen-xl py-10 px-4">
      <div className="flex-[2]">
        <div className="text-4xl font-extrabold ">{blog.title}</div>
        <div className="text-slate-600 pt-2">Published on 10 december</div>
        <div className="text-slate-900 pt-4">{blog.content}</div>
      </div>
      <div className="flex-[1] ">
        Author
        <div className="flex items-center py-4">
            <div className="pr-4"><Avarator  name={blog.author.name} /></div>
            <div>
                <div className="text-xl font-bold">{blog.author.name}</div>
                <div className="text-slate-600">who wrote this blog </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default FullBlog;
