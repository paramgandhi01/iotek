import React from 'react';
import "./Brands.css";

export default function Brands() {
  return (
    <div className='brands'>
        <div className='container'>
            <div className='images'>
                <div data-aos="fade" data-aos-duration="1000"> <img src="./images/brand-1.png" alt="brand"/></div>
                <div data-aos="fade" data-aos-duration="1000" data-aos-delay="200"> <img src="./images/brand-2.png" alt="brand"/></div>
                <div data-aos="fade" data-aos-duration="1000" data-aos-delay="400"> <img src="./images/brand-3.png" alt="brand"/></div>
                <div data-aos="fade" data-aos-duration="1000" data-aos-delay="600"> <img src="./images/brand-4.png" alt="brand"/></div>
                <div data-aos="fade" data-aos-duration="1000" data-aos-delay="800"> <img src="./images/brand-5.png" alt="brand"/></div>
            </div>
        </div>

    </div>
  )
}
