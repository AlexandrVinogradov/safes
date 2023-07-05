const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    './styles/**/*.{js,ts,jsx,tsx,mdx}',
    './icons/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        "sans": "var(--font-noto-sans)",
        "mono": "var(--font-tenor-sans)",
      },
      colors: {
        'white': '#ffff',
        'error': '#ef4444',
        
        'branded': '#40A3D2',
        'dimBranded': '#C5EBFD',
        'dimBranded2': '#F5FCFF',
        
        'dimButton': '#477D9D',

        'dark': '#424242',
        'dimText': '#8F8F8F',
        'dimmerText': '#DDDDDD',
        'dimmerText2': '#ABB2BF',

        'disabled': '#9FD1E8'
      },
    },
  },
  plugins: [],
}
