import React from 'react';
import './Newsletter.css';
import {FaBell} from 'react-icons/fa'

const Newsletter = () => {
  return (
    <div className='newsletter'>
        <h2>Join Our Newsletter</h2>
        <div className='newsletter__input'>
            <input type='email' className='input' />
            <FaBell className='icon' />
        </div>
    </div>
  )
}

export default Newsletter