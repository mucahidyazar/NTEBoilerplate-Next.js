import Head from 'next/head'
import { connect } from 'react-redux'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Footer from '../../views/layouts/Footer'
import Nav from '../../views/layouts/Nav'
import { Fragment } from 'react'
import AboutBody from '../../views/bodies/AboutBody'

interface IAbout {}

const About: React.FC<IAbout> = () => {
  return (
    <Fragment>
      <Head>
        <title>About Page</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Nav />
      <AboutBody />
      <Footer />
    </Fragment>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      // Will be passed to the page component as props
    },
  }
}

export default About
