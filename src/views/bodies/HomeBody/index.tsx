import React from 'react'
import { entry } from '../../../../config/mock'

interface IHomeBody {
  entries?: [entry]
}

const HomeBody: React.FC<IHomeBody> = ({ entries, id }) => {
  return <div className=""></div>
}

export default HomeBody
