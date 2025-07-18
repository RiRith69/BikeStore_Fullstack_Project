/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}"
    ],
    theme: {
      extend: {
        colors: {
          oldGold: {
            50: '#fdf9e7',
            100: '#f9f1c8',
            500: '#CEA939',
          } 
        }
      },
    },
    plugins: [],
  }
  