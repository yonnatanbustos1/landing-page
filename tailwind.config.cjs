/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./index.html", "./src/**/**.jsx"],
  theme: {
    fontFamily: {
      sans: ['Kanit', 'sans-serif'],
    },
    // screens: {
    //   sm: '480px',
    //   md: '768px',
    //   lg: '976px',
    //   xl: '1440px',
    // },
    // colors: {
    //   1: '#A3C5E9',
    //   2: '#7B003A',
    //   3: '#95BFE5',
    //   4: '#FFE500',
    //   gray: colors.gray,

    // }
  },
  plugins: [],
}
