import localsTR from './localization/tr.json'
import localsEN from './localization/en.json'
import localsNE from './localization/ne.json'
import localsDE from './localization/de.json'

export const router = [
  { source: '/', destination: '/', locale: false },
  { source: '/en/', destination: '/en', locale: false },
  { source: '/ne/', destination: '/ne', locale: false },
  { source: '/de/', destination: '/de', locale: false },

  /** Turkish Localizations */
  ...Object.keys(localsTR).map((destination) => ({
    source: `/tr/${localsTR[destination]}/`,
    destination: `/${destination}`,
    locale: false,
  })),

  /** English Localizations */
  ...Object.keys(localsEN).map((destination) => ({
    source: `/en/${localsEN[destination]}/`,
    destination: `/${destination}`,
    locale: false,
  })),

  /** Netherlands Localizations */
  ...Object.keys(localsNE).map((destination) => ({
    source: `/ne/${localsNE[destination]}/`,
    destination: `/${destination}`,
    locale: false,
  })),

  /** Germany Localizations */
  ...Object.keys(localsDE).map((destination) => ({
    source: `/de/${localsDE[destination]}/`,
    destination: `/${destination}`,
    locale: false,
  })),
]
