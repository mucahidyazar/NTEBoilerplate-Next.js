import React from 'react'
import Icon from '../../ui/Icon'
import { connect } from 'react-redux'
import styles from './styles.module.scss'

interface IHomeBody {
  title?: string
}

const HomeBody: React.FC<IHomeBody> = () => {
  return (
    <div className={styles.body}>
      Home page
      <Icon icon="arrow-left" />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state?.auth?.user,
  }
}

export default connect(mapStateToProps)(HomeBody)
