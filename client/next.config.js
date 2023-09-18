/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: false 
    // this also controls running workers https://github.com/vercel/next.js/issues/45508#issuecomment-1597087133, which is causing
    // memory issues in 13.4.4 so until that's fixed, we don't want this.
  },
  output: 'standalone',

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
  },
  staticPageGenerationTimeout: 1000,
}
process.on('unhandledRejection', error => {
  console.log('unhandledRejection', error);
});

module.exports = nextConfig