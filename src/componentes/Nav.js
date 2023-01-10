import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import logo1 from '../img/Logo-PNG_V-negra.png';
import logo2 from '../img/Logo_V-blanca.png';

function Nav() {
  {/* ------ BURGUER BTN ------ */}
  const [barra, setBarra] = useState('nav-container__hamburguer-container__btn__bar');
  const [burgerContent, setburgerContent] = useState('nav-container__hamburguer-content esconder-burguer-content');
  const [clickEnBurguer, setclickEnBurguer] = useState(false);

  {/* ------ nav-page indicator ------ */}
  const refNav = useRef();
  const [variableRandomUseEffect, sevariableRandomUseEffect] = useState(window.location.pathname);


  {/* ------ BURGUER BTN ------ */}
  const abrirBurguer = () => {
    if(clickEnBurguer === false){
      setclickEnBurguer(true);
      setBarra('nav-container__hamburguer-container__btn__bar burger-barras')
      setburgerContent('nav-container__hamburguer-content')
    }
    else{
      setclickEnBurguer(false);
      setBarra('nav-container__hamburguer-container__btn__bar')
      setburgerContent('nav-container__hamburguer-content esconder-burguer-content')
    }
  }

  {/* ------ nav-page indicator ------ */}
  useEffect(() => { 
    const rutaURL = window.location.pathname;   
    for (let i = 0; i < refNav.current.childNodes.length; i++) {
      if(rutaURL == '/') refNav.current.childNodes[i].className='nav-container__barra__navlink'
      else if(refNav.current.childNodes[i].href.includes(rutaURL) === true) refNav.current.childNodes[i].className='nav-container__barra__navlink nav-container__barra__navlink__clickEnNavLink';
      else refNav.current.childNodes[i].className='nav-container__barra__navlink';
    };
  },[variableRandomUseEffect]);

  return (
    <>
    <nav className='nav-container'>
      <div className='nav-container__logo'>
        <NavLink to='/'><img className='nav-container__logo__img' aria-label='Logo-link a Inicio' onClick={()=>sevariableRandomUseEffect(Math.random)} src={logo1}/></NavLink>
      </div>
      <div className='nav-container__barra' ref={refNav}>
        <NavLink className='nav-container__barra__navlink' aria-label='Link a Música' onClick={()=>sevariableRandomUseEffect(Math.random)} to='/musica'>Música</NavLink>
        <NavLink className='nav-container__barra__navlink' aria-label='Link a Biografía' onClick={()=>sevariableRandomUseEffect(Math.random)} to='/biografia'>Biografía</NavLink>
        <NavLink className='nav-container__barra__navlink' aria-label='Link a Fotos' onClick={()=>sevariableRandomUseEffect(Math.random)} to='/fotos'>Fotos</NavLink>
        <NavLink className='nav-container__barra__navlink' aria-label='Link a Contacto' onClick={()=>sevariableRandomUseEffect(Math.random)} to='/contacto'>Contacto</NavLink>
      </div>
      <div className='nav-container__hamburguer-container'>
        <div className='nav-container__hamburguer-cont__btn' aria-label='Boton abrir/cerrar barra navegación' onClick={abrirBurguer}>
          <div className={barra}></div>
          <div className={barra}></div>
          <div className={barra}></div>
        </div>
      </div>
      <div className={burgerContent}>
        <div className='nav-container__hamburguer-content__logo-cont'>
          <NavLink to='/'><img className='nav-container__hamburguer-content__logo-cont__img' aria-label='Logo-link a Inicio' src={logo2}/></NavLink>
        </div>
        <div className='nav-container__hamburguer-content__links-cont'>
          <NavLink className='nav-container__hamburguer-content__links-cont__navlink' aria-label='Link a Música' to='/musica'>Música</NavLink>
          <NavLink className='nav-container__hamburguer-content__links-cont__navlink' aria-label='Link a Biografía' to='/fotos'>Fotos</NavLink>
          <NavLink className='nav-container__hamburguer-content__links-cont__navlink' aria-label='Link a Fotos' to='/biografia'>Biografía</NavLink>
          <NavLink className='nav-container__hamburguer-content__links-cont__navlink' aria-label='Link a Contacto' to='/contacto'>Contacto</NavLink>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Nav