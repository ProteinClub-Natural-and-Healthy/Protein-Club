import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <Link to='/'><img className='footer-logo' src={assets.logo} alt="" /></Link>
                <p> paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph</p>
                <div className="footer-media-icons">
                    <img src={assets.github_icon} alt="" />
                    <img src={assets.linkein_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.instagram_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-right">
                <div className="footer-content-right-1">
                    <h2>Company</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Licence & Certification</li>
                        <li>Contact Details</li>
                    </ul>
                </div>
                <div className="footer-content-right-2">
                    <h2>Contact Details</h2>
                    <ul>
                        <li>+91 7013444235</li>
                        <li>proteinclubnandh@gmail.com</li>
                        <li>Opposite Sai Hospitals, Guestline, Attibele, Karnataka</li>
                    </ul>
                </div>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2024 @ club.com - All right reserved.</p>
    </div>
  )
}

export default Footer
