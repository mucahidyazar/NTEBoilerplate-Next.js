module.exports = {
  locales: ['tr', 'en'],
  defaultLocale: 'tr',
  pages: {
    '*': ['common', 'meta'],
    '/': ['common'],
    '/*': ['common'],
    '/404': ['404'],
  },
  loadLocaleFrom: (lang, ns) =>
    import(`./config/languages/${lang}/${ns}.json`).then((m) => m.default),
}
