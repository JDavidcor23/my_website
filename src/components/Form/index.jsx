import { useState } from "react";
import axios from "axios";
export const Form = () => {
  const [skill, setSkill] = useState({
    img: "",
    name: "",
  });

  const onchange = ({ target }) => {
    setSkill({
      ...skill,
      [target.name]: target.value,
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
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
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
      <button
        className="font-bold text-xl mt-5 p-5 text-white bg-cyan-500 rounded-md"
        type="submit"
      >
        send
      </button>
    </form>
  );
};
