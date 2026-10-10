/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export so the site can be served from Cloudflare Pages / Workers static assets.
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
}

export default nextConfig
