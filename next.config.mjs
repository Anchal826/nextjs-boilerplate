/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your original Next.js configuration goes here
};

export default {
  ...nextConfig,
  pwa: {
    dest: 'public'
    // Add any other PWA configurations here
  }
};
