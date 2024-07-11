import React from 'react'
import './HeaderTop.css'
import F from '../../Assets/Images/F.png';
import ORTUNA from '../../Assets/Images/ORTUNA.png';
import { Cart, Person } from 'react-bootstrap-icons';
import {FaSearch} from 'react-icons/fa';

const HeaderTop = () => {
  return (
    <div className='header__top'>
      <div className='logo'>
        <img className='F' src={F} alt="User" />
        <img className='ortuna' src={ORTUNA} alt="User" />
      </div>
      <div className='menu'>
        <div className='search'>
          <input className='search__input' type='text' placeholder='Search...'></input>
          <FaSearch class='search__icon' />
        </div>
        <div><Cart className='header__top__icon' /></div>
        <div><Person className='header__top__icon' /></div>
      </div>
    </div>
  )
}

export default HeaderTop