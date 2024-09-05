import React from 'react'
import { Link } from 'react-router-dom'

export default function Item({ele}) {
  return (
    <div className='md:w-1/6 sm:w-1/2'>
      <div className="product p-2 cursor-pointer">
       
      <Link to={`/productdetails/${ele?._id}/${ele?.category?._id}`}>

        <img src={ele?.imageCover} className='w-full' alt="" />
        <p className='text-green-700 line-clamp-1'>{ele?.category?.name}</p>
        
           <p className='line-clamp-1'>{ele?.title}</p>
           <div className='flex justify-between my-3'>
            <span>{ele?.price}EGP</span>
            <span> <i className='fas fa-star text-yellow-600'></i> {ele?.ratingsAverage}</span>
           </div>
           </Link>
           <button className='btn bg-green-700 text-white p-2 rounded'>Add To cart</button>


      </div>
    </div>

  )
}

