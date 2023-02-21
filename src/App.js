import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Login from './components/Login'
import Cart from './components/Cart'

import { useEffect } from 'react'
import webService from './services/WebService';
import webUrls from './services/WebUrls'

import { useDispatch } from 'react-redux'
import {loadCategory,loadBrand,loadProduct} from './reduxconfig/MasterSlice'
export default function  App()
{
  var dispatch = useDispatch()

  var loadData = async()=>
  {
    var cateResponse = await webService.getApiCall(webUrls.CATEGORY_LOAD)
    dispatch(loadCategory(cateResponse.data))

    var brandResponse = await webService.getApiCall(webUrls.BRAND_LOAD)
    dispatch(loadBrand(brandResponse.data))

    var productResponse = await webService.getApiCall(webUrls.PRODUCT_LOAD)
    dispatch(loadProduct(productResponse.data))
    
  }
  useEffect(()=>{
      loadData()
  },[])

  return <>
    <Header/>
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
  </>
}