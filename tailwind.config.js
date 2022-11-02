/** @type {import('tailwindcss').Config} */
module.exports = {
  content : ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors : {
        'off-white' : '#FAF9F6',
        'ivory' : '#FFFFF0',
        'navajo' : '#ffbf61',
       'darkNavajo' : '#e88b00',
      },
      dropShadow : {
        'button' : '0 4px 3px rgb(226, 223, 210)'
      },
      borderWidth : {
        'button' : '0.001rem'
      },

    },
  },
  plugins: [],
}
