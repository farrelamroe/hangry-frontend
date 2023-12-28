/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "#A30926",
      secondary: "#ffad2b",
      white: "#FFFFFF",
      black: "#303030",
      blackSecondary: "#707070",
      grey: "#FAFAFA",
      red: "#FF0000",
      purple: "#800080",
      green: "#008000",
    },
    extend: {
      fontFamily: {
        inter: ["Inter"],
      },
      screens: {
        xs: "480px",
      },
    },
    listStyleType: {
      none: "none",
      decimal: "decimal",
      disc: "disc",
      square: "square",
      roman: "upper-roman",
      "upper-latin": "upper-latin",
      "lower-latin": "lower-latin",
    },
  },
  variants: {
    display: ["responsive", "group-hover", "group-focus"],
  },
  plugins: [],
};
