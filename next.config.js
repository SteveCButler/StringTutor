module.exports = {
  // reactStrictMode: true,
  // I don't want it to run when compiling as I trust the CI stage of the pipeline and Husky.
  ignoreDuringBuilds: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pegheadnation.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'www.pegheadnation.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
        port: '',
      },
    ],
  },
};
