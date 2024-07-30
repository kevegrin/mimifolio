import React from 'react';

const Projects = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mt-8">Projects</h1>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Project items will go here */}
        <div className="border p-4 rounded">
          <h2 className="text-2xl font-bold">Project 1</h2>
          <p className="mt-2">Description of Project 1</p>
        </div>
        <div className="border p-4 rounded">
          <h2 className="text-2xl font-bold">Project 2</h2>
          <p className="mt-2">Description of Project 2</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
