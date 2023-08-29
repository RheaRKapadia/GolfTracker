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
  mode: "jit",
  theme: {
    extend: {
      colors: {
        darkGreen: "#008854",
        carolinaBlue: "#99badd",
        beige: "#FCF7EF",
        // "green-100": "#008854",
        // "black-200": "#090325",
        // "white-100": "#f3f3f3",
      },
      // boxShadow: {
      //   card: "0px 35px 120px -15px #211e35",
      // },
      screens: {
        xs: "450px",
      },
      // backgroundImage: {
      //   "hero-pattern": "url('/src/assets/herobg.png')",
      // },
    },
  },
  plugins: [],
};
