// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = {
//   images: {
//     domains: [
//       'images.unsplash.com', 'openweathermap.org'
//     ]
//   }
// }




/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: "http",
        hostname: 'openweathermap.org',
        port: '',
        pathname: '/img/wn/**',
      }

    ]
  }
};

export default nextConfig;
