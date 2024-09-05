import React, { useEffect, useState } from 'react'
import { getProducts } from '../Apis/getProduct'
import Loading from './Loading';
import Item from './Item';


export default function FeaturedProducts({arr}) {

 
  

  let [msg, setMsg] = useState('')
  let [loading, setloading] = useState(false)
  let [productArr, setProductArr] = useState([])

  async function getProductApi()
   {
    setloading(true)
    let data = await getProducts()
    console.log(data);

    if (data?.data) {
      setProductArr(data?.data)
      setMsg('')
      setloading(false)
      console.log('test');

    }


    else {
      setMsg(data?.message)
      setloading(false)
    }
  }

  useEffect(() => {
    getProductApi()
  }, [])

  if (loading)
    return <Loading></Loading>

  if (msg)
    return <h2 className='text-red-700 font-bold'>{msg}</h2>





  return (
    <div className='row'>
      
      {productArr.map(ele => <Item key={ele?._id} ele={ele}></Item>)} 
      
      
      

    </div>
  )

}
