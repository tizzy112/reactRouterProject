import React from "react";
import { Outlet } from "react-router-dom";
import { blogPosts } from "../utils/mockData";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <div>
      Blog
      <div>
        {blogPosts.map((post) => (
          <BlogCard key={post?.id} post={post} />
        ))}
      </div>
      <Outlet />
    </div>
  );
};

export default Blog;
