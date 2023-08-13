import React from 'react';
import { Helmet } from "react-helmet";
import 'animate.css';
import InicioBanner from './inicio/InicioBanner';
import MusicaCdComprar from './musica/MusicaCdComprar';
import InicioVideo from './inicio/InicioVideo';

function Inicio() {
  
  const googleTag = () => {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments)};
    gtag('js', new Date());
    gtag('config', 'G-KM0V9V0W74');
  }

  return (
  <>
  <Helmet>
    <title>Inicio | Miguel Ángel de Vallulis: La voz de la Montaña Leonesa</title>
    <meta name="description" content="Sumérgete en el mundo musical de Miguel Ángel de Vallulis. Escucha su nuevo álbum y descubre más en su emocionante página web. ¡La montaña leonesa cobra vida a través de su voz!" />
    {/* <!-- Google tag (gtag.js) --> */}
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-KM0V9V0W74"></script>
    <script>{googleTag()}</script>
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