import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from './Loading'
import { getsepasificProduct } from '../Apis/getsepasificProduct'
import Item from './Item'
import { getProductwithCategories } from '../Apis/getProduct'

export default function ProductDetails() {

    let {id,categoryId} = useParams()
    let [imgSrc, setImgSrc] = useState('')
    let [msg, setMsg] = useState('')
    let [relatedProducts,setRelatedProducts] = useState([])
  let [loading, setloading] = useState(false)
  let [product, setProduct] = useState([])

   async function getsepasificProductApi()
    {
        


        setloading(true)
        let data = await getsepasificProduct(id)
        
    
        if (data?.data) {
          setProduct(data?.data)
          setMsg('')
          setloading(false)
          console.log('test');
    
        }
    
    
        else {
          setMsg(data?.message)
          setloading(false)
        }
    }

    

    function changeSrc(e)
    {
        setImgSrc(e.target.src)

    }

    async function getProductwithCategoriesApi()
    {
        


        setloading(true)
        let data = await getProductwithCategories(categoryId)
        
    
        if (data?.data) {
          setRelatedProducts(data?.data)
          setMsg('')
          setloading(false)
          console.log('test');
    
        }
    
    
        else {
          setMsg(data?.message)
          setloading(false)
        }
    }

    useEffect(()=>{

      
        
      getProductwithCategoriesApi()
      
  },[])

  useEffect(()=>{
        
    getsepasificProductApi()
    
    
},[id])

   
if (loading)
  return <Loading></Loading>

if (msg)
  return <h2 className='text-red-700 font-bold'>{msg}</h2>
  




  return (
    <div className='row items-center py-5 md:gap-0 gap-10'>
        <div className="md:w-1/3">
    
        </div>
        <div className=" md:w-2/3">
        <img src={imgSrc?imgSrc:product?.imageCover} className='w-full' alt="" />
        <ul className='flex justify-center gap-2'>
            {product.images?.map(img=><li key={img}><img onClick={changeSrc} src={img} className='w-[90px] cursor-pointer'  alt="" /></li>)}
        </ul>
        <p className='text-green-700 line-clamp-1'>{product?.category?.name}</p>
           <p className='line-clamp-1'>{product?.title}</p>
           <div className='flex justify-between my-3'>
            <span>{product?.price}EGP</span>
            <span> <i className='fas fa-star text-yellow-600'></i> {product?.ratingsAverage}</span>
           </div>
           
           <button className='btn bg-green-700 text-white p-2 rounded'>Add To cart</button>
        
        </div>

        {relatedProducts?.map(prod=><Item ele={prod} key={prod._id}></Item>)}

    </div>
  )
}
