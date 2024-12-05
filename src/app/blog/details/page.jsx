"use client";

// app/blog/post/page.jsx
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { blogPosts } from "@/config/data"; // Adjust the path as necessary
import Layout from "@/components/Bounded"; // Adjust the path if necessary

const BlogDetails = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [blogPost, setBlogPost] = useState(null);

  useEffect(() => {
    if (id) {
      const post = blogPosts.find((post) => post.id === id);
      setBlogPost(post);
    }
  }, [id]);

  if (!blogPost) {
    return <div>Blog post not found</div>;
  }

  return (
    <Layout className="text-white pt-20 md:pt-28">
      <div className="p-6">
        <h1 className="text-4xl font-bold mb-4">{blogPost.title}</h1>
        <p className="mb-6">{blogPost.content}</p>
        <div className="text-sm text-gray-600">
          <strong>Tags: </strong>
          {blogPost.tags.join(", ")}
        </div>
        {/* Add more blog details and styles as needed */}
      </div>
    </Layout>
  );
};

export default BlogDetails;
