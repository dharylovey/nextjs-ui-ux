import React from 'react'

export default function divider() {
  return (
    <span className="relative flex justify-center mx-auto max-w-screen-xl">
        <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>
      </span>
  )
}
