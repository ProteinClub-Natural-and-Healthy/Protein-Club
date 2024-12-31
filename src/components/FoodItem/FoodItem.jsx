import React from 'react';
import './FoodItem.css';

const FoodItem = ({ id, name, description, popup_desc, calories, protein, carbs, fat, image, nutrition_facts, setShowFoodDisplayPopup, setPopupItem }) => {
  const handleItemClick = () => {
    setPopupItem({ id, name, popup_desc, calories, protein, carbs, fat, image, nutrition_facts }); // Set the current item's details
    setShowFoodDisplayPopup(true); // Show the popup
  };

  return (
    <div className='food-item' onClick={handleItemClick}>
      <div className='food-item-image-container'>
        <img className='food-item-image' src={image} alt={name} />
      </div>
      <div className='food-item-info'>
        <div className='food-item-name-rating'>
          <p>{name}</p>
        </div>
        <p className='food-item-desc'>{description}</p>
      </div>
    </div>
  );
};

export default FoodItem;




// //import React, { useState } from 'react'
// import './FoodItem.css'
// // import { assets } from '../../assets/assets'

// const FoodItem = ({id, name, price, description, image, setShowFoodDisplayPopup}) => {

//     //const [itemCount, setItemCount] = useState(0)

//   return (
//     <div className='food-item'>
//         <div className="food-item-image-container">
//             <img className='food-item-image' src={image} alt="" />
//             {/* {
//                 !itemCount
//                     ?<img className='add' onClick={()=>setItemCount(prev=>prev+1)} src={assets.add_icon} alt="" />
//                     :<div className="food-item-counter">
//                         <img className='food-item-remove-icon' onClick={()=>setItemCount(prev=>prev-1)} src={assets.remove_icon} alt="" />
//                         <p>{itemCount}</p>
//                         <img className='food-item-plus-icon' onClick={()=>setItemCount(prev=>prev+1)} src={assets.plus_icon} alt="" />
//                     </div>
//             } */}
//         </div>
//         <div className="food-item-info">
//             <div className="food-item-name-rating">
//                 <p>{name}</p>
//                 {/*<img src={assets.item_rating_stars} alt="" />*/}
//             </div>
//             <p className="food-item-desc">{description}</p>
//             <p className="food-item-price">{price}</p>
//         </div>
//     </div>
//   )
// }

// export default FoodItem
