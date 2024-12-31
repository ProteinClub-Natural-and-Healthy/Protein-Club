import React, { useState } from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';

const Home = ({ setShowFoodDisplayPopup, setPopupItem }) => {
  const [category, setCategory] = useState('All');

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay
        setShowFoodDisplayPopup={setShowFoodDisplayPopup}
        setPopupItem={setPopupItem}
        category={category}
      />
    </div>
  );
};

export default Home;




// import React, { useState } from 'react'
// import './Home.css'
// import Header from '../../components/Header/Header'
// import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
// import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'

// const Home = ({setShowFoodDisplayPopup}) => {
//   const [category, setCategory] = useState('All');
//   return (
//     <div>
//       <Header />
//       <ExploreMenu category={category} setCategory={setCategory} />
//       <FoodDisplay setShowFoodDisplayPopup={setShowFoodDisplayPopup} category={category} />
//       {/* <button onClick={()=> setShowFoodDisplayPopup(true)}>button</button> */}
//     </div>
//   )
// }

// export default Home
