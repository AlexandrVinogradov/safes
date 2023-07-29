/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL_PRODUCTS: 'http://localhost:5000/safes',
    API_URL_CATEGORIES: 'http://localhost:5000/categories',
    API_URL_EXTRA_VALUE: 'http://localhost:5000/extraValue',
    API_URL_CONTENT: 'http://localhost:5000/content',
  },
}

module.exports = nextConfig
