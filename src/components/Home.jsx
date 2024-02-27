import Lottie from "lottie-react";
import React from "react";
import { Link } from "react-router-dom";
import animation from "../assets/Animation - 1708980399413.json";

const Home = () => {
  return (
    <div className="my-container flex flex-col items-center justify-between lg:flex-row">
      {/* Text Content */}
      <div className="mb-20 lg:max-w-lg  lg:pr-5 lg:mb-0">
        <div className="max-w-xl mb-6 lg:mt-8">
          <div>
            <p className="badge">Exhibition</p>
            <span className="mx-4 badge">21.3.2024 from 10 am</span>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            Welcome to Breaking folds - <br className="hidden md:block" />
            Where Innovation{" "}
            <span className="inline-block text-blue-400">Meets Sustainability!</span>
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            Breaking Folds is not just an exhibition; it's a celebration of innovation, creativity,
            and sustainability. Our mission is to showcase the incredible potential of 3D
            fabrication in promoting sustainable development and environmental conservation.
          </p>
        </div>
        <div className="flex flex-col items-center md:flex-row">
          <Link to="/projects" className="btn md:w-auto md:mr-4">
            <div className="inline-flex items-center justify-center w-full h-full">
              <p className="mr-3">See All Projects</p>
            </div>
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-blue-700"
          >
            Contact Us
          </Link>
        </div>
      </div>
      {/* Lottie Animation */}
      <div className="relative lg:w-1/2 ">
        <div className="mt-10 w-full lg:w-full lg:ml-auto h-56  sm:h-96">
          <Lottie animationData={animation} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default Home;
