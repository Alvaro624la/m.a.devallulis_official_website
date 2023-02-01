import React, { useContext, useState } from 'react';
import { ContextoMADV } from '../contexto/Contexto';
import ultimoDisco from '../../img/caratula.jpg';
import hotelRioCeaLogo from '../../img/hotelriocea-logo.jpg';
import { BsShop } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
import { FcInTransit } from "react-icons/fc";
import { MdEmojiPeople } from "react-icons/md";


function MusicaCdComprar() {
    const { MADV } = useContext(ContextoMADV);

    const [claseModal, setClaseModal] = useState('componente-musicacdcomprar-body__ultimo-disco-container__modal-closed');
    const [claseDesplegable, setClaseDesplegable] = useState('componente-musicacdcomprar-body__ultimo-disco-container__btn-container__estirar__desplegable-closed');

    const modalOpenClose = () => {
        claseModal === 'componente-musicacdcomprar-body__ultimo-disco-container__modal-closed' 
        ? setClaseModal('componente-musicacdcomprar-body__ultimo-disco-container__modal-opened')
        : setClaseModal('componente-musicacdcomprar-body__ultimo-disco-container__modal-closed') 
    }

    const desplegableOpenClose = () => {
        claseDesplegable === 'componente-musicacdcomprar-body__ultimo-disco-container__btn-container__estirar__desplegable-closed' 
        ? setClaseDesplegable('componente-musicacdcomprar-body__ultimo-disco-container__btn-container__estirar__desplegable-opened')
        : setClaseDesplegable('componente-musicacdcomprar-body__ultimo-disco-container__btn-container__estirar__desplegable-closed') 
    }
    return (
    <>
    <div className='componente-musicacdcomprar-body__ultimo-disco-container'>
        <div className={claseModal}>
            <div className='componente-musicacdcomprar-body__ultimo-disco-container__modal-opened__btn-cerrar' onClick={modalOpenClose} aria-label='Boton para cerrar la ventana emergente de compra en tienda'>
                <div className='componente-musicacdcomprar-body__ultimo-disco-container__modal-opened__btn-cerrar__bar1'></div>
                <div className='componente-musicacdcomprar-body__ultimo-disco-container__modal-opened__btn-cerrar__bar2'></div>
            </div>
            <div className='componente-musicacdcomprar-body__ultimo-disco-container__modal-opened__izq'>
                <h3 className='componente-musicacdcomprar-body__ultimo-disco-container__modal-opened__izq__titulo'>DISPONIBLE EN:</h3>
                <img className='componente-musicacdcomprar-body__ultimo-disco-container__modal-opened__izq__logo' src={hotelRioCeaLogo} alt='logo del Hotel Rio Cea, en Puente Almuhey, León'/>
                <p className='componente-musicacdcomprar-body__ultimo-disco-container__modal-opened__izq__direccion'>Avda Mister Universo Juan Ferrero, 55 24880, Puente Almuhey León, España</p>
            </div>
            <div className='componente-musicacdcomprar-body__ultimo-disco-container__modal-opened__dcha'>
                <iframe title='Hotel Rio Cea en Google Maps' className='componente-musicacdcomprar-body__ultimo-disco-container__modal-opened__dcha__maps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2928.079012097044!2d-4.973858582556152!3d42.7866795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd482187c8a648d3%3A0x811124c527af1541!2sHotel%20R%C3%ADo%20Cea!5e0!3m2!1ses!2ses!4v1675263225782!5m2!1ses!2ses" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
            </div>
        </div>
        <div className='componente-musicacdcomprar-body__ultimo-disco-container__img-container'>
            <img className='componente-musicacdcomprar-body__ultimo-disco-container__img-container__img'  aria-label='Imagen del último disco del artista' src={ultimoDisco}/>
        </div>
        <div className='componente-musicacdcomprar-body__ultimo-disco-container__btn-container'>
            <div className='componente-musicacdcomprar-body__ultimo-disco-container__btn-container__estirar'  aria-label='Botones para comprar último disco' onClick={desplegableOpenClose}>
                <button className='componente-musicacdcomprar-body__ultimo-disco-container__btn-container__estirar__btn animate__animated animate__tada animate__delay-2s' aria-label='Boton para desplegar opciones de compra'>COMPRALO YA</button>
                <div className={claseDesplegable}>
                    <a aria-label='Enlace tienda ShopVallulis para comprar online' href={MADV.shopVallulisVallulisCD} target='_blank' rel="noreferrer">
                        <button className='componente-musicacdcomprar-body__ultimo-disco-container__btn-container__estirar__desplegable-opened__compraronlinebtn' aria-label='Boton para comprar online'>
                            <TbWorld/>
                            ONLINE
                            <FcInTransit/>
                        </button>
                    </a>
                    {/* Fallback por si el modal no funciona: (<a> de la web hotel rio cea) */}
                    {/* <a aria-label='Enlace tienda ShopVallulis para comprar online' href='https://www.hotelriocea.com/contacto/' target='_blank' rel='noreferrer noopener'> */}
                        <button className='componente-musicacdcomprar-body__ultimo-disco-container__btn-container__estirar__desplegable-opened__comprartiendabtn' onClick={modalOpenClose} aria-label='Boton para comprar en tienda: Hotel Rio Cea'>
                            <BsShop/>
                            EN TIENDA
                            <MdEmojiPeople/>
                        </button>
                    {/* </a> */}
                </div>
            </div>
        </div>
    </div>
    {/* <div className='componente-musicacdcomprar-body__ultimo-disco-container'>
        <div className='componente-musicacdcomprar-body__ultimo-disco-container__img-container'>
            <img className='componente-musicacdcomprar-body__ultimo-disco-container__img-container__img'  aria-label='Imagen del último disco del artista' src={ultimoDisco}/>
        </div>
        <div className='componente-musicacdcomprar-body__ultimo-disco-container__btn-container'>
            <a className='componente-musicacdcomprar-body__ultimo-disco-container__btn-container__estirar'  aria-label='Boton para comprar último disco' href={MADV.shopVallulisVallulisCD} target='_blank'>
                <button className='componente-musicacdcomprar-body__ultimo-disco-container__btn-container__estirar__btn animate__animated animate__tada animate__delay-2s'>COMPRALO YA</button>
            </a>
        </div>
    </div> */}
    </>
    )
}

export default MusicaCdComprar