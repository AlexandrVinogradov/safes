/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL_PRODUCTS: 'http://localhost:5000/safes',
    API_URL_CATEGORIES: 'http://localhost:5000/categories',
  },
  // fontLoaders: [
  //   // { loader: '@next/font/google', options: { subsets: ['cyrillic'] } },
  //   { loader: '@next/font/google', options: { subsets: ['latin'] } },
  // ],
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig



// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   appDir: true,
//   content: [
//     './pages/**/*.{js,ts,jsx,tsx}',
//     './components/**/*.{js,ts,jsx,tsx}',
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         sans: ['var(--font-noto-sans)'],
//         mono: ['var(--font-tenor-sans)'],
//       },
//     },
//   },
//   plugins: [],
// };