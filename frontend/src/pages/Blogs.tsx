import BlogCard from "../components/BlogCard";
import Appbar from "../components/Appbar";
import { useBlogs } from "../hooks";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Blogs = () => {
  const { blogs, loading } = useBlogs();
  const navigate = useNavigate();

  useEffect(() => {
    if(!localStorage.getItem("token")) {
      navigate("/signin");
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Appbar />
      <div className="flex justify-center mt-8">
        <div className="max-w-screen-md w-full px-4">
          {loading ? (
            <div className="space-y-6">
              {[...Array(5)].map((_, index) => (
                <SkeletonBlogCard key={index} />
              ))}
            </div>
          ) : (
            blogs.map((blog) => (
              <BlogCard
                key={blog.id}
                id={blog.id}
                autherName={blog.author.name}
                content={blog.content}
                title={blog.title}
                publishedAt={blog.publishedAt || ""}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};
const SkeletonBlogCard = () => {
  return (
    <div className="p-6 bg-gray-800 rounded-lg shadow-lg animate-pulse">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
        <div className="ml-4 flex-1">
        <div className="h-4 bg-gray-700 rounded w-1/6 "></div>
          
          <div className="h-4 bg-gray-700 rounded w-1/4 mt-3"></div>
        </div>
      </div>
      <div className="h-6 bg-gray-700 rounded w-5/6 mb-4"></div>
      <div className="space-y-2">
        <div className="h-4 bg-gray-700 rounded"></div>
        <div className="h-4 bg-gray-700 rounded w-4/5"></div>
      </div>
      <div className="h-4 bg-gray-700 rounded w-1/3 mt-4"></div>
    </div>
  );
};

export default Blogs;
