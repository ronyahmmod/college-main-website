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
      animation: {
        fade: "fade 1s ease-in-out",
      },
      backgroundImage: {
        "herro-pattern": 'url("/images/pattern.webp"',
      },
      keyframes: {
        fade: {
          "0%, 100%": {
            opacity: 1,
          },
          "50%": {
            opacity: 0.5,
          },
        },
      },
    },
  },
  plugins: [],
};
