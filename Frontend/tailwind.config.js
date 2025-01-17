/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        "primary" : "#00004d",
        "secondary" : "#ff6666",
        "tertiary" : "#4dffb8"
      }
    },
    screens: {
      // '2xl': {'max': '1535px'},
      // // => @media (max-width: 1535px) { ... }

      // 'xl': {'max': '1279px'},
      // // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1723px'},
      // // => @media (max-width: 1023px) { ... }

      // 'md': {'max': '1000px'},
      // // => @media (max-width: 767px) { ... }

      'sm': {'max': '1000px'},
      // => @media (max-width: 639px) { ... }
    } 
  },
  plugins: [],
}
