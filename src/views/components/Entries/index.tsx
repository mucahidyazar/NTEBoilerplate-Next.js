import React from 'react'
import { entry } from '../../../../config/mock'
import {
  ChevronUpIcon,
  ChevronDownIcon,
  HeartIcon,
} from '@heroicons/react/solid'
import Image from 'next/image'

interface IEntries {
  entry?: entry
  entries?: entry[]
  id?: string
}

const Entries: React.FC<IEntries> = ({ entry, entries, id }) => {
  const data = entry ? [entry, ...entries] : entries

  return (
    <aside className="bg-gray-800 col-span-2 md:col-span-3 rounded py-4 hidden sm:block">
      {data.map((entry) => {
        if (id && entry.entryId !== id) return null

        return (
          <div className="p-4 text-white border-b border-gray-500 hover:bg-gray-900 cursor-pointer">
            <div className="font-bold flex items-center justify-between mb-4">
              <h5>{entry.title}</h5>
              <div className="flex items-center font-semibold text-sm ">
                <a
                  href="#"
                  className="cursor-pointer flex items-center border bg-gray-800 hover:bg-gray-700 rounded-l-sm px-1 py-0.5 max-w-28"
                >
                  <div className="border w-4 h-4 mr-1 rounded-sm">
                    <Image
                      width={16}
                      height={16}
                      src="/static/assets/png/logo.png"
                      alt="profile photo"
                      className="object-cover transform hover:scale-125"
                    />
                  </div>
                  <span className="overflow-hidden">{entry.author}</span>
                </a>

                <div className="border-r border-t border-b bg-gray-800 hover:bg-gray-700 rounded-r-sm px-1 py-0.5">
                  <span>...</span>
                </div>
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
        )
      })}
    </aside>
  )
}

export default Entries
