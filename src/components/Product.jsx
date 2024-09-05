import React, { useEffect, useState } from 'react'
import FeaturedProducts from './FeaturedProduct'
import { getCategories } from '../Apis/getCatrgories'
import { getProductwithCategories } from '../Apis/getProduct'

export default function Products() {
  let [categories, setcategories] = useState([])
  
  let [msg, setMsg] = useState('')
  let [loading, setloading] = useState(false)

  let [specificArr,setSpecificArr] = useState([])

  async function geCategoriesApi() {
      setloading(true)
      let data = await getCategories()
      
      if (data?.data) {
          setcategories(data?.data)
          setMsg('')
          setloading(false)
      }

      else {
          setMsg(data?.message)
          setloading(false)
      }
  }


  async function getProductwithCategoriesApi(id)
  {
    setloading(true)
    let data = await  getProductwithCategories(id)
    
    if (data?.data) {
      setSpecificArr(data?.data)
        setMsg('')
        setloading(false)
    }

    else {
        setMsg(data?.message)
        setloading(false)
    }
     
  }



  useEffect(() => {
    geCategoriesApi()
  }, [])



  return (
    <div className='flex'>
      <ul className='p-2'>
        {categories?.map(ele=><li onClick={()=>{getProductwithCategoriesApi(ele?._id)}} className='hover:underline cursor-pointer' key={ele._id}>{ele.name}</li>)}
      </ul>
      <FeaturedProducts arr={specificArr}></FeaturedProducts>
    </div>
  )
}
