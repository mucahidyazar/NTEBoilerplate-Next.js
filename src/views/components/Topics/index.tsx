import React from 'react'
import { entry } from '../../../../config/mock'
import Link from 'next/link'

interface ITopics {
  id?: string
  topics?: entry[]
}

const Topics: React.FC<ITopics> = ({ id, topics }) => {
  return (
    <aside className="bg-gray-800 col-span-4 md:col-span-1 rounded text-white sm:col-span-2 h-96">
      <h4 className="p-2 border-b border-gray-400 uppercase font-semibold text-sm">
        Gundem
      </h4>

      <ul>
        {topics.map((entry) => (
          <Link href={`/category/${entry.categoryId}/${entry.entryId}`}>
            <div
              className={`p-2 cursor-pointer hover:bg-gray-700 duration-300 transition-all font-light text-sm flex items-center justify-between border-transparent border-l hover:border-red-400 ${
                entry.entryId === id && 'border-red-400'
              }`}
            >
              <h5 className="overflow-elipsis truncate mr-2">{entry.title}</h5>
              {entry?.messages?.length && (
                <span className="w-5 h-5 text-xs rounded flex items-center justify-center bg-red-500">
                  {entry.messages.length}
                </span>
              )}
            </div>
          </Link>
        ))}
      </ul>
    </aside>
  )
}

export default Topics
