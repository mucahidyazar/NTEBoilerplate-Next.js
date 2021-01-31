import Head from 'next/head'
import styles from './styles.module.scss'

function NotFound() {
  return (
    <div className={styles.main}>
      <Head>
        <title>NotFound Page</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={styles.notFound}>
        <img style={{ width: 500 }} src="static/assets/gif/404.gif" alt="" />
      </div>
    </div>
  )
}

export default NotFound
