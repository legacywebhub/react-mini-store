import React from 'react';
import './PromoSales.css';
import WaterPurifier from '../../Assets/Images/water-purifier.png'
import CushionChair from '../../Assets/Images/cushion-chair.png'

const PromoSales = () => {
  return (
    <div className='promo__section'>
        <h2>Promo Sales</h2>
        <div className='promo__grid'>
            <div className='promo__product'>
                <img className='promo__image' src={WaterPurifier} alt='' />
                <div className='promo__name'>Flat Tv Screen</div>
            </div>
            <div className='promo__product'>
                <img className='promo__image' src={CushionChair} alt='' />
                <div className='promo__name'>Couch</div>
            </div>
        </div>
    </div>
  )
}

export default PromoSales