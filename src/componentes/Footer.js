import React from 'react';
import { FaFacebook, FaInstagramSquare, FaSpotify, FaYoutube, FaItunes, FaSoundcloud, FaPhoneAlt, FaMailBulk } from "react-icons/fa";
import footerLogo from '../img/Logo_PNG_oscuro.png'

function Footer() {
  return (
  <div className='footer-body'>
    <div className='footer-body__container'>
      <div className='footer-body__container__logo-container'>
        <img className='footer-body__container__logo-container__logo' src={footerLogo}/>
      </div>    
      <div className='footer-body__container__contactar-container'>
        <div className='footer-body__container__contactar-container__title'>
          <p className='footer-body__container__contactar-container__title__p'>Contacto:</p>
        </div>
        <div className='footer-body__container__contactar-container__links'>
          <div><a className='footer-body__container__contactar-container__links__a' href='tel: 628251720'><FaPhoneAlt/> <span>628251720</span></a></div>
          <div><a className='footer-body__container__contactar-container__links__a' href='mailto: alvarodepradomusica@gmail.com'><FaMailBulk/> <span>miguelangel@vallulis.com</span></a></div>
        </div>
      </div>
      <div className='footer-body__container__seguir-container'>
        <div className='footer-body__container__seguir-container__title'>
          <p className='footer-body__container__seguir-container__title__p'>Seguir en:</p>
        </div>
        <div className='footer-body__container__seguir-container__icons'>
          <a href='https://www.facebook.com/miguelangel.devallulis' target='_blank'><FaFacebook/></a>
          <a href='#' target='_blank'><FaInstagramSquare/></a>
          <a href='#' target='_blank'><FaSpotify/></a>
          <a href='https://www.youtube.com/@miguelangeldevallulis4374' target='_blank'><FaYoutube/></a>
          <a href='#' target='_blank'><FaItunes/></a>
          <a href='#' target='_blank'><FaSoundcloud/></a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Footer