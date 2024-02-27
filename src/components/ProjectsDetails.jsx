import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const ProjectsDetails = () => {
  const { projects } = useLoaderData();
  console.log(projects);
  return (
    <div className="my-container">
      {/* Container Box */}
      <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto">
        {/* Image Container */}
        <div className=" lg:w-1/2 h-full">
          <img
            src={projects[0].projectPicture}
            alt="book cover"
            className="object-cover w-full  lg:h-full"
          />
        </div>
        {/* Details Container */}
        <div className=" p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
          <div>
            <p className="badge">Brand new</p>
          </div>
          <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
            {projects[0].title}
          </h5>
          <p className=" text-gray-900" font-bold>
            {" "}
            <span className="mb-3 text-xl  leading-none sm:text-xl">Creator:</span>{" "}
            {projects[0].projectAuthor}
          </p>
          <p>
            {" "}
            <span className="text-xl">Project Details:</span> {projects[0].postDrescription}
          </p>
          <Link to="/projects" className="btn md:w-auto md:mr-4 mt-10">
            <div className="inline-flex items-center justify-center w-full h-full">
              <p className="mr-3">Go to Projects</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectsDetails;
