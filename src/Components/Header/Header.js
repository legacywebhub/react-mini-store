import React from 'react';
import HeaderTop from '../HeaderTop/HeaderTop'
import HeaderBottom from '../HeaderBottom/HeaderBottom'
import './Header.css'

const Header = () => {
  return (
    <>
      <div className='header'>
        <HeaderTop />
        <HeaderBottom />
      </div>
    </>
  )
}

export default Header