/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container:{
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#2563eb' ,
        dark: '#020617' ,
        secondary:'#475569',
        red:'#dc2626',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}