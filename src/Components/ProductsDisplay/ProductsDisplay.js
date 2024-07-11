import React from 'react';
import './ProductsDisplay.css';
import Title from '../Title/Title';
import OfficeChair from '../../Assets/Images/office-chair.png';
import Headset from '../../Assets/Images/head-set.png';
import Toaster from '../../Assets/Images/bread-toaster.png';
import Microphone from '../../Assets/Images/microphone.png';
import Inverter from '../../Assets/Images/inverter.png';
import Cushion from '../../Assets/Images/cushion-chair.png';
import LightBulb from '../../Assets/Images/light-bulb.png';
import Purifier from '../../Assets/Images/water-purifier.png';



const ProductsDisplay = () => {
  return (
    <div>
        <Title title="Products Display" />
        <div className='products__grid'>
            <div className='product'>
                <img className='product__image' src={OfficeChair} alt='' />
                <div className='product__name'>Office Chair</div>
            </div>
            <div className='product'>
                <img className='product__image' src={Headset} alt='' />
                <div className='product__name'>Headset</div>
            </div>
            <div className='product'>
                <img className='product__image' src={Toaster} alt='' />
                <div className='product__name'>Bread Toaster</div>
            </div>
            <div className='product'>
                <img className='product__image' src={Microphone} alt='' />
                <div className='product__name'>Microphone</div>
            </div>
            <div className='product'>
                <img className='product__image' src={Inverter} alt='' />
                <div className='product__name'>Inverter</div>
            </div>
            <div className='product'>
                <img className='product__image' src={Cushion} alt='' />
                <div className='product__name'>Cushion Chair</div>
            </div>
            <div className='product'>
                <img className='product__image' src={LightBulb} alt='' />
                <div className='product__name'>Light Bulb</div>
            </div>
            <div className='product'>
                <img className='product__image' src={Purifier} alt='' />
                <div className='product__name'>Water Purifier</div>
            </div>
        </div>
    </div>
  )
}

export default ProductsDisplay