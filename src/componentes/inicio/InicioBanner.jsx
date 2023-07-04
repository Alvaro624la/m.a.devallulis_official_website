import React from 'react';
import banner from '../../img/home-banner.jpg';

function InicioBanner() {
    return (
    <>
    <img className='componente-iniciobanner-body__banner-cont__img animate__animated animate__fadeInRight' src={banner} aria-label='Imagen cabecera de inicio' alt='Imagen cabecera de inicio'/>
    </>
    )
}

export default InicioBanner