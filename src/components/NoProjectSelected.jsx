import React from 'react';
import noProjectImg from '../assets/no-projects.png';

export const NoProjectSelected = ({ onStartAddProject }) => {
  let x;
  return (
    <div className=" text-center w-2/3 my-16">
      <img
        src={noProjectImg}
        alt="no-projects-img"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select the project or get started with a new one
      </p>
      <p className="mt-8">
        <button
          className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-green-700 rounded-xl group"
          onClick={onStartAddProject}>
          <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-green-900 rounded group-hover:-mr-4 group-hover:-mt-4">
            <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
          </span>
          <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-300 ease-in-out delay-200 -translate-x-full translate-y-full bg-green-900 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
          <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
            Create new Project
          </span>
        </button>
      </p>
    </div>
  );
};
