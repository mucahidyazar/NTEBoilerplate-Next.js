import React from 'react'
import Icon from '../../ui/Icon'
import {connect} from 'react-redux'
import styles from './styles.module.scss'

interface IBoilerPlate {
  // title?: string
}

const BoilerPlate: React.FC<IBoilerPlate> = (/*{ title }*/) => {
  return (
    <h1 className={styles?.headingOne}>
      BoilerPlate
      <Icon icon="arrow-left" />
    </h1>
  )
}

const mapStateToProps = state => {
  return {
    user: state?.auth?.user,
  }
}

export default connect(mapStateToProps)(BoilerPlate)
