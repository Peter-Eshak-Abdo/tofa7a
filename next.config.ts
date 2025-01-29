import type { NextConfig } from "next";

import path from 'path';

module.exports = {
  webpack: (config: { resolve: { alias: { [x: string]: string; }; }; }) => {
    // Some custom Webpack configuration...
    config.resolve.alias['@components'] = path.join(__dirname, 'components');
    return config;
  },
};
const nextConfig: NextConfig = {
  reactStrictMode: true,
  /* config options here */
};
// module.exports = {
//   output: 'export',
// }

// next.config.ts

export default nextConfig;
