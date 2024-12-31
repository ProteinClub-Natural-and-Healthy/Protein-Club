import React from 'react';
import './FoodDisplayPopup.css';

const FoodDisplayPopup = ({ item, setShowFoodDisplayPopup }) => {
  // Ensure the component only renders if `item` exists
  if (!item) return null;

  return (
    <div className='food-display-popup'>
      <div className='popup-overlay' onClick={() => setShowFoodDisplayPopup(false)}></div>
      <div className='popup-content'>
        {/* Close Button */}
        <button className='close-btn' onClick={() => setShowFoodDisplayPopup(false)}>
          ✖
        </button>

        {/* Display Food Item Details */}
        <div className='popup-image-container'>
          <img src={item.image} alt={item.name} className='popup-image' />
        </div>
        <div className='popup-details'>
          <h2 className='popup-name'>{item.name}</h2>
          <p className='popup-description'>{item.popup_desc}</p>
          <div className="popup-nut-facts">
            <h2>Nutrition facts</h2>
            <ul>
                <li>Calories: {item.calories}</li>
                <li>Protein: {item.protein}</li>
                <li>Carbs: {item.carbs}</li>
                <li>Fat: {item.fat}</li>
            </ul>
        </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDisplayPopup;




// import React from 'react'
// import './FoodDisplayPopup.css'

// const FoodDisplayPopup = () => {
//   return (
//     <div className='food-display-popup'>
//       this is the data from item
//     </div>
//   )
// }

// export default FoodDisplayPopup
