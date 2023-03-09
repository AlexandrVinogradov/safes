const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-noto-sans)'],
        mono: ['var(--font-tenor-sans)'],
      },
      colors: {
        'white': '#ffff',
        'branded': '#40A3D2',

        'dark': '#424242',
        'dimText': '#8F8F8F'
      },
    },
  },
  plugins: [],
}
