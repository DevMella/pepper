import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDispaly/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'
import Cart from '../Cart/Cart'

const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div className=''>
      <Header/>
      <ExploreMenu category = {category} setCategory = {setCategory} />
      <FoodDisplay category = {category}/>
      <AppDownload/>
      <Cart/>
    </div>
  )
}

export default Home
