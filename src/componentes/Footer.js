import React, { useContext, useMemo } from 'react';
import { FaFacebook, FaInstagramSquare, FaSpotify, FaYoutube, FaItunes, FaSoundcloud, FaPhoneAlt, FaMailBulk } from "react-icons/fa";
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
          <div><a className='footer-body__container__contactar-container__links__a' aria-label='Número de teléfono' href={`tel: ${MADV.telefono}`}><FaPhoneAlt/> <span>{MADV.telefono}</span></a></div>
          <div><a className='footer-body__container__contactar-container__links__a' aria-label='Email' href={`mailto: ${MADV.email}`}><FaMailBulk/> <span>{MADV.email}</span></a></div>
        </div>
      </div>
      <div className='footer-body__container__seguir-container'>
        <div className='footer-body__container__seguir-container__title'>
          <p className='footer-body__container__seguir-container__title__p' aria-label='Titulo. Seguir en redes sociales:'>Seguir en:</p>
        </div>
        <div className='footer-body__container__seguir-container__icons'>
          <a href={MADV.facebook} aria-label='Facebook logo-link' target='_blank'><FaFacebook/></a>
          <a href={MADV.instagram} target='_blank' aria-label='Instagram logo-link'><FaInstagramSquare/></a>
          <a href={MADV.spotify} target='_blank' aria-label='Spotify logo-link'><FaSpotify/></a>
          <a href={MADV.youtube} target='_blank' aria-label='Youtube logo-link'><FaYoutube/></a>
          <a href={MADV.itunes} target='_blank' aria-label='iTunes logo-link'><FaItunes/></a>
          <a href={MADV.soundcloud} target='_blank' aria-label='SoundCloud logo-link'><FaSoundcloud/></a>
        </div>
      </div>
    </div>
    <div className='footer-body__creditos-pagina'>
      <p className='footer-body__creditos-pagina__p'>Construida y diseñada por <a href='https://alvaro624la.github.io/Portfolio/' target='_blank'>Álvaro de Prado</a></p>
    </div>
  </div>
  )
}

export default Footer;