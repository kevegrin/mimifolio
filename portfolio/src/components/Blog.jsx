import React from 'react';

const Blog = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mt-8">Blog</h1>
      <div className="mt-4 space-y-4">
        {/* Blog posts will go here */}
        <div className="border p-4 rounded">
          <h2 className="text-2xl font-bold">Blog Post 1</h2>
          <p className="mt-2">Excerpt of Blog Post 1</p>
        </div>
        <div className="border p-4 rounded">
          <h2 className="text-2xl font-bold">Blog Post 2</h2>
          <p className="mt-2">Excerpt of Blog Post 2</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
