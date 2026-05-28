import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-logo'>
        <p>WOODART FURNITURE</p>
      </div>
      <ul className='footer-links'>
        <li><Link to="/company">Company</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/offices">Offices</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className='footer-social-icon'>
        <div className='footer-icons-container'>
            <img src={instagram_icon}/>
        </div>
        <div className='footer-icons-container'>
            <img src={pintester_icon}/>
        </div>
        <div className='footer-icons-container'>
            <img src={whatsapp_icon}/>
        </div>
      </div>
      <div className='footer-copyright'>
        <hr/>
        <p>Copyright @ 2025 -All Right Reserved      This website is developed and maintained by <a href="https://brtportfolio.com" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "underline" }}>
    brtportfolio.com
  </a></p>
      </div>
    </div>
  )
}

export default Footer
