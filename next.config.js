/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;

module.exports = {
  i18n: {
    locales: ["ru"],
    defaultLocale: "ru",
  },
  images:{
    domains:['cdn.coursehunter.net']
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.(js|ts)x?$/,
      
      use: ['@svgr/webpack'],
    });

    return config;
  },
};