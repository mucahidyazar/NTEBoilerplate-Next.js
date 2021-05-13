import Image from 'next/image'
import Icon from '../../ui/Icon'
import { connect } from 'react-redux'
import HamburgerMenu from '../../components/HamburgerMenu'

interface IHeader {
  title?: string
}

const Header: React.FC<IHeader> = ({ title }) => {
  return (
    <header>
      <div className="bg-gray-700 p-4 rounded-tl rounded-tr flex flex-wrap items-center justify-between lg:flex-nowrap border-b border-gray-600">
        <div className="flex items-center order-2 lg:order-1 w-auto">
          <Image src="/static/assets/png/logo.png" width={100} height={40} />
          <span className="font-bold text-white ml-4">Manas Sozluk</span>
        </div>
        <div className="bg-gray-900 p-2 border-gray-600 border-2 flex items-center justify-between rounded w-full mb-4 order-1 lg:order-2 lg:w-80 lg:mb-0">
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none text-white"
          />
          <Icon
            icon="search"
            className="cursor-pointer transform hover:scale-105 transition-all duration-100"
          />
        </div>
        <div className="flex items-center order-3">
          <button className="w-20 h-9 bg-red-500 text-white rounded-sm outline-none mr-4 hidden sm:block">
            Register
          </button>
          <button className="w-20 h-9 bg-red-500 text-white rounded-sm outline-none hidden sm:block">
            Login
          </button>
          <HamburgerMenu className="sm:hidden w-auto" />
        </div>
      </div>
      <div className="flex text-gray-300 font-semibold text-sm bg-gray-700 rounded-bl rounded-br overflow-x-auto">
        <h4 className="px-6 py-2 hover:bg-gray-600 cursor-pointer border-transparent border-b hover:border-red-400">
          Today
        </h4>
        <h4 className="px-6 py-2 hover:bg-gray-600 cursor-pointer border-transparent border-b hover:border-red-400">
          News
        </h4>
        <h4 className="px-6 py-2 hover:bg-gray-600 cursor-pointer border-transparent border-b hover:border-red-400">
          Popular
        </h4>
        <h4 className="px-6 py-2 hover:bg-gray-600 cursor-pointer border-transparent border-b hover:border-red-400">
          Issues
        </h4>
        <h4 className="px-6 py-2 hover:bg-gray-600 cursor-pointer border-transparent border-b hover:border-red-400">
          Follow
        </h4>
        <h4 className="px-6 py-2 hover:bg-gray-600 cursor-pointer border-transparent border-b hover:border-red-400">
          End
        </h4>
        <h4 className="px-6 py-2 hover:bg-gray-600 cursor-pointer border-transparent border-b hover:border-red-400">
          Cross
        </h4>
        <h4 className="px-6 py-2 hover:bg-gray-600 cursor-pointer border-transparent border-b hover:border-red-400">
          Newbie
        </h4>
        <h4 className="px-6 py-2 hover:bg-gray-600 cursor-pointer border-transparent border-b hover:border-red-400">
          #Sports
        </h4>
        <h4 className="px-6 py-2 hover:bg-gray-600 cursor-pointer border-transparent border-b hover:border-red-400">
          #Relationships
        </h4>
        <h4 className="px-6 py-2 hover:bg-gray-600 cursor-pointer border-transparent border-b hover:border-red-400">
          #Politics
        </h4>
        <h4 className="px-6 py-2 hover:bg-gray-600 cursor-pointer border-transparent border-b hover:border-red-400">
          #Cyrpto
        </h4>
        <h4 className="px-6 py-2 hover:bg-gray-600 cursor-pointer border-transparent border-b hover:border-red-400">
          #World
        </h4>
        <h4 className="px-6 py-2 hover:bg-gray-600 cursor-pointer border-transparent border-b hover:border-red-400">
          #Twitter
        </h4>
      </div>
    </header>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state?.auth?.user,
  }
}

export default connect(mapStateToProps)(Header)
