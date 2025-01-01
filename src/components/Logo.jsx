import React from 'react'
import logo from './logo.jpg'

function Logo({width = '100px'}) {
  return (
    <div className="flex justify-center items-center">
  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-indigo-800">
    Write<span className="text-blue-500">Wave</span>
  </h1>
</div>
  )
}

export default Logo