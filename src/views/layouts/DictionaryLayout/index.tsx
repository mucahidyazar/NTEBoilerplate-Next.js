import React from 'react'
import { connect } from 'react-redux'
import { entry } from '../../../../config/mock'
import {
  ChevronUpIcon,
  ChevronDownIcon,
  HeartIcon,
} from '@heroicons/react/solid'

interface IDictionaryLayout {
  entries?: [entry]
}

const DictionaryLayout: React.FC<IDictionaryLayout> = ({
  entries,
  children,
}) => {
  return (
    <div className="grid grid-cols-4 my-4 gap-4">
      <aside className="bg-gray-800 col-span-4 md:col-span-1 rounded text-white sm:col-span-2">
        <h4 className="p-2 border-b border-gray-400 uppercase font-semibold text-sm">
          Gundem
        </h4>

        <ul>
          {entries.map((entry) => (
            <li className="p-2 cursor-pointer hover:bg-gray-700 duration-300 transition-all font-light text-sm flex items-center justify-between border-transparent border-l hover:border-red-400">
              <a href="#" className="overflow-elipsis truncate mr-2">
                {entry.title}
              </a>
              {entry?.messages?.length && (
                <span className="w-5 h-5 text-xs rounded flex items-center justify-center bg-red-500">
                  {entry.messages.length}
                </span>
              )}
            </li>
          ))}
        </ul>
      </aside>
      <aside className="bg-gray-800 col-span-2 md:col-span-3 rounded py-4 hidden sm:block">
        {children}
      </aside>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    entries: state?.main?.entries,
  }
}

export default connect(mapStateToProps)(DictionaryLayout)
