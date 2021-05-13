import '../../../public/static/assets/styles/main.scss'
import 'tailwindcss/tailwind.css'
import { AppProps, AppContext, AppInitialProps } from 'next/app'
import { Provider } from 'react-redux'
import Router from 'next/router'
import { useStore } from '../../store'

//NProgress
import 'nprogress/nprogress.css'
import NProgress from 'nprogress'

//ReactModal - to set global Modal.setAppElement
import Modal from 'react-modal'

//Moment
import moment from 'moment'

//NProgress Global Settings
NProgress.configure({
  showSpinner: false,
  trickleRate: 0.1,
  trickleSpeed: 300,
  speed: 500,
})
Router.events.on('routeChangeStart', () => {
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => {
  NProgress.done()
})
Router.events.on('routeChangeError', () => {
  NProgress.done()
})

// Global Modal Settings
Modal.setAppElement('#__next')

//MomentJS Settings
moment.locale('tr')

const MyApp = ({ Component, pageProps }: AppProps) => {
  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
