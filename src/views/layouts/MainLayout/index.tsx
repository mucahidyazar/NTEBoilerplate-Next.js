import React from 'react'

interface IMainLayout {
  children?: React.ReactNode
}

const MainLayout: React.FC<IMainLayout> = ({ children }) => {
  return <div className="bg-gray-900 px-12 py-4 w-full h-full">{children}</div>
}

export default MainLayout
