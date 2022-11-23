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
          className="flex mt-2 mb-2 p-5 w-90% m-auto max-w-1000px border-b-2 border-gray-400 flex-col md:flex-row"
        >
          <img
            src={pro.img}
            alt={pro.name}
            className="object-cover w-full md:w-30rem md:h-60 rounded-xl"
          />
          <div className="pl-5 flex flex-col justify-between mt-6 md:mt-0">
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
            <p className=" text-base mt-6 text-letter">{pro.description}</p>
            <div className=" mt-6">
              <a
                href={pro.link}
                target="_blank"
                className="h-10 px-5 py-2 text-cyan_custom transition-colors duration-150 border text-lg border-cyan_custom rounded-md focus:shadow-outline hover:bg-cyan_custom hover:text-indigo-100"
              >
                Go to app
              </a>
              <a
                href={pro.gitHub}
                target="_blank"
                className="h-10 px-5 py-2 text-black transition-colors duration-150 border border-black rounded-md focus:shadow-outline hover:bg-black hover:text-indigo-100 text-lg ml-3"
              >
                <span>{"</>"}</span>
                Code
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
