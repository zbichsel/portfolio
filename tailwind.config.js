/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.{html,js}"], //use this for dev -- make sure to move back to docs folder
  theme: {
    extend: {
      fontFamily: {
        'primary': ['Great Vibes'],
        'header': ['Marcellus'],
        'body': ['Amiko']
      },
      backgroundImage: {
        'hero-pattern': "url('../src/images/svg/nnneon.svg')"
      },
    },
  },
  plugins: [],
}

