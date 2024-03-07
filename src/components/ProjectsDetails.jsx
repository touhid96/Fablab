import React from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import UserImage from '../assets/user.svg';

const ProjectsDetails = () => {
  const { projects } = useLoaderData();

  const { id } = useParams();
  const project = projects?.find((p) => p.id == id);
  if (!project) {
    return "Loading";
  }
  return (
    <div className="my-container">
      {/* Container Box */}
      <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto">
        {/* Image Container */}
        <div className=" lg:w-1/2 h-full p-2">
          <img
            src={project.picture}
            alt="book cover"
            className="object-cover w-full  lg:h-full rounded"
          />
        </div>
        {/* Details Container */}
        <div className=" p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
          <div>
            <p className="badge"></p>
          </div>
          <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">{project.title}</h5>

          <br />
          <p>
            {" "}
            <span className="text-xl">{project.description}</span>
          </p>
          <br />
          <p className=" text-gray-900" font-bold>
            {" "}
            <span className="mb-3 text-xl  leading-none sm:text-xl">
              Creator:
              {project.developer.map((a) => (
                <div key={a} style={{ display: 'flex', alignItems: 'center' }}>
                <img
                  src={UserImage}
                  alt="Image"
                  style={{ width: '20px', height: '20px', marginRight: '10px' }}
                />
                <p>{a}</p>                
              </div>
                // <p key={a} className=" text-gray-500">
                //   <span><img src={UserImage} height="20" width="20" /></span> <span>{a}</span>
                // </p>
              ))}
            </span>{" "}
          </p>
          {/* <Link to="/projects" className="btn md:w-auto md:mr-4 mt-10">
            <div className="inline-flex items-center justify-center w-full h-full">
              <p className="mr-3">Go to Projects</p>
            </div>
          </Link> */}
          <a href="/projects" className="btn md:w-auto md:mr-4 mt-10">
            <div className="inline-flex items-center justify-center w-full h-full">
                <p className="mr-3">Go to Projects</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsDetails;
