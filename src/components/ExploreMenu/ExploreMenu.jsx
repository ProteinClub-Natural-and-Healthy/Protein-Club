import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Nature's Best for You</h1>
      <p className='explore-menu-text'>We use only natural and wholesome ingredients to create nutritious meals. Each element is carefully selected to promote health and fitness.</p>
      <div className="explore-menu-list">
        {
            menu_list.map((item,index)=> {
                return (
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-item'>
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                        <center><p> {item.menu_name} </p></center>
                    </div>
                )
            })
        }
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu
