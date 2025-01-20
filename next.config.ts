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
  /* config options here */
};
// module.exports = {
//   output: 'export',
// }

export default nextConfig;
