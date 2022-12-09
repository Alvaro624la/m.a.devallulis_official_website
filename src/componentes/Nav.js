import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo1 from '../img/Logo_PNG_oscuro.png';
import logo2 from '../img/Logo_JPG_blanco.jpg';

function Nav() {
  const [barra, setBarra] = useState('nav-container__hamburguer-container__btn__bar');
  const [burgerContent, setburgerContent] = useState('nav-container__hamburguer-content esconder-burguer-content');
  const [clickEnBurguer, setclickEnBurguer] = useState(false);

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

  return (
    <>
    <nav className='nav-container'>
      <div className='nav-container__logo'>
        <NavLink to='/'><img className='nav-container__logo__img' src={logo1}/></NavLink>
      </div>
      <div className='nav-container__barra'>
        <NavLink className='nav-container__barra__navlink' to='/musica'>Música</NavLink>
        <NavLink className='nav-container__barra__navlink' to='/biografia'>Biografía</NavLink>
        <NavLink className='nav-container__barra__navlink' to='/fotos'>Fotos</NavLink>
        <NavLink className='nav-container__barra__navlink' to='/contacto'>Contacto</NavLink>
      </div>
      <div className='nav-container__hamburguer-container'>
        <div className='nav-container__hamburguer-cont__btn' onClick={abrirBurguer}>
          <div className={barra}></div>
          <div className={barra}></div>
          <div className={barra}></div>
        </div>
      </div>
      <div className={burgerContent}>
        <div className='nav-container__hamburguer-content__logo-cont'>
          <NavLink to='/'><img className='nav-container__hamburguer-content__logo-cont__img' src={logo2}/></NavLink>
        </div>
        <div className='nav-container__hamburguer-content__links-cont'>
          <NavLink className='nav-container__hamburguer-content__links-cont__navlink' to='/musica'>Música</NavLink>
          <NavLink className='nav-container__hamburguer-content__links-cont__navlink' to='/fotos'>Fotos</NavLink>
          <NavLink className='nav-container__hamburguer-content__links-cont__navlink' to='/biografia'>Biografía</NavLink>
          <NavLink className='nav-container__hamburguer-content__links-cont__navlink' to='/contacto'>Contacto</NavLink>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Nav