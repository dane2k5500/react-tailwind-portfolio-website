/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    // Custom colors for resume portfolio
    colors: {
      'raisin-black': '#272727',
      'anti-flash-white': '#EFF1F3',
      'dim-gray': '#696773',
      'mustard': '#FED766',
      'moonstone': '#009FB7',

    },
  },
  plugins: [],
}

