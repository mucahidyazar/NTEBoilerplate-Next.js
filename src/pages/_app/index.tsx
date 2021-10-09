import '../../../public/static/assets/styles/main.scss'
import 'normalize.css'
import Router from 'next/router'
import { AppProps, AppContext } from 'next/app'
import { wrapper } from '../../store'
import { END } from 'redux-saga'
import { appWithTranslation } from 'next-i18next'

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

const WrappedApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

WrappedApp.getInitialProps = wrapper.getInitialAppProps(
  (store) =>
    async ({ Component, ctx }: AppContext) => {
      // 1. Wait for all page actions to dispatch
      const pageProps = {
        ...(Component.getInitialProps
          ? await Component.getInitialProps({ ...ctx, store })
          : {}),
      }

      // 2. Stop the saga if on server
      if (ctx.req) {
        console.log('Saga is executing on server, we will wait')
        store.dispatch(END)
        await store.sagaTask.toPromise()
      }

      // 3. Return props
      return {
        pageProps,
      }
    }
)

export default wrapper.withRedux(appWithTranslation(WrappedApp))
