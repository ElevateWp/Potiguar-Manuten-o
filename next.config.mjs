/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      { source: '/dental-implants', destination: '/encanamento', permanent: true },
      { source: '/root-canal', destination: '/eletricidade', permanent: true },
      { source: '/teeth-whitening', destination: '/pintura', permanent: true },
      { source: '/dental-cleaning', destination: '/reformas', permanent: true },
      { source: '/braces', destination: '/reparos-manutencao', permanent: true },
      { source: '/cosmetic-dentistry', destination: '/portoes-e-consertos', permanent: true },
    ];
  },
};

export default nextConfig;
