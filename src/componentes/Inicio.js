import React from 'react';
import 'animate.css';
import InicioBanner from './inicio/InicioBanner';
import MusicaCdComprar from './musica/MusicaCdComprar';
import InicioVideo from './inicio/InicioVideo';

function Inicio() {
  return (
  <>
  <div className='inicio-body'>
    <InicioBanner/>
    <MusicaCdComprar/>
    <InicioVideo/>
  </div>
  </>
  )
}

export default Inicio