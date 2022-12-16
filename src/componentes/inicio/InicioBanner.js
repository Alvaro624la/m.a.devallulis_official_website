import React from 'react';
import banner from '../../img/home-banner.jpg';

function InicioBanner() {
    return (
    <>
    <a className='componente-iniciobanner-body__banner-cont' href='#' target='_blank'>
        <img className='componente-iniciobanner-body__banner-cont__img animate__animated animate__fadeInRight' src={banner}/>
    </a>
    </>
    )
}

export default InicioBanner