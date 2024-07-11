// src/Components/ImageGrid.js
import React from 'react';
import './LatestProducts.css';
import Title from '../Title/Title';
import Couch from '../../Assets/Images/couch.png';
import Engine from '../../Assets/Images/engine.png';
import TV from '../../Assets/Images/tv-set.png';
import Couch2 from '../../Assets/Images/couch2.png'

const LatestProducts = () => {
  return (
    <>
      <Title title="Latest Products" />
      <div className="image__grid">
        <img src={Couch} alt="Top" className="wide" />
        <img src={Engine} alt="Middle Left" className="normal" />
        <img src={TV} alt="Middle Right" className="normal" />
        <img src={Couch2} alt="Bottom" className="wide" />
      </div>
    </>

  );
}

export default LatestProducts;
