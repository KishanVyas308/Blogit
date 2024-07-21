import { Blog } from "../hooks";
import { Avatar } from "./BlogCard";

const FullBlog = ({ blog }: { blog: Blog }) => {
  return (
    <div className="flex w-screen max-w-screen-xl py-4 px-4">
      <div className="flex-[3]">
        <div className="text-4xl font-extrabold mb-4">{blog.title}</div>
        <div className="text-slate-400 pt-2 mb-4">{new Date(blog.publishedAt).toDateString()}</div>
        <div
          className="prose prose-custom lg:prose-xl dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        ></div>
      </div>
      <div className="flex-[1] hidden  lg:block pl-8">
        <div className="text-2xl font-bold mb-4">Author</div>
        <div className="flex items-center py-4">
          <div className="mr-4">

          <Avatar name={blog.author.name} />
          </div>
          <div>
            <div className="text-xl font-bold">{blog.author.name}</div>
            <div className="text-slate-400">who wrote this blog </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullBlog;