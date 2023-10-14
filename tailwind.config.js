/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  
  theme: {
    extend: {},
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: 'class',
  mode: "jit",
  theme: {
    extend: {
      colors: {
        'green-100': "#008854",
        'green-200': '#01613c',
        'green-300': '#014a2e',

        carolinaBlue_100: "#99badd",
        carolinaBlue_200: '#4e739c',
        beige: "#FCF7EF",
       

        blueGrey: '#1b3157',
        
        darkGrey: '#2d2d2e',
        lightGrey: '#aaabad',
        
        'blue-100': '#344d82',
        'blue-200': '#223767',
        'blue-300': '#152042', 
        'blue-400': '#05132b', 
        // '#041A40'
        // "green-100": "#008854",
        // "black-200": "#090325",
        // "white-100": "#f3f3f3",
      },
      extend: {
        boxShadow: {
          'inner': '0 150px 0 200px rgba(0, 0, 0, 0.25) inset',
        }
      },
    
      // boxShadow: {
      //   card: "0px 35px 120px -15px #211e35",
      // },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};
