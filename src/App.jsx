import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import FoodDisplayPopup from './components/FoodDisplayPopup/FoodDisplayPopup';
import MissionVision from './pages/Home/MissionVision/MissionVision';

const App = () => {
  const [showFoodDisplayPopup, setShowFoodDisplayPopup] = useState(false);
  const [popupItem, setPopupItem] = useState(null); // State for the selected item details

  return (
    <>
      {showFoodDisplayPopup && <FoodDisplayPopup item={popupItem} setShowFoodDisplayPopup={setShowFoodDisplayPopup} />}
      <div className='app'>
        <Navbar />
        <Routes>
          <Route
            path='/'
            element={<Home setShowFoodDisplayPopup={setShowFoodDisplayPopup} setPopupItem={setPopupItem} />}
          />
          {/* <Route path='/cart' element={<Cart />} /> */}
          <Route path='/MissionVision' element={<MissionVision />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;



// import React, { useState } from 'react'
// import Navbar from './components/Navbar/Navbar'
// import { Route, Routes } from 'react-router-dom'
// import Home from './pages/Home/Home'
// import Cart from './pages/Cart/Cart'
// import Footer from './components/Footer/Footer'
// import FoodDisplayPopup from './components/FoodDisplayPopup/FoodDisplayPopup'

// const App = () => {

//   const [showFoodDisplayPopup, setShowFoodDisplayPopup] = useState(false)

//   return (
//     <>
//       {showFoodDisplayPopup?<FoodDisplayPopup />:<></>}
//       <div className='app'>
//         <Navbar />
//         <Routes>
//           <Route path='/' element={<Home setShowFoodDisplayPopup={setShowFoodDisplayPopup} />} />
//           <Route path='/' element={<Cart />} />
//         </Routes>
//       </div>
//       <Footer />
//     </>
//   )
// }

// export default App
