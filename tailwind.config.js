/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      colors: { 
        'brand': '#ff6319',
        dark: '#3e5060',
        darkPrimary: '#6d7c8d',
        darkSecondary: '#a3aeb8',
        light: '#CC3300',
        lightPrimary: '#f9fafb',
        lightSecondary: "#c5cbcf"
      }
    },
  },
  plugins: [],
};
