import React from 'react';
import './HeaderBottom.css'
import {FaAngleDown} from 'react-icons/fa';

const HeaderBottom = () => {
  return (
    <div className='nav__links'>
      <div>Home and Kitchen <FaAngleDown /></div>
      <div>Furnitures <FaAngleDown /></div>
      <div>Electronics <FaAngleDown /></div>
      <div>Power Supplies <FaAngleDown /></div>
    </div>
  )
}

export default HeaderBottom