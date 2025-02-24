/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [{hostname:'cdn.sanity.io'},{hostname:"docs.material-tailwind.com"}],
      },
};

export default nextConfig;
