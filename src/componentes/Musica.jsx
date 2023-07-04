import React from 'react';
import { Helmet } from "react-helmet";
import banner from '../img/musica-banner2-cut.jpg';
import 'animate.css';
import MusicaCdComprar from './musica/MusicaCdComprar';
import MusicaMuestrasAudio from './musica/MusicaMuestrasAudio';

function Musica() { 
  return (
  <>
  <Helmet>
    <title>Musica | Miguel Ángel de Vallulis</title>
    <meta name="description" content="Descubre su nuevo álbum 'Vallulis' y disfruta de la voz de la montaña en todo su esplendor. ¡Ya disponible en todas las plataformas!" />
  </Helmet>
  <div className='musica-body'>
    <div className='musica-body__banner-cont'>
      <img className='musica-body__banner-cont__img' src={banner} aria-label='Imagen cabecera de música' alt='Imagen cabecera de música'/>
    </div>
    <MusicaCdComprar/>
    <MusicaMuestrasAudio/>
  </div>
  </>
  )
}

export default Musica