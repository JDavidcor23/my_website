import React from "react";
import skills from "../../data/skills.json";
export const Technologies = () => {
  return (
    <div
      id="skills"
      className=" bg-cyan_custom mx-0 my-8 px-0 py-5 min-h-screen"
    >
      <h2 className="font-black text-3xl mb-6 text-letter text-center">
        Skills
      </h2>
      <div className="flex items-center w-90% max-w-1000px m-auto flex-wrap justify-center">
        {skills.map((skill) => (
          <div
            className="bg-white p-5 m-1 rounded-md flex flex-col justify-between items-center w-40 h-40 shadow-2xl"
            key={skill.name}
          >
            <img
              src={skill.img}
              alt={skill.name}
              className=" w-20 h-20 object-contain"
            />
            <p className=" mt-2 font-bold text-center">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
