const withMDX = require('@next/mdx')()
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  webpack: (config, { isServer }) => {
    // Modify the default config here

    config.module.rules.push({
      test: /\.(mp3|wav|ogg|flac|m4a)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
          publicPath: `/_next/static/audio/`,
          outputPath: `${isServer ? '../' : ''}static/audio/`,
          esModule: false,
        },
      },
    })
    return config
  },
}
 
module.exports = withMDX(nextConfig)