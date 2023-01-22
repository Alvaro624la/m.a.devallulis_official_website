import React, { useContext } from 'react';
import ultimoDisco from '../../img/caratula.jpg';
import { ContextoMADV } from '../contexto/Contexto';


function MusicaCdComprar() {
    const { MADV } = useContext(ContextoMADV);
    return (
    <>
    <div className='componente-musicacdcomprar-body__ultimo-disco-container'>
        <div className='componente-musicacdcomprar-body__ultimo-disco-container__img-container'>
            <img className='componente-musicacdcomprar-body__ultimo-disco-container__img-container__img'  aria-label='Imagen del último disco del artista' src={ultimoDisco}/>
        </div>
        <div className='componente-musicacdcomprar-body__ultimo-disco-container__btn-container'>
            <a className='componente-musicacdcomprar-body__ultimo-disco-container__btn-container__a'  aria-label='Boton para comprar último disco' href={MADV.shopVallulisVallulisCD} target='_blank' rel="noreferrer">
                <button className='componente-musicacdcomprar-body__ultimo-disco-container__btn-container__a__btn animate__animated animate__tada animate__delay-2s'>COMPRALO YA</button>
            </a>
        </div>
    </div>
    </>
    )
}

export default MusicaCdComprar