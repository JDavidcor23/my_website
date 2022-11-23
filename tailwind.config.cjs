/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      minHeight: {
        "90vh": "90vh",
      },
      maxWidth: {
        "500px": "500px",
        "1000px": "1000px",
      },
      width: {
        "90%": "90%",
        "260px": "260px",
        "30rem": "30rem",
      },
      height: {
        "260px": "260px",
      },
      zIndex: {
        minusOne: "-1",
      },
      spacing: {
        "15px": "15px",
      },
      colors: {
        cyan_custom: "#79c6d3",
        letter: "#21243D",
      },
      screens: {
        smx: "850px",
      },
    },
  },
  plugins: [],
};
