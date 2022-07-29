/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    minHeight: {
      400: "400px",
    },
    maxHeight: {
      500: "500px",
    },
    extend: {},
  },
  plugins: [],
};
