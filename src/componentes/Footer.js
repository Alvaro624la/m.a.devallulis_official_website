// import React, { useContext, useMemo } from 'react';
import React, { useContext } from 'react';
import { FaFacebook, FaInstagramSquare, FaYoutube, FaPhoneAlt, FaMailBulk } from "react-icons/fa";
// import { FaSpotify, FaApple, FaAmazon, FaDeezer } from "react-icons/fa";
// import { SiTidal } from "react-icons/si";
import footerLogo from '../img/Logo-PNG_V-negra.png'
import { ContextoMADV } from './contexto/Contexto';

function Footer() {
  const { MADV } = useContext(ContextoMADV);
  return (
  <div className='footer-body'>
    <div className='footer-body__container'>
      <div className='footer-body__container__logo-container'>
        <img className='footer-body__container__logo-container__logo' aria-label='Logo Vallulis' src={footerLogo}/>
      </div>    
      <div className='footer-body__container__contactar-container'>
        <div className='footer-body__container__contactar-container__title'>
          <p className='footer-body__container__contactar-container__title__p' aria-label='Titulo. Contacto'>Contacto:</p>
        </div>
        <div className='footer-body__container__contactar-container__links'>
          <div><a className='footer-body__container__contactar-container__links__a' aria-label='Número de teléfono' href={`tel:${MADV.telefono}`}><FaPhoneAlt/> <span>{MADV.telefono}</span></a></div>
          <div><a className='footer-body__container__contactar-container__links__a' aria-label='Email' href={`mailto:${MADV.email}`}><FaMailBulk/> <span>{MADV.email}</span></a></div>
        </div>
      </div>
      <div className='footer-body__container__seguir-container'>
        <div className='footer-body__container__seguir-container__title'>
          <p className='footer-body__container__seguir-container__title__p' aria-label='Titulo. Seguir en redes sociales:'>Seguir en:</p>
        </div>
        <div className='footer-body__container__seguir-container__icons'>
          <a href={MADV.facebook} target='_blank' rel="noreferrer noopener" aria-label='Facebook logo-link'><FaFacebook/></a>
          <a href={MADV.instagram} target='_blank' rel="noreferrer noopener" aria-label='Instagram logo-link'><FaInstagramSquare/></a>
          <a href={MADV.youtube} target='_blank' rel="noreferrer noopener" aria-label='Youtube logo-link'><FaYoutube/></a>
          {/* <a href={MADV.spotify} target='_blank' rel="noreferrer noopener" aria-label='Spotify logo-link'><FaSpotify/></a> */}
          {/* <a href={MADV.appleMusic} target='_blank' rel="noreferrer noopener" aria-label='Apple Music logo-link'><FaApple/></a> */}
          {/* <a href={MADV.amazonMusic} target='_blank' rel="noreferrer noopener" aria-label='Amazon Music logo-link'><FaAmazon/></a> */}
          {/* <a href={MADV.deezer} target='_blank' rel="noreferrer noopener" aria-label='Deezer logo-link'><FaDeezer/></a> */}
          {/* <a href={MADV.tidal} target='_blank' rel="noreferrer noopener" aria-label='Tidal logo-link'><SiTidal/></a> */}
        </div>
      </div>
    </div>
    <div className='footer-body__creditos-pagina'>
      <p className='footer-body__creditos-pagina__p'>Construida y diseñada por <a href='https://alvaro624la.github.io/Portfolio/' target='_blank' rel="noreferrer noopener">Álvaro de Prado</a></p>
    </div>
  </div>
  )
}

export default Footer;