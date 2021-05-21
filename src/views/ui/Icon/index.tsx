import React from 'react'
import styles from './styles.module.scss'

interface IIcon {
  style?: any
  icon?: string
  className?: string
}

const Icon: React.FC<IIcon> = ({ style, icon, className }) => {
  return (
    <i style={style} className={`${styles.icon} i icon-${icon} ${className}`} />
  )
}

export default Icon
