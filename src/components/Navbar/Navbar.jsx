import React, { useState } from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";

const Navbar = () => {

    const [select, setSelect] = useState("home");
    
    return (
        <div className='navbar'>
            <Link to='/'><img className='logo' src="../src/assets/logo.png" alt="Logo" /></Link>
            <ul className="navbar-menu">
                <Link to='/' className={select==="home"?"active":""} onClick={()=> setSelect("home")}>Home</Link>
                <a href='#food-display' className={select==="menu"?"active":""} onClick={()=> setSelect("menu")}>Menu</a>
                <a href='#' className={select==="services"?"active":""} onClick={()=> setSelect("services")}>Services</a>
                <Link to='/MissionVision' className={select==="mission"?"active":""} onClick={()=> setSelect("mission")}>Mission & Vision</Link>
                <a href='#footer ' className={select==="contact-us"?"active":""} onClick={()=> setSelect("contact-us")}>Contact Us</a>
            </ul>
            {/* <div className="navbar-right">
                 <div className="basket-icon">
                    <img src="../src/assets/basket-icon2.png" alt="Basket" />
                    <div className="basket-dot"></div>
                </div> 
                <button>Sign In</button>
            </div> */}
        </div>
    )
}
export default Navbar
