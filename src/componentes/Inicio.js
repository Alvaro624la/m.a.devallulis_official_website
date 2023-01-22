import React from 'react';
import { Helmet } from "react-helmet";
import 'animate.css';
import InicioBanner from './inicio/InicioBanner';
import MusicaCdComprar from './musica/MusicaCdComprar';
import InicioVideo from './inicio/InicioVideo';

function Inicio() {
  return (
  <>
  <Helmet>
    <title>Inicio | Miguel Ángel de Vallulis</title>
    <meta name="description" content="¡Ya puedes escuchar el nuevo álbum de Miguel Angel de Vallulis en su nueva página web, y mucho más!" />
  </Helmet>
  <div className='inicio-body'>
    <InicioBanner/>
    <div className='animate__animated animate__zoomIn'>
      <MusicaCdComprar/>
    </div>
    <InicioVideo/>
  </div>
  </>
  )
}

export default Inicio