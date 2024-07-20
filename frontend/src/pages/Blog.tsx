import React from "react";
import { useBlog } from "../hooks";
import Appbar from "../components/Appbar";
import { useParams } from "react-router-dom";
import FullBlog from "../components/FullBlog";

const Blog = () => {
  const { id } = useParams();
  const validId = id || "";
  const { blog, loading } = useBlog({ id: validId });

  if (loading) {
    return (
      <div className=" min-h-screen bg-gray-900 text-white">
        <Appbar />
        {/* <div className="w-screen flex justify-center">
          <div className="w-screen max-w-screen-xl justify-center items-center h-screen">
            <div className="animate-pulse">
              <div className="h-10 bg-gray-700 rounded w-1/2 mb-4"></div>
              <div className="h-64 bg-gray-700 rounded mb-4"></div>
            </div>
          </div>
        </div> */}

        <div className="w-screen flex justify-center mt-8 py-4 px-4">
          <div className="w-screen max-w-screen-xl justify-center items-center ">
            <div className="flex-[3]">
              <div className="animate-pulse">
                <div className="h-10 bg-gray-700 rounded w-1/2 mb-4"></div>
                <div className="h-6 bg-gray-700 rounded  w-1/6 mt-6 mb-4"></div>
                <div className="h-96 bg-gray-700 rounded  mt-6 mb-4"></div>
              </div>
              {/* <div
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
            </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (!blog) {
    return (
      <div className="min-h-screen bg-gray-900 text-white">
        <Appbar />
        <div className="flex justify-center items-center h-screen">
          <div>Blog not found</div>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Appbar />
      <div className="flex justify-center py-10">
        <FullBlog blog={blog} />
      </div>
    </div>
  );
};

export default Blog;
