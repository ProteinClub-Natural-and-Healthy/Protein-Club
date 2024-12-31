import React from 'react'
import './MissionVision.css'

const MissionVision = () => {
  return (
    <div className='Mission-Vision'>
        <div className="Mission-Vision-content">
            <div className="mission-statement">
                <h1>Mission</h1>
                <p>At ProteinClub, our mission is to empower individuals on their fitness and health journeys by providing natural, nutritious, and delicious pre- and post-workout meals. We are committed to promoting a healthier lifestyle through clean, high-quality ingredients and convenient options tailored to support every fitness goal.</p>
            </div>
            <div className="vision-statement">
                <h1>Vision</h1>
                <p>Our vision is to become a trusted name in the fitness and nutrition industry by setting the standard for natural, wholesome, and innovative meal solutions. We aim to inspire a community that prioritizes health and wellness, making fitness a sustainable and enjoyable part of everyday life.</p>
            </div>
        </div>
        <div className="quality-maintenance">
            <h1>Why Choose ProteinClub?</h1>
            <div className="natural-healthy-statement">
                <h2>Natural and Healthy</h2>
                <p>At ProteinClub, we focus on delivering meals that are naturally wholesome and packed with the nutrients your body needs to thrive. Our carefully crafted products provide:</p>
                <ul>
                    <li><b>High Protein:</b> Fuel your muscles and support recovery with protein-rich options.</li>
                    <li><b>High Calories:</b> Ideal for healthy weight gain and sustained energy.</li>
                    <li><b>Rich in Carbs:</b> Perfect for maintaining energy levels throughout the day.</li>
                    <li><b>Quick Energy Boost:</b> Designed to energize you pre- and post-workout.</li>
                    <li><b>Strong Bones:</b> Nutrient-rich ingredients to support bone health.</li>
                    <li><b>Muscle Gain Support:</b> Meals tailored for fitness enthusiasts aiming to build strength.</li>
                </ul>
            </div>
            <div className="quality-statement">
                <h2>Quality</h2>
                <p>At ProteinClub, quality is at the heart of everything we do. From sourcing premium ingredients to crafting each meal with care, we ensure that every product meets the highest standards of nutrition and taste. We believe in transparency, using only natural and healthy ingredients without any unnecessary additives or preservatives.</p>
            </div>
            <div className="maintenance-statement">
                <h2>Maintenance</h2>
                <p>Maintaining freshness and hygiene is our top priority. We follow strict protocols in food preparation, packaging, and storage to ensure that every meal is safe and of the finest quality. Our team continuously monitors and improves our processes, so you can trust us to deliver excellence with every bite.</p>
            </div>
        </div>
    </div>
  )
}

export default MissionVision
