/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['example.com'], // Add domains for external images if needed
    unoptimized: true, // Required for static export
  },
  // Uncomment the following lines when deploying to GitHub Pages
  // output: 'export',
  // basePath: '/your-repo-name', // Replace with your GitHub repository name
  // Netlify specific configuration
};

module.exports = nextConfig; 