import React from "react";

const BlogDetails = ({ title, content, tags }) => {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="mb-6">{content}</p>
      <div className="text-sm text-gray-600">
        <strong>Tags: </strong>
        {tags}
      </div>
      {/* Add more blog details and styles as needed */}
    </div>
  );
};

export default BlogDetails;
