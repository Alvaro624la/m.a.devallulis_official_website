import React from 'react';
import banner from '../img/musica-banner.jpg';
import 'animate.css';
import MusicaCdComprar from './musica/MusicaCdComprar';


function Musica() {
  return (
  <>
  <div className='musica-body'>
    <a className='musica-body__banner-cont'>
      <img className='musica-body__banner-cont__img' src={banner}/>
    </a>
  <MusicaCdComprar/>
  </div>
  </>
  )
}

export default Musica