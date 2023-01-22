import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'animate.css';
import fallback from '../../img/fallback.jpg'
import video1 from '../../videos/video1.mp4';
import { FaRegPlayCircle } from "react-icons/fa";


function InicioVideo() {

    const [claseVideoTag, setClaseVideoTag] = useState('componente-video-body__videoTag');
    const [claseIframe, setClaseIframe] = useState('display-none');
    const [autoPlay, setAutoPlay] = useState('');

    const playVideoYT = () => {
        setClaseVideoTag('display-none');
        setClaseIframe('componente-video-body__iframe');
        setTimeout(setAutoPlay('?autoplay=1'), 500);
    }

    return (
    <>
    <div 
        // className='componente-video-body 
        // animate__animated 
        // animate__fadeInLeft
        // animate__delay-1s'
        // >
        className='componente-video-body'>
        <div className={claseVideoTag}>
            <a 
                className='
                componente-video-body__videoTag__titulo' 
                aria-label='Link al videoclip del artista en Youtube'
                href='https://www.youtube.com/watch?v=ogeLbJeV4_Q' 
                target='_blank'
                rel="noreferrer noopener">━━━ Ver videoclip entero
            </a>
            <FaRegPlayCircle 
                className='componente-video-body__videoTag__play-btn'
                onClick={playVideoYT}/>
            <Link to='/musica' aria-label='Link a la musica del artista'>
                <div 
                    className='
                    componente-video-body__videoTag__subtitulo'
                    href='https://www.youtube.com/watch?v=ogeLbJeV4_Q' 
                    target='_blank'
                    rel="noreferrer noopener">Echa un vistazo a su último álbum ━━━
                </div>
            </Link>
            <video 
                poster={fallback}
                className='componente-video-body__videoTag__link__video display-none'
                aria-label='Videoclip del artista' 
                src={video1} 
                preload='auto' 
                autoPlay 
                loop 
                muted
                //for iOS Safari
                defaultmuted
                playsInline
                />
        </div>
        <iframe 
            title='Youtube Videoclip - Sombras del mes de Abril'
            className={claseIframe}
            aria-label='Videoclip del artista en Youtube' 
            src={`https://www.youtube-nocookie.com/embed/ogeLbJeV4_Q${autoPlay}`}
            allowFullScreen
            importance='low'
            allow='autoplay'/>
    </div>
    </>
    )
}

export default InicioVideo