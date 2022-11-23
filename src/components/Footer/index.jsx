import React from "react";

export const Footer = () => {
  return (
    <footer className=" bg-cyan_custom ">
      <div className="flex items-center justify-between max-w-1000px p-5 m-auto flex-row">
        <h2 className=" w-40 sm:w-96 text-xl text-white font-bold">
          Made by Jorge David Diaz Cordero 😁
        </h2>
        <div className="flex">
          <a
            href="https://github.com/JDavidcor23"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              id="github"
              class="bg-white sticky duration-500 border-2 border-black  w-12 transform m-3 hover:-translate-y-3   h-12 text-2xl rounded-full hover:bg-black hover:text-white text-black "
            >
              <i class="fab fa-github"></i>
            </button>
          </a>
          <a
            href="https://www.linkedin.com/in/jorge-david-diaz-cordero-web-developer/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              id="linkedin"
              class="bg-white transform hover:-translate-y-3  border-2 w-12 h-12 rounded-full duration-500 m-3 text-blue-500 border-blue-500  hover:bg-blue-500 hover:text-white text-2xl"
            >
              <i class="fab fa-linkedin-in"></i>
            </button>
          </a>
        </div>
      </div>
    </footer>
  );
};
