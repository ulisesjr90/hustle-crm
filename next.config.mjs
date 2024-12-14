// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
      serverActions: true,
    },
    images: {
      domains: ['placeholder.com'], // Add any image domains you'll use
    },
  }
  
  export default nextConfig;