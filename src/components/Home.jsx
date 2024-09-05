import React, { useContext } from 'react'
import FeaturedProducts from './FeaturedProduct'
import Categories from './Categories'
import MainSlider from './mainSlider'



export default function Home() {

  
  
  return (
    <div>
      <MainSlider/>
      <Categories/>

      <FeaturedProducts></FeaturedProducts>
      
    
    </div>
  )
}
