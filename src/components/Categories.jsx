import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import { getCategories } from '../Apis/getCatrgories';

export default function Categories() {


    let [msg, setMsg] = useState('')
    let [loading, setloading] = useState(false)
    let [categories, setcategories] = useState([])

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

    useEffect(() => {
        geCategoriesApi()
    }, [])




    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 5,
        autoplay:true,
        autoplaySpeed:1500
    };



    return (
        <>
            <Slider {...settings}>
               {categories.map(ele=><img className='h-[150px] object-fit cursor-pointer' key={ele._id} src={ele?.image}></img>)}
            </Slider>
        </>
    )
}
