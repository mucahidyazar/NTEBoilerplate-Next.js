import React from 'react'
import styles from './styles.module.scss'

interface IInput {
  placeholder?: any
  iconLeft?: string
  iconRight?: string
  className?: string
}

const Input: React.FC<IInput> = ({
  placeholder,
  iconLeft,
  iconRight,
  className,
}) => {
  return (
    <div
      className={`bg-gray-900 p-2 border-gray-600 border-2 flex items-center justify-between rounded w-full ${className}`}
    >
      <div>
        {iconRight && (
          <Icon
            icon={iconRight}
            className="cursor-pointer transform hover:scale-105 transition-all duration-100 mr-2"
          />
        )}
        <input
          type="text"
          placeholder={placeholder}
          className="bg-transparent outline-none text-white"
        />
      </div>
      {iconLeft && (
        <Icon
          icon={iconLeft}
          className="cursor-pointer transform hover:scale-105 transition-all duration-100"
        />
      )}
    </div>
  )
}

export default Input
