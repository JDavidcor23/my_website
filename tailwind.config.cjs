/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rebel: ['"Barlow Condensed"', "sans-serif"],
        mono:  ['"JetBrains Mono"', "monospace"],
      },
      colors: {
        rebel: {
          bg:     "#0a0a0f",
          card:   "#111118",
          surface:"#0d0d14",
          cyan:   "#00F5FF",
          pink:   "#FF006E",
          muted:  "#7777aa",
          faint:  "#333355",
        },
        // legacy (kept for any remaining references)
        cyan_custom: "#79c6d3",
        letter:      "#21243D",
      },
      minHeight: {
        "90vh": "90vh",
      },
      maxWidth: {
        "500px":  "500px",
        "1000px": "1000px",
      },
      width: {
        "90%":   "90%",
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
      screens: {
        smx: "850px",
      },
    },
  },
  plugins: [],
};
