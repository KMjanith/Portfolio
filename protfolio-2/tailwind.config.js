/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    theme: {
    },
    fontFamily: {
      afaced: ['Afacad Flux',"serif"],
      afaced_400: ["Afacad Flux", "serif"] 
    }
  },
  plugins: [],
}