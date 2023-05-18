
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',

  ],
  theme: {
    extend: {
    colors:{
      primary:"#5672CE",
      secondary:"#629F49",
      mainbg:"#F5F6FB",
      gray1:"#C2C8C3",
      gray2:"#B4B8C4",
      gray3:"#8C8C8D",
      dark:"#030303",
      white:"#FFFFFF",
      
    },
    backgroundImage:{
   
    }
    },
    fontFamily: {
      vazir: ['var(--font-vazir)'],
      yekan:['var(--font-yekan)']
    },
  },
  plugins: [],
}
