import Head from 'next/head'
import axios from 'axios'
import { withTranslation } from '../../config/i18n/index'
import { connect } from 'react-redux'
import { getProducts, setProducts } from '../../redux/actions'
import MainLayout from '../../views/layouts/Main'
import Icon from '../../views/ui/Icon'

function Boilerplate({ t, data, dispatch }) {
  dispatch(getProducts())

  return (
    <MainLayout title="Boilerplate Page">
      <h1>
        Deneme
        <Icon icon="arrow-left" />
      </h1>
    </MainLayout>
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

export default connect(mapStateToProps)(withTranslation('common')(Boilerplate))
