/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  serverRuntimeConfig: {
    API_URL_CONTENT: 'http://backend:5000/content',
    API_URL_CATEGORIES: 'http://backend:5000/categories',
    API_URL_PRODUCTS: 'http://backend:5000/safes',
    API_URL_EXTRA_VALUE: 'http://backend:5000/extraValue',
    API_URL_INSTRUCTIONS: 'http://backend:5000/instructions',
    API_URL_NEWS: 'http://backend:5000/news',
  },
  publicRuntimeConfig: {
    API_URL_CONTENT: 'http://localhost:5000/content',
    API_URL_CATEGORIES: 'http://localhost:5000/categories',
    API_URL_PRODUCTS: 'http://localhost:5000/safes',
    API_URL_EXTRA_VALUE: 'http://localhost:5000/extraValue',
    API_URL_INSTRUCTIONS: 'http://localhost:5000/instructions',
    API_URL_NEWS: 'http://localhost:5000/news',
  }
}

module.exports = nextConfig