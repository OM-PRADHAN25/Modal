/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        // We name this "custom" so we can use the class "font-custom"
        custom: ['"Trebuchet MS"', '"Lucida Sans Unicode"', '"Lucida Grande"', '"Lucida Sans"', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

