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
      <div>
        {" "}
        <Appbar />
        <div className="flex justify-center">
          <div>Loading..</div>
        </div>
      </div>
    );
  }
  if (!blog) {
    return (
      <div>
        <Appbar />
        <div className="flex justify-center">
          <div>Blog not found</div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Appbar />
      <div className="flex justify-center">

        <FullBlog blog={blog} />
      </div>
    
    </div>
  );
};

export default Blog;
