/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'example.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'example.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'preqty.webninjaz.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'preqty.webninjaz.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
