import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';

const Navbar = ({setShowLogin}) => {
  const[menu,setMenu] = useState('home');
  return (
    <div className='navbar'>
       <img src={assets.pepper} className='logo' alt="" />
       <ul className="navbar-menu">
        <Link  to='/' onClick={()=> setMenu("home")} className={menu==="home"?"active" :""}>home</Link>
        <a href='#explore-menu' onClick={()=> setMenu("menu")} className={menu==="menu"?"active" :""}>menu</a>
        <a href='#app-download' onClick={()=> setMenu("mobile-app")} className={menu==="mobile-app"?"active" :""}>mobile-apps</a>
        <a href='#footer' onClick={()=> setMenu("contact-us")} className={menu==="contact-us"?"active" :""}>contact us</a>
       </ul>
       <div className="navbar-right">
        <Link to='/cart' ><img src={assets.glass} className='ican' alt="" /></Link>
        <div className="navbar-search-icon">
            <img src={assets.cart} className='ican' alt="" />
            <div className="dot"></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>sign in</button>
       </div>
    </div>
  )
}

export default Navbar
