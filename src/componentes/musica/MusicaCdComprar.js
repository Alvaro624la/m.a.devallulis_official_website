import React from 'react';
import ultimoDisco from '../../img/caratula.png';


function MusicaCdComprar() {
    return (
    <>
    <div className='componente-musicacdcomprar-body__ultimo-disco-container'>
        <div className='componente-musicacdcomprar-body__ultimo-disco-container__img-container'>
            <img className='componente-musicacdcomprar-body__ultimo-disco-container__img-container__img' src={ultimoDisco}/>
        </div>
        <div className='componente-musicacdcomprar-body__ultimo-disco-container__btn-container'>
            <a className='componente-musicacdcomprar-body__ultimo-disco-container__btn-container__a' href='#' target='_blank'>
                <button className='componente-musicacdcomprar-body__ultimo-disco-container__btn-container__a__btn animate__animated animate__tada animate__delay-2s'>COMPRALO YA</button>
            </a>
        </div>
    </div>
    </>
    )
}

export default MusicaCdComprar