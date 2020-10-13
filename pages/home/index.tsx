import Head from 'next/head'
import axios from 'axios'
import { withTranslation } from '../../config/i18n/index'
import { connect } from 'react-redux'
import { getProducts, setProducts } from '../../redux/actions'
import MainLayout from '../../views/layouts/Main'
import Icon from '../../views/ui/Icon'

function Home({ t, data, dispatch }) {
  dispatch(getProducts())

  return (
    <MainLayout title="Home Page">
      <h1>
        Deneme
        <Icon icon="arrow-left" />
      </h1>
    </MainLayout>
  )
}

Home.getInitialProps = async () => {
  return { namespacesRequired: ['common'] }
}

const mapStateToProps = (state) => {
  return {
    products: state.main.products,
  }
}

export default connect(mapStateToProps)(withTranslation('common')(Home))
