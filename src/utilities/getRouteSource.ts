import routes from '../router/routes'

export const getRouteSource = (name, language = 'en') =>
  routes[language][name].source
