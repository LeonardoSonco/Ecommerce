/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
       'gray' : '#F3F9FB',
       'colorText' : '#666666',
       'colorBgHeaderUp' : '#F5F5F5',
       'blue':'#008ECC'
      },
      
      boxShadow:{
        
      },
      screens:{
        'max-2lg': {'max': '1060px'},
        'max-2md': {'max': '920px'},
        'max-2sm': {'max': '500px'},
      },

      spacing: {
        '98': '450px',
      }
    },
  },
  plugins: [],
};
