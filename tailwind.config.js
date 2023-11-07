const defaultTheme = require('tailwindcss/defaultTheme')
const xs = '360px'

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        customeblue: '#217283'
      },
    },
    screens: {
      'xs': xs,
      ...defaultTheme.screens,
    },
  },
  variants: {
    extend: {},
  },
  important: true
}

const { sm, md, lg, xl } = defaultTheme.screens
const xxl = defaultTheme.screens['2xl']

module.exports.xs = xs.replace('px', '') * 1;
module.exports.sm = sm.replace('px', '') * 1;
module.exports.md = md.replace('px', '') * 1;
module.exports.lg = lg.replace('px', '') * 1;
module.exports.xl = xl.replace('px', '') * 1;
module.exports.xxl = xxl.replace('px', '') * 1;
module.exports.breakpoints = {
  'xs': xs,
  ...defaultTheme.screens,
}