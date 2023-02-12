/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    xtend: {},
    screens: {
      'phone': {"max": '375px'},
  
      'laptop': '1024px',
  
      'desktop': {"min": '376px'},
    },
  },
  plugins: [],
}