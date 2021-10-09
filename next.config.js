const { i18n } = require('./next-i18next.config')
const routes = require('./src/router/routes')

console.log(...Object.values(routes?.de))

module.exports = {
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    }

    return config
  },
  //!PURGE CSS SETTINGS
  plugins: [
    'postcss-flexbugs-fixes',
    [
      'postcss-preset-env',
      {
        autoprefixer: {
          flexbox: 'no-2009',
        },
        stage: 3,
        features: {
          'custom-properties': false,
        },
      },
    ],
    [
      '@fullhuman/postcss-purgecss',
      {
        content: [
          './pages/**/*.{js,jsx,ts,tsx}',
          './components/**/*.{js,jsx,ts,tsx}',
        ],
        defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
      },
    ],
  ],
  //https://nextjs.org/docs/basic-features/image-optimization
  //https://nextjs.org/docs/api-reference/next/image
  images: {
    deviceSizes: [320, 420, 768, 1024, 1200],
    iconSizes: [],
    domains: ['188.132.148.79', 'api.iyifiyat.com'],
    loader: 'default',
  },
  reactStrictMode: true,
  i18n,
  trailingSlash: true,
  rewrites: async () => [
    ...Object.values(routes?.de),
    ...Object.values(routes?.en),
    ...Object.values(routes?.ne),
    ...Object.values(routes?.tr),
  ],
}
