const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: [
      'images.pexels.com',
      'picsum.photos',
      'blogger.googleusercontent.com'
    ],
  },
};

module.exports = nextConfig;
