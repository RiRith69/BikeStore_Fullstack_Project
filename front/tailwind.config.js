/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}"
    ],
    theme: {
      extend: {
        animation: {
          fadeIn: 'fadeIn 0.3s ease-out forwards',
          scaleIn: 'scaleIn 0.3s ease-out forwards',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
          scaleIn: {
            '0%': { transform: 'scale(0.95)', opacity: '0' },
            '100%': { transform: 'scale(1)', opacity: '1' },
          },
        },
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
  