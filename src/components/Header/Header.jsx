import React from 'react'
import './Header.css'
import { assets } from '../../assets/assets'

const Header = () => {
  return (
    <div className='header'>
        <div className="header-content">
            <h2>Simplify Your Nutrition, Maximize Results</h2>
            <p>Stop stressing over meal planning. With Protein Club, you can focus on your workouts while we take care of your nutrition. Our expertly crafted meals make staying on track simple and rewarding.</p>
            <a href="#food-display"><button>View Menu</button></a>
        </div>
        {/* <div className="header-side-img">
          <img src={assets.bgSideImage} alt="" />
        </div> */}
    </div>
  )
}

export default Header
