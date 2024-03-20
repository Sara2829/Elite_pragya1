import React from 'react'
import Eletro from "../Rulebook Pdf/Electro.pdf"
import {Link } from 'react-router-dom'
const PiyushCarouselItem = ({item}) => {
  return (
  
    <div className='p-carousel-item'>
      <div className='img-box'>
        <h3>{item.title}</h3>
        <img 
        className='p-carousel-image' 
        src={item.icon.default} alt="img1" 
        />
      </div>
        
        <div className='p-carousel-item-text'>
            {item.description}
            <div >
             <a href={item.pdf} download={true}>
             <button 
                className='btn-inside-desc'
                download
                style={{ backgroundColor: 'skyblue', color: 'black', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                Rulebook
              </button>
             </a>
              
          
            </div>
          
        </div>
        
    </div>
  );
}

export default PiyushCarouselItem