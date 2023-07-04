import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import logo1 from '../img/Logo-PNG_V-negra.png';
import logo2 from '../img/Logo_V-blanca.jpg';

function Nav() {
  //------ BURGUER BTN ------ //
  const [barra, setBarra] = useState('nav-container__hamburguer-container__btn__bar');
  const [burgerContent, setburgerContent] = useState('nav-container__hamburguer-content esconder-burguer-content');
  const [clickEnBurguer, setclickEnBurguer] = useState(false);

  //------ nav-page indicator ------ //
  const refNav = useRef();
  const [variableForRandomUseEffect, setvariableForRandomUseEffect] = useState(window.location.pathname);
  

  // ----- BURGUER BTN ------ //
  const mostrarBurguer = () => {
    setclickEnBurguer(true);
    setBarra('nav-container__hamburguer-container__btn__bar burger-barras')
    setburgerContent('nav-container__hamburguer-content')
  }
  const esconderBurguer = () => {
    setclickEnBurguer(false);
    setBarra('nav-container__hamburguer-container__btn__bar')
    setburgerContent('nav-container__hamburguer-content esconder-burguer-content')
  }
  const abrirBurguer = () => clickEnBurguer ? esconderBurguer() : mostrarBurguer();

  //------ nav-page indicator ------ //
  useEffect(() => { 
    const rutaURL = window.location.pathname;   
    for (let i = 0; i < refNav.current.childNodes.length; i++) {
      if(rutaURL === '/') refNav.current.childNodes[i].className='nav-container__barra__navlink'
      else if(refNav.current.childNodes[i].href.includes(rutaURL) === true) refNav.current.childNodes[i].className='nav-container__barra__navlink nav-container__barra__navlink__clickEnNavLink';
      else refNav.current.childNodes[i].className='nav-container__barra__navlink';
    };
  },[variableForRandomUseEffect]);

  return (
    <>
    <nav className='nav-container'>
      {/* NAV */}
      <div className='nav-container__logo'>
        <NavLink to='/'><img tabIndex={0} className='nav-container__logo__img' aria-label='Logo-link a Inicio' onClick={()=>setvariableForRandomUseEffect(Math.random)} src={logo1}/></NavLink>
      </div>
      <div className='nav-container__barra' ref={refNav}>
        <NavLink className='nav-container__barra__navlink' aria-label='Link a Música' onClick={()=>setvariableForRandomUseEffect(Math.random)} to='/musica'>Música</NavLink>
        <NavLink className='nav-container__barra__navlink' aria-label='Link a Biografía' onClick={()=>setvariableForRandomUseEffect(Math.random)} to='/biografia'>Biografía</NavLink>
        <NavLink className='nav-container__barra__navlink' aria-label='Link a Fotos' onClick={()=>setvariableForRandomUseEffect(Math.random)} to='/fotos'>Fotos</NavLink>
        <NavLink className='nav-container__barra__navlink' aria-label='Link a Contacto' onClick={()=>setvariableForRandomUseEffect(Math.random)} to='/contacto'>Contacto</NavLink>
      </div>

      {/* HABMURGUER NAV */}
      <div className='nav-container__hamburguer-container'>
        <div className='nav-container__hamburguer-cont__btn' aria-label='Boton abrir/cerrar barra navegación' onClick={abrirBurguer}>
          <div className={barra}></div>
          <div className={barra}></div>
          <div className={barra}></div>
        </div>
      </div>
      <div className={burgerContent}>
        <div className='nav-container__hamburguer-content__logo-cont'>
          <NavLink to='/' onClick={()=>esconderBurguer()}><img className='nav-container__hamburguer-content__logo-cont__img' alt='Logo-link a Inicio' aria-label='Logo-link a Inicio' src={logo2}/></NavLink>
        </div>
        <div className='nav-container__hamburguer-content__links-cont'>
          <NavLink className='nav-container__hamburguer-content__links-cont__navlink' aria-label='Link a Inicio' to='/' onClick={()=>esconderBurguer()}>Inicio</NavLink>
          <NavLink className='nav-container__hamburguer-content__links-cont__navlink' aria-label='Link a Música' to='/musica' onClick={()=>esconderBurguer()}>Música</NavLink>
          <NavLink className='nav-container__hamburguer-content__links-cont__navlink' aria-label='Link a Biografía' to='/fotos' onClick={()=>esconderBurguer()}>Fotos</NavLink>
          <NavLink className='nav-container__hamburguer-content__links-cont__navlink' aria-label='Link a Fotos' to='/biografia' onClick={()=>esconderBurguer()}>Biografía</NavLink>
          <NavLink className='nav-container__hamburguer-content__links-cont__navlink' aria-label='Link a Contacto' to='/contacto' onClick={()=>esconderBurguer()}>Contacto</NavLink>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Nav