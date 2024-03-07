import React from "react";
import { Link } from "react-router-dom";

const Project = ({ project }) => {
  return (
    <Link
      to={`${project.id}`}
      className="overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl  p-2 border border-solid border-gray-500 hover:scale-110 my-2 mx-1"
    >
      <img
        src={project?.picture}
        alt=""
        className="object-cover w-full h-56 md:h-64 xl:h-80 rounded"
      />
      <p className="font-bold text-2xl text-gray-700  mb-1 mt-1 pb-2">{project.title}</p>
      <p>{project?.description?.substring(0, 90)}...</p>
    </Link>
  );
};

export default Project;
