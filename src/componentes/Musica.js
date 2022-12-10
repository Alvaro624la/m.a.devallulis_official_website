import React from 'react';
import banner from '../img/musica-banner.jpg';
import ultimoDisco from '../img/caratula.png';
import 'animate.css';

function Musica() {
  return (
  <>
  <div className='musica-body'>
    <a className='musica-body__banner-cont'>
      <img className='musica-body__banner-cont__img' src={banner}/>
    </a>
    <div className='musica-body__ultimo-disco-container'>
      <div className='musica-body__ultimo-disco-container__img-container'>
        <img className='musica-body__ultimo-disco-container__img-container__img' src={ultimoDisco}/>
      </div>
      <div className='musica-body__ultimo-disco-container__btn-container'>
        <a className='musica-body__ultimo-disco-container__btn-container__a' href='#' target='_blank'>
          <button className='musica-body__ultimo-disco-container__btn-container__a__btn animate__animated animate__tada animate__delay-2s'>COMPRALO YA</button>
        </a>
      </div>
    </div>
  </div>
  </>
  )
}

export default Musica