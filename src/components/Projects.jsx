import React from "react";
import { useLoaderData } from "react-router-dom";
import Project from "./Project";

const Projects = () => {
  const { projects } = useLoaderData();

  return (
    <div className="my-container">
      <div className="grid gap-6 mb-8 lg:grid-cols-3 sm:grid-cols-2">
        {projects.map((project) => (
          <Project key={project.id} project={project}></Project>
        ))}
      </div>
    </div>
  );
};

export default Projects;
