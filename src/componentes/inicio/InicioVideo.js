import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'animate.css';
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
        className='componente-video-body 
        animate__animated 
        animate__fadeInLeft
        animate__delay-1s'>
        <div className={claseVideoTag}>
            <a 
                className='
                componente-video-body__videoTag__titulo' 
                href='https://www.youtube.com/watch?v=ogeLbJeV4_Q' 
                target='_blank'>━━━ Ver videoclip entero
            </a>
            <FaRegPlayCircle 
                className='componente-video-body__videoTag__play-btn'
                onClick={playVideoYT}/>
            <Link to='/musica'>
                <div 
                    className='
                    componente-video-body__videoTag__subtitulo'
                    href='https://www.youtube.com/watch?v=ogeLbJeV4_Q' 
                    target='_blank'>Hecha un vistazo a su último álbum ━━━
                </div>
            </Link>
            <video 
                className='componente-video-body__videoTag__link__video display-none' 
                src={video1} 
                preload='auto' 
                autoPlay 
                loop 
                muted/>
        </div>
        <iframe 
            className={claseIframe}
            src={`https://www.youtube-nocookie.com/embed/ogeLbJeV4_Q${autoPlay}`}
            allowFullScreen
            importance='low'
            allow='autoplay'/>
    </div>
    </>
    )
}

export default InicioVideo