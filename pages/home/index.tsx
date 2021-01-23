import Head from 'next/head'
import styles from './styles.module.scss'
import { connect } from 'react-redux'
import { getProducts } from '../../redux/actions'
import Icon from '../../views/ui/Icon'
import Footer from '../../views/layouts/Footer'
import Nav from '../../views/layouts/Nav'

function Home({ t, data, dispatch }) {
  dispatch(getProducts())

  return (
    <div className={styles.main}>
      <Head>
        <title>Home Page</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Nav />
      <h1>
        Deneme
        <Icon icon="arrow-left" />
      </h1>
      <Footer />
    </div>
  )
}

export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.main.products,
  }
}

export default connect(mapStateToProps)(Home)
