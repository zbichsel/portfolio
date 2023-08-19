/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
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

