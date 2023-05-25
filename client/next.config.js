/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    fontLoaders: [
      // { loader: '@next/font/google', options: { subsets: ['cyrillic'] } },
      { loader: '@next/font/google', options: { subsets: ['latin'] } },
    ],
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