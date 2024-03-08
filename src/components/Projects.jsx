import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Project from "./Project";

const Projects = () => {
  const { projects } = useLoaderData();

  if (!projects) {
    return "Loading";
  }
  return (
    <div className="my-container">
      <div className="grid gap-6 mb-8 lg:grid-cols-3 sm:grid-cols-2">
        {projects?.map((project) => (
          <Project key={project.id} project={project}></Project>
        ))}
      </div>
      <div className="flex justify-center">
        <Link to="/" className="btn bg-gray-600 ">
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default Projects;
