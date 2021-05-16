import Image from 'next/image'
import Link from 'next/link'
import Icon from '../../ui/Icon'
import { connect } from 'react-redux'
import HamburgerMenu from '../../components/HamburgerMenu'
import { categories } from '../../../../config/mock'
import Options from '../../components/Options'
import { CogIcon } from '@heroicons/react/solid'

interface IHeader {
  catId?: string
}

const Header: React.FC<IHeader> = ({ catId }) => {
  return (
    <header>
      <div className="bg-gray-700 p-4 rounded-tl rounded-tr flex flex-wrap items-center justify-between lg:flex-nowrap border-b border-gray-600">
        <Link href="/">
          <div className="flex items-center order-2 lg:order-1 w-auto cursor-pointer">
            <Image src="/static/assets/png/logo.png" width={100} height={40} />
            <span className="font-bold text-white ml-4">Manas Sozluk</span>
          </div>
        </Link>
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
          <button className="w-20 h-9 bg-gray-600 hover:bg-gray-500 text-white rounded-sm outline-none mr-4 hidden sm:block">
            Register
          </button>
          <button className="w-20 h-9 bg-gray-600 hover:bg-gray-500 text-white rounded-sm outline-none mr-4 hidden sm:block">
            Login
          </button>
          <Options options={[{ id: '1', title: 'Dark Mode' }]}>
            <button className="w-9 h-9 bg-gray-600 hover:bg-gray-500 text-white rounded-sm outline-none flex items-center justify-center">
              <CogIcon width={20} height={20} />
            </button>
          </Options>
          <HamburgerMenu className="sm:hidden w-auto" />
        </div>
      </div>
      <div className="flex text-gray-300 font-semibold text-sm bg-gray-700 rounded-bl rounded-br overflow-x-auto">
        {categories.map((category) => (
          <Link href={`/category/${category.id}`}>
            <h4
              className={`px-6 py-2 hover:bg-gray-600 cursor-pointer border-transparent border-b hover:border-red-400 ${
                category.id === catId && 'border-red-400'
              }`}
            >
              {category.name}
            </h4>
          </Link>
        ))}
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
