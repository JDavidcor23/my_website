import React from "react";
import { useState } from "react";
import axios from "axios";

export const Proyects = () => {
  const [skill, setSkill] = useState({
    img: "",
    name: "",
    description: "",
    link: "",
    gitHub: "",
    technologies: [],
  });
  const [imgs, setImgs] = useState({
    img_skill: "",
    alt: "",
  });
  const onchangeImg = ({ target }) => {
    setImgs({
      ...imgs,
      [target.name]: target.value,
    });
  };
  const onchange = ({ target }) => {
    setSkill({
      ...skill,
      [target.name]: target.value,
    });
  };
  const onimg = (e) => {
    e.preventDefault();
    setSkill({
      ...skill,
      technologies: [...skill.technologies, imgs],
    });
    setImgs({
      img_skill: "",
      alt: "",
    });
  };
  const onclick = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/v1/skills", skill)
      .then(function (response) {
        console.log(response?.data);
        setSkill({
          img: "",
          name: "",
          description: "",
          link: "",
          gitHub: "",
          technologies: [],
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <>
      <form
        action=""
        className="flex flex-col justify-center m-auto w-96"
        onSubmit={onimg}
      >
        <input
          type="text"
          name="img_skill"
          placeholder="img_skill"
          value={imgs.img_skill}
          onChange={onchangeImg}
          className=" border border-black m-3"
        />
        <input
          type="text"
          name="alt"
          placeholder="alt"
          value={imgs.alt}
          onChange={onchangeImg}
          className=" border border-black m-3"
        />
        <button
          className="font-bold text-xl mt-5 p-5 text-white bg-cyan-500 rounded-md"
          type="submit"
        >
          send
        </button>
      </form>
      <form
        action=""
        className="flex flex-col justify-center m-auto w-96"
        onSubmit={onclick}
      >
        <input
          type="text"
          name="img"
          placeholder="img"
          value={skill.img}
          onChange={onchange}
          className=" border border-black m-3"
        />
        <input
          type="text"
          name="name"
          value={skill.name}
          placeholder="name"
          onChange={onchange}
          className="border border-black m-3"
        />
        <input
          type="text"
          name="link"
          placeholder="link"
          value={skill.link}
          onChange={onchange}
          className=" border border-black m-3"
        />
        <input
          type="text"
          name="gitHub"
          value={skill.gitHub}
          placeholder="gitHub"
          onChange={onchange}
          className="border border-black m-3"
        />
        <textarea
          name="description"
          id=""
          cols="30"
          rows="10"
          className="border border-black m-3"
          onChange={onchange}
        ></textarea>
        <button
          className="font-bold text-xl mt-5 p-5 text-white bg-cyan-500 rounded-md"
          type="submit"
        >
          send
        </button>
      </form>
    </>
  );
};
