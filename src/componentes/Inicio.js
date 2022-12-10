import React from 'react';
import banner from '../img/home-banner.jpg';
import 'animate.css';

function Inicio() {
  return (
  <>
  <div className='inicio-body'>
    <a className='inicio-body__banner-cont' href='#' target='_blank'>
      <img className='inicio-body__banner-cont__img animate__animated animate__fadeInRight' src={banner}/>
    </a>
  </div>
  </>
  )
}

export default Inicio