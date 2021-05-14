import React from 'react'
import { entry } from '../../../../config/mock'

interface IMainLayout {
  children?: React.ReactNode
  className?: string
  entries?: [entry]
}

const MainLayout: React.FC<IMainLayout> = ({
  children,
  entries,
  className,
}) => {
  return <div className={className}></div>
}

export default MainLayout
