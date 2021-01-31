const nextTranslate = require('next-translate')

module.exports = {
  env: {
    BASE_URL: process.env.BASE_URL,
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
  ...nextTranslate(),
}
