import React from 'react';
import { FaFacebook, FaInstagramSquare, FaSpotify, FaYoutube, FaItunes, FaSoundcloud, FaPhoneAlt, FaMailBulk } from "react-icons/fa";
import footerLogo from '../img/Logo_PNG_oscuro.png'

function Footer() {
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
          <div><a className='footer-body__container__contactar-container__links__a' aria-label='Número de teléfono' href='tel: 628251720'><FaPhoneAlt/> <span>628251720</span></a></div>
          <div><a className='footer-body__container__contactar-container__links__a' aria-label='Email' href='mailto: alvarodepradomusica@gmail.com'><FaMailBulk/> <span>miguelangel@vallulis.com</span></a></div>
        </div>
      </div>
      <div className='footer-body__container__seguir-container'>
        <div className='footer-body__container__seguir-container__title'>
          <p className='footer-body__container__seguir-container__title__p' aria-label='Titulo. Seguir en redes sociales:'>Seguir en:</p>
        </div>
        <div className='footer-body__container__seguir-container__icons'>
          <a href='https://www.facebook.com/miguelangel.devallulis' aria-label='Facebook logo-link' target='_blank'><FaFacebook/></a>
          <a href='#' target='_blank' aria-label='Instagram logo-link'><FaInstagramSquare/></a>
          <a href='#' target='_blank' aria-label='Spotify logo-link'><FaSpotify/></a>
          <a href='https://www.youtube.com/@miguelangeldevallulis4374' target='_blank' aria-label='Youtube logo-link'><FaYoutube/></a>
          <a href='#' target='_blank' aria-label='iTunes logo-link'><FaItunes/></a>
          <a href='#' target='_blank' aria-label='SoundCloud logo-link'><FaSoundcloud/></a>
        </div>
      </div>
    </div>
    <div className='footer-body__creditos-pagina'>
      <p className='footer-body__creditos-pagina__p'>Construida y diseñada por <a href='https://alvaro624la.github.io/Portfolio/' target='_blank'>Álvaro de Prado</a></p>
    </div>
  </div>
  )
}

export default Footer