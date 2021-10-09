const de = {
  '/': {
    source: '/de',
    destination: '/',
    locale: false,
  },
  '/uber': {
    source: '/de/uber',
    destination: '/about',
    locale: false,
  },
}

const en = {
  '/': {
    source: '/en',
    destination: '/',
    locale: false,
  },
  '/about': {
    source: '/about',
    destination: '/about',
    locale: false,
  },
}

const ne = {
  '/': {
    source: '/ne',
    destination: '/',
    locale: false,
  },
  '/wat-betreft': {
    source: '/ne/wat-betreft',
    destination: '/about',
    locale: false,
  },
}

const tr = {
  '/': {
    source: '/tr',
    destination: '/',
    locale: false,
  },
  '/about': {
    source: '/tr/hakkimizda',
    destination: '/about',
    locale: false,
  },
}

module.exports = {
  de,
  en,
  ne,
  tr,
}
