/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/App.vue"
  ],
  theme: {
    colors: {
      background: '#fafafa',
      accent: '#fca5a5',
      text: '#191414',
      placeholder: '#4b4b4b',
    },
    extend: {},
  },
  plugins: [],
}

