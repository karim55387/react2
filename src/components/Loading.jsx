import React from 'react'

function Loading() {
  return (
    <div className='flex justify-center items-center absolute top-0 bottom-0 right-0 left-0 bg-gray-400 bg-opacity-5'>
      <div className="sk-chase">
  <div className="sk-chase-dot"></div>
  <div className="sk-chase-dot"></div>
  <div className="sk-chase-dot"></div>
  <div className="sk-chase-dot"></div>
  <div className="sk-chase-dot"></div>
  <div className="sk-chase-dot"></div>
</div>
    </div>
  )
}

export default Loading