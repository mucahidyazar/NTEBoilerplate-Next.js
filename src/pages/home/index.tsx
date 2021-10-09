import Head from 'next/head'
import { connect } from 'react-redux'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Footer from '../../views/layouts/Footer'
import Nav from '../../views/layouts/Nav'
import { Fragment } from 'react'
import HomeBody from '../../views/bodies/HomeBody'
import { wrapper } from '../../store'

interface IHome {}

const Home: React.FC<IHome> = ({ custom }) => {
  console.log({ custom })
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

// export async function getStaticProps({ locale }) {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, ['common'])),
//       // Will be passed to the page component as props
//     },
//   }
// }

export const getServerSideProps = wrapper.getServerSideProps(
  ({ locale }) =>
    async () => {
      // store.dispatch({type: SAGA_ACTION});
      // store.dispatch(END);
      await console.log({ locale })
      // await store.sagaTask.toPromise()

      return { props: { custom: 'custom' } }
    }
)

export default Home
