const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{html,js}", "./public/*.html"],
  theme: {
    extend: {
      fontFamily: {
        'press-start': ['"Press Start 2P"', 'cursive'],
        'lemonada': ['"Lemonada"', 'cursive'],
        'oswald': ['"Oswald"', 'sans-serif'],
      }
    },
    // fontFamily: {
    //   'sans': ['Lemonada', 'Arial', 'sans-serif'],
    // }
  },
  variants: {
    borderWidth: ['responsive', 'hover', 'focus'],
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const myUtilities = {
        ".bg-aqua": { background: "aqua" },
        ".rotate-150deg": {
          transform: "rotateX(150deg)",
        },
      };
      addUtilities(myUtilities);
    }),
  ],

};