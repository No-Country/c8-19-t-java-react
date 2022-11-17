/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        sm: "576px",
        md: "960px",
        lg: "1440px",
        "w-screen": { raw: "(min-aspect-ratio: 3/2)" },
        "t-screen": { raw: "(min-aspect-ratio: 1/2)" },
      },
      container: {
        center: true,
        padding: "7rem",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
