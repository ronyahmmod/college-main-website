/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#80558C",
        primaryLight: "#AF7AB3",
        secondary: "#E4D192",
        tertiary: "#CBA0AE",
      },
    },
  },
  plugins: [],
};
