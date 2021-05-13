import React from 'react'
import { connect } from 'react-redux'
import { entry } from '../../../../config/mock'
import {
  ChevronUpIcon,
  ChevronDownIcon,
  HeartIcon,
} from '@heroicons/react/solid'
import DictionaryLayout from 'views/layouts/DictionaryLayout'

interface IHomeBody {
  entries?: [entry]
}

const HomeBody: React.FC<IHomeBody> = ({ entries }) => {
  return (
    <DictionaryLayout entries={entries}>
      {entries.map((entry) => (
        <div className="p-4 text-white border-b border-gray-500 hover:bg-gray-700 cursor-pointer">
          <div className="font-bold flex items-center justify-between mb-4">
            <h5>{entry.title}</h5>
            <div className="flex items-center">
              <a
                href="#"
                className="mr-4 font-semibold text-sm hover:underline cursor-pointer"
              >
                {entry.author}
              </a>
              <span className="transform hover:scale-110 cursor-pointer mb-1">
                ...
              </span>
            </div>
          </div>
          <div className="overflow-elipsis line-clamp-3 mb-4">
            {entry.message}
          </div>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center">
              <span className="mr-4">27.01.2016 00:56</span>
              <ChevronUpIcon className="w-6 h-6 transform hover:scale-125 transition-all duration-300 hover:text-green-500" />
              <ChevronDownIcon className="w-6 h-6 transform hover:scale-125 transition-all duration-300 hover:text-red-500" />
              <div className="flex items-center ml-4 hover:text-red-500">
                <HeartIcon className="w-6 h-6 mr-1 transform hover:scale-125 transition-all duration-300" />
                <span>195</span>
              </div>
            </div>
            <div className="flex items-center">
              <span>Share by:</span>
              {entry.socials.map((entry) => (
                <span className="ml-4">{entry.icon}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </DictionaryLayout>
  )
}

const mapStateToProps = (state) => {
  return {
    entries: state?.main?.entries,
  }
}

export default connect(mapStateToProps)(HomeBody)
