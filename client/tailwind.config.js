/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{ts,tsx}",
    './styles/*.{ts,tsx}',
    './icons/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        "noto": 'Noto Sans',
        "tenor": "Tenor Sans",
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

        'lightBlue': '#F5FBFF',

        'disabled': '#9FD1E8'
      },
    },
  },
  plugins: [],
}
