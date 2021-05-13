import Head from 'next/head'
import { connect } from 'react-redux'
import Footer from '../../views/layouts/Footer'
import Header from '../../views/layouts/Header'
import HomeBody from '../../views/bodies/HomeBody'
import MainLayout from '../../views/layouts/MainLayout'

interface IHome {}

const Home: React.FC<IHome> = () => {
  return (
    <MainLayout>
      <Head>
        <title>Home Page</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <HomeBody />
      {/* <Footer /> */}
    </MainLayout>
  )
}

export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps)(Home)
