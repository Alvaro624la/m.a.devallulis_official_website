import React from 'react';
import banner from '../img/home-banner.jpg';
import 'animate.css';

function Home() {
  return (
  <>
  <div className='home-body'>
    <a className='home-body__banner-cont' href='#' target='_blank'>
      <img className='home-body__banner-cont__img animate__animated animate__fadeInRight' src={banner}/>
    </a>
  </div>
  </>
  )
}

export default Home