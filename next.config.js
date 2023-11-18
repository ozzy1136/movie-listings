/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "image.tmdb.org",
      // add splash image domain
      "images.unsplash.com",
    ],
  },
};

module.exports = nextConfig;
