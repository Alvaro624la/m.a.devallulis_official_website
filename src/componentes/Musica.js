import React from 'react';
import banner from '../img/musica-banner2-cut.jpg';
import 'animate.css';
import MusicaCdComprar from './musica/MusicaCdComprar';
import MusicaMuestrasAudio from './musica/MusicaMuestrasAudio';

function Musica() { 
  return (
  <>
  <div className='musica-body'>
    <a className='musica-body__banner-cont'>
      <img className='musica-body__banner-cont__img' src={banner} aria-label='Imagen cabecera de música'/>
    </a>
    <MusicaCdComprar/>
    <MusicaMuestrasAudio/>
  </div>
  </>
  )
}

export default Musica