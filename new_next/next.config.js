/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    REAL_WORLD_DOOR_IP: process.env.REAL_WORLD_DOOR_IP,
    SPIRIT_WORLD_DOOR_IP: process.env.SPIRIT_WORLD_DOOR_IP,
    CAMERA_IP: process.env.CAMERA_IP,
  }
}

module.exports = nextConfig
