import React, { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({ category, setShowFoodDisplayPopup, setPopupItem }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className='food-display' id='food-display'>
      <h1>A Menu Crafted for Your Fitness Goals</h1>
      <p className='food-display-text'>
        Fuel your journey with our balanced and delicious options, designed to energize, recover, and support a healthier you.
      </p>
      <div className='food-display-list'>
        {food_list.map((item, index) => {
          return (
            <FoodItem
              key={index}
              id={item.id}
              name={item.name}
              description={item.description}
              popup_desc={item.popup_desc}
              image={item.image}
              nutrition_facts={item.nutrition_facts}
              calories={item.calories}
              protein={item.protein}
              carbs={item.carbs}
              fat={item.fat}
              setShowFoodDisplayPopup={setShowFoodDisplayPopup}
              setPopupItem={setPopupItem}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;




// import React, { useContext } from 'react'
// import './FoodDisplay.css'
// import { StoreContext } from '../../context/StoreContext'
// import FoodItem from '../FoodItem/FoodItem'

// const FoodDisplay = ({category, setShowFoodDisplayPopup}) => {

//     const {food_list} = useContext(StoreContext)

//   return (
//     <div className='food-display' id='food-display'>
//         <h1>A Menu Crafted for Your Fitness Goals</h1>
//         <p className='food-display-text'>Fuel your journey with our balanced and delicious options, designed to energize, recover, and support a healthier you.</p>
//         <div className="food-display-list">
//             {
//                 food_list.map((item, index) => {
//                     return <FoodItem setShowFoodDisplayPopup={setShowFoodDisplayPopup} key={index} id={item.id} name={item.name} description={item.description} price={item.price} image={item.image} />
//                 })
//             }
//         </div>
//     </div>
//   )
// }

// export default FoodDisplay
