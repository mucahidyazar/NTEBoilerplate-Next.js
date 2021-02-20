import Head from 'next/head'
import { connect } from 'react-redux'
import Footer from '../../views/layouts/Footer'
import Nav from '../../views/layouts/Nav'
import { Fragment } from 'react'
import HomeBody from '../../views/bodies/HomeBody'

interface IHome {}

const Home: React.FC<IHome> = () => {
  return (
    <Fragment>
      <Head>
        <title>Home Page</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Nav />
      <HomeBody />
      <Footer />
    </Fragment>
  )
}

export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

export default connect(mapStateToProps)(Home)
