import React from 'react';
import './Footer.css';
import Newsletter from '../Newsletter/Newsletter';

const Footer = () => {
  return (
    <>
      <div className='footer'>
        <div className='footer__part'>
          <p className='footer__header'>Customer Service</p>
          <p className='footer__subheader'>Service hours</p>
          <p className='footer__info'>Mondays to Friday 5PM-6PM</p>
          <p className='footer__subheader'>Call or Whatsapp</p>
          <p className='footer__info'>08160755152</p>
          <p className='footer__subheader'>Email</p>
          <p className='footer__info'>fortunatastore@gmail.com</p>
        </div>
        <div className='footer__part'>
          <p className='footer__header'>About us</p>
          <p className='footer__info'>Fortuna is a simple and user-friendly online store, focusing on a fast and streamlined shopping experience</p>
        </div>
        <div className='footer__part'>
          <p className='footer__header'>Terms</p>
          <p className='footer__info'>Free shopping over 15,000 in Ile-ife</p>
          <p className='footer__info'>Fast Delivery</p>
          <p className='footer__info'>90 days guarantee</p>
        </div>
        <div className='footer__part'>
          <p className='footer__header'>Our physical location</p>
          <p className='footer__info'>Obafemi Awolowo University,</p>
          <p className='footer__info'>Ile-ife</p>
        </div>
      </div>
      <Newsletter />
    </>
  )
}

export default Footer