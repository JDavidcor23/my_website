import React from "react";
import projectsData from "../../data/projectsData.json";

export const Projects = () => {
  return (
    <div id="projects" className=" min-h-screen mb-5">
      <h2 className="font-black text-3xl mb-6 text-letter text-center">
        Projects
      </h2>
      {projectsData.map((pro) => (
        <div
          key={pro.name}
          className="flex mt-2 mb-2 p-5 w-90% m-auto max-w-1000px border-b-2 border-gray-400 flex-col lg:flex-row items-center"
        >
          <img
            src={pro.img}
            alt={pro.name}
            className="object-cover w-full lg:w-30rem lg:h-full rounded-xl"
          />

          <div className="p-0 lg:pl-5 flex flex-col justify-between mt-6 lg:mt-0 w-full lg:w-1/2">
            <h3 className=" font-bold text-2xl mb-6 text-letter">{pro.name}</h3>
            <div className="flex items-center flex-wrap">
              {pro.technologies.map((tech) => (
                <img
                  src={tech.img_skill}
                  alt={tech.alt}
                  key={`${tech.alt}_${pro.name}`}
                  className="object-contain w-10 h-10 m-1"
                />
              ))}
            </div>
            {pro.currentlyInDevelopment && (
              <h2 className="font-bold text-2xl mt-3 text-red-600">
                Currently in development
              </h2>
            )}
            <div className="mt-6 break-words">
              <span className=" font-bold">Technologies:</span>
              {pro.technologies.map((tech, index) => {
                if (index !== pro.technologies.length - 1) {
                  return (
                    <span
                      key={`${tech.alt}_${pro.name}_text`}
                      className=" ml-1 font-semibold"
                    >
                      {tech.alt},
                    </span>
                  );
                } else {
                  return (
                    <span
                      key={`${tech.alt}_${pro.name}_text`}
                      className=" ml-1 font-semibold"
                    >
                      {tech.alt}.
                    </span>
                  );
                }
              })}
            </div>
            <p className=" text-base mt-3 text-letter">{pro.description}</p>
            <div className=" mt-6 flex flex-wrap gap-3">
              <a
                href={pro.link}
                target="_blank"
                className="h-10 px-5 py-2 text-cyan_custom transition-colors duration-150 border text-lg border-cyan_custom rounded-md focus:shadow-outline hover:bg-cyan_custom hover:text-indigo-100 flex justify-center items-center"
              >
                Go to app
              </a>
              <a
                href={pro.frontend}
                target="_blank"
                className="h-10 px-5 py-2 text-black transition-colors duration-150 border border-black rounded-md focus:shadow-outline hover:bg-black hover:text-indigo-100 text-lg flex justify-center items-center"
              >
                <span>{"</>"}</span>
                Code Frontend
              </a>
              {pro.backend && (
                <a
                  href={pro?.backend}
                  target="_blank"
                  className="h-10 px-5 py-2 text-black transition-colors duration-150 border border-black rounded-md focus:shadow-outline hover:bg-black hover:text-indigo-100 text-lg flex justify-center items-center"
                >
                  <span>{"</>"}</span>
                  Code Backend
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
