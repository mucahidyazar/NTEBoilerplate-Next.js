module.exports = {
  locales: ['tr', 'en'],
  defaultLocale: 'tr',
  pages: {
    '*': ['common', 'meta'],
    '/': ['partnerRegister'],
    '/404': ['404'],
    '/partner/register': ['partnerRegister'],
  },
  loadLocaleFrom: (lang, ns) =>
    import(`./config/languages/${lang}/${ns}.json`).then((m) => m.default),
}
