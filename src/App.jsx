import React from 'react'
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Home from './components/Home'
import Footer from './components/Footer'
import Login from './components/Login'
import Cart from './components/Cart'
import Product from './components/Product'
import Register from './components/Register'
import Notfound from './components/Notfound'
import Brand from './components/Brand'
import Categories from './components/Categories'
import ProtectedRoute from './components/ProtectedRoute'
import ProductDetails from './components/ProductDetails'

export default function App() {



 let router= createHashRouter([
    {path:'',element:<Layout/>, children:[

      {index:true,element:<ProtectedRoute><Home/></ProtectedRoute>},
      {path:'footer',element:<Footer/>},
      {path:'login',element:<Login/>},
      {path:'categories',element:<Categories/>},
      {path:'cart',element:<ProtectedRoute><Cart/></ProtectedRoute>},
      {path:'product',element:<ProtectedRoute><Product/></ProtectedRoute>},
      {path:'productdetails/:id/:categoryId',element:<ProtectedRoute><ProductDetails></ProductDetails></ProtectedRoute>},
      {path:'register',element:<Register/>},
      {path:'brand',element:<ProtectedRoute><Brand/></ProtectedRoute>},     
      {path:'*',element:<Notfound/>},

    ]}
  ])
  return (

    <RouterProvider router={router}></RouterProvider>
  )
  
 
  
}
