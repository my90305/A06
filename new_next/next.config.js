/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env:{
    CAMERA_IP:process.env.CAMERA_IP
  }
}

module.exports = nextConfig
