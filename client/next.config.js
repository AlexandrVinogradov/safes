/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL_PRODUCTS: 'http://localhost:5000/safes',
    API_URL_CATEGORIES: 'http://localhost:5000/categories',
  },
}

module.exports = nextConfig
