import Head from 'next/head'
import { connect } from 'react-redux'
import Icon from '../../views/ui/Icon'
import Footer from '../../views/layouts/Footer'
import Nav from '../../views/layouts/Nav'
import { Fragment } from 'react'

interface IBoilerplate {}

const Boilerplate: React.FC<IBoilerplate> = () => {
  return (
    <Fragment>
      <Head>
        <title>Boiler Plate Page</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Nav />
      <h1>
        Deneme
        <Icon icon="arrow-left" />
      </h1>
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
    products: state.main.products,
  }
}

export default connect(mapStateToProps)(Boilerplate)
