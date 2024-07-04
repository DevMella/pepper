import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
       <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.pepper} className='logo' alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto vitae distinctio voluptate placeat natus, error fuga accusantium labore, suscipit sint fugiat officiis esse nam quia ut.</p>
            <div className="footer-social-icons">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-linkedin-in"></i>
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1-23-56676-77</li>
                <li>conatact@pepper.com</li>
            </ul>
        </div>
       </div>
       <hr />
       <p className="footer-copyright">Copyright 2024 &copy; Pepper.com - All Right Reserved.</p>

    </div>
  )
}

export default Footer
