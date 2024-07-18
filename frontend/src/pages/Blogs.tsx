import BlogCard from "../components/BlogCard";
import Appbar from "../components/Appbar";
import { useBlogs } from "../hooks";

const Blogs = () => {
  const { blogs, loading } = useBlogs();
  if (loading) {
    return <div>Loading..</div>;
  }
  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div>
          {blogs.map((blog) => (
            <BlogCard
              id={blog.id}
              autherName={blog.author.name}
              content={blog.content}
              title={blog.title}
              publishedAt={blog.publishedAt || ""}
            />
          ))}
         
        </div>
      </div>
    </div>
  );
};

export default Blogs;
