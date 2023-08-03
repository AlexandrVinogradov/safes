/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL_PRODUCTS: 'http://localhost:5000/safes',
    API_URL_CATEGORIES: 'http://localhost:5000/categories',
    API_URL_EXTRA_VALUE: 'http://localhost:5000/extraValue',
    API_URL_CONTENT: 'http://localhost:5000/content',
    API_URL_INSTRUCTIONS: 'http://localhost:5000/instructions',
    API_URL_NEWS: 'http://localhost:5000/news',
  },
}

module.exports = nextConfig
