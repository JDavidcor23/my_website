import React from "react";

export const Header = () => {
  return (
    <header
      id="about"
      className="flex flex-col items-center justify-center mt-8 smx:flex-row-reverse smx:justify-between smx:mx-auto smx:mb-0 smx:mt-8 smx:max-w-1000px smx:w-90% min-h-90vh"
    >
      <div className="relative h-80 flex flex-col items-center mb-7">
        <img
          src="https://res.cloudinary.com/dbtk64lp4/image/upload/v1669076815/1654905895666_hapgse.jpg"
          alt="my_photo"
          className="rounded-full"
        />
        <div className="absolute rounded-full bg-cyan_custom z-minusOne h-260px w-260px top-15px"></div>
        <div className="flex mt-4 items-center">
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
      <div className="flex flex-col items-center text-center w-90% smx:max-w-500px smx:items-start smx:text-start">
        <h1 className="font-black text-3xl mb-6 text-letter">
          Hi, I am Jorge Diaz, Web Developer
        </h1>
        <p className=" text-xl text-letter">
          I am a web developer, who loves to learn every day, best practices,
          technologies and algorithms, passionate about web 3. I have many
          experiences in creating websites using different frameworks and
          technologies. I have created many websites using React.js, Node.js,
          TypeScript, JavaScript, HTML, CSS, Bootstrap, Tailwind CSS and others.
        </p>
        <button className="font-bold text-xl mt-5 p-5 text-white bg-cyan-500 rounded-md">
          Download Resume
        </button>
      </div>
    </header>
  );
};
