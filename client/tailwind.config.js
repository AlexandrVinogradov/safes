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
      screens: {
        '2xl': {'max': '1535px'},
        'xl': {'max': '1279px'},
        'max3xl': {'max': '1700px'}, 
        'maxXl': {'max': '1490px'}, 
        'container': {'max': '1440px'}, 
        'max1400': {'max': '1400px'}, 
        'maxLg++': {'max': '1260px'}, 
        'maxLg+': {'max': '1200px'}, 
        'maxLg': {'max': '1024px'}, 
        'maxMd': {'max': '767px'}, 
        'maxSm': {'max': '350px'}, 
      }
    },
  },
  plugins: [],
}
