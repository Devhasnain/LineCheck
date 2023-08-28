/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
      },
      typescript: {
        ignoreBuildErrors: true,
     },
     images: {
      unoptimized: true,
      // domains: ['majesticowls.com'], 
    },
    reactStrictMode: true,
  
}

module.exports = nextConfig
