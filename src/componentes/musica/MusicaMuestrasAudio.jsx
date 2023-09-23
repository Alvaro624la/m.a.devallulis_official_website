import React, { useContext } from 'react';
// import { useState } from 'react';
// import { useEffect, useMemo, useCallback } from 'react';
import audio1 from '../../mp3/1. Sombras Del Mes De Abril.mp3';
import audio2 from '../../mp3/2. El Gato De Taranilla.mp3';
import audio3 from '../../mp3/3. Corazones Que Calientan.mp3';
import audio4 from '../../mp3/4. Te Escondí En Mi Corazón.mp3';
import audio5 from '../../mp3/5. Padre De Viento Y De Nieve.mp3';
import audio6 from '../../mp3/6. Por Las Orillas Del Amor.mp3';
import audio7 from '../../mp3/7. Pajarines En La Velilla.mp3';
import audio8 from '../../mp3/8. Viento Del Norte.mp3';
import audio9 from '../../mp3/9. Perro Fiel.mp3';
import audio10 from '../../mp3/10. Volverás En Primavera.mp3';
import audio11 from '../../mp3/11. Soñaban Tocar Estrellas.mp3';
import audio12 from '../../mp3/12. Villalmonte Es Mi Pueblo.mp3';
import audio13 from '../../mp3/13. Me Duermo En Tu Recuerdo.mp3';
import audio14 from '../../mp3/14. Mi Virgen De La Velilla.mp3';

// import { FaPlay, FaPause, FaVolumeUp, FaVolumeDown, FaVolumeMute, FaShoppingCart } from "react-icons/fa";
import { FaSpotify, FaApple, FaAmazon, FaYoutube} from "react-icons/fa";
import { ContextoMADV } from '../contexto/Contexto';


function MusicaMuestrasAudio() {
    const { MADV } = useContext(ContextoMADV);

    const audiosArr = [audio1, audio2, audio3, audio4, audio5, audio6, audio7, audio8, audio9, audio10, audio11, audio12, audio13, audio14];
    // palabras acomnpañadas de - o ' ' | palabra unica
    const regExp = /([A-ZÁÉÍÓÚáéíóúÑñ][\wÁÉÍÓÚáéíóúÑñ]*((\s\w*)|(\s\w*))*)|([A-ZÁÉÍÓÚáéíóúÑñ][\wÁÉÍÓÚáéíóúÑñ]*)/g;

    const audioaudiosArr = [];

    return (
        <>
        <div className='componente-musicamuestrasaudio-body'>
            <div className='componente-musicamuestrasaudio-body__ver'>
                <p className='componente-musicamuestrasaudio-body__ver__titulo' aria-label='Titulo sección ver'>VER</p>
                <div className='componente-musicamuestrasaudio-body__ver__video'>
                    <iframe 
                        title='Youtube Videoclip - Viento Del Norte'
                        className='componente-musicamuestrasaudio-body__ver__video__iframe'
                        aria-label='Videoclip del artista en Youtube' 
                        src={`https://www.youtube-nocookie.com/embed/vY2lG7GR_xo`}
                        allowFullScreen
                        importance='low'
                        allow='autoplay'/>
                </div>
            </div>
            <div className='componente-musicamuestrasaudio-body__escuchar'>
                <p className='componente-musicamuestrasaudio-body__escuchar__titulo' aria-label='Titulo sección escuchar'>ESCUCHAR</p>
                {                
                audiosArr.map((muestra, index)=>{
                    audioaudiosArr.push(new Audio(muestra));
                    return <div key={`div-n_${index}`} className='componente-musicamuestrasaudio-body__escuchar__song-container'>
                        <div className='componente-musicamuestrasaudio-body__escuchar__song-container__reproductor-audio'>
                            <div className='componente-musicamuestrasaudio-body__escuchar__song-container__reproductor-audio__play-pause'>
                                    <div className='componente-musicamuestrasaudio-body__escuchar__song-container__reproductor-audio__play-pause__song-name'>
                                        {muestra.match(regExp).join('').replace(/[-?_?]/g, ' ')}
                                    </div>
                                    <audio
                                    // loop
                                    controls 
                                    >
                                        <source src={muestra}></source>
                                    </audio>
                            </div>
                            
                    </div>
                    <div className='componente-musicamuestrasaudio-body__escuchar__song-container__redes'>
                        <a href={MADV.spotify} target='_blank' rel="noreferrer noopener" aria-label='Spotify logo-link' className='componente-musicamuestrasaudio-body__escuchar__song-container__redes__a'>
                            <FaSpotify className='componente-musicamuestrasaudio-body__escuchar__song-container__redes__a__final-icon'/>
                        </a>
                        <a href={MADV.appleMusic} target='_blank' rel="noreferrer noopener" aria-label='iTunes logo-link' className='componente-musicamuestrasaudio-body__escuchar__song-container__redes__a'>
                            <FaApple className='componente-musicamuestrasaudio-body__escuchar__song-container__redes__a__final-icon'/>
                        </a>
                        <a href={MADV.amazonMusic} target='_blank' rel="noreferrer noopener" aria-label='SoundCloud logo-link' className='componente-musicamuestrasaudio-body__escuchar__song-container__redes__a'>
                            <FaAmazon className='componente-musicamuestrasaudio-body__escuchar__song-container__redes__a__final-icon'/>
                        </a>
                    </div>
                </div>
                })
                }
                <div className='componente-musicamuestrasaudio-body__escuchar__links-div'>
                    <a href={MADV.spotify} target='_blank' rel="noreferrer noopener" aria-label='Spotify logo-link' className='componente-musicamuestrasaudio-body__escuchar__links-div__a'>
                        <FaSpotify className='componente-musicamuestrasaudio-body__escuchar__links-div__a__icon'/>
                    </a>
                    <a href={MADV.youtube} target='_blank' rel="noreferrer noopener" aria-label='Youtube logo-link' className='componente-musicamuestrasaudio-body__escuchar__links-div__a'>
                        <FaYoutube className='componente-musicamuestrasaudio-body__escuchar__links-div__a__icon'/>
                    </a>
                    <a href={MADV.appleMusic} target='_blank' rel="noreferrer noopener" aria-label='iTunes logo-link' className='componente-musicamuestrasaudio-body__escuchar__links-div__a'>
                        <FaApple className='componente-musicamuestrasaudio-body__escuchar__links-div__a__icon'/>
                    </a>
                    <a href={MADV.amazonMusic} target='_blank' rel="noreferrer noopener" aria-label='SoundCloud logo-link' className='componente-musicamuestrasaudio-body__escuchar__links-div__a'>
                        <FaAmazon className='componente-musicamuestrasaudio-body__escuchar__links-div__a__icon'/>
                    </a>
                </div>
            </div>
        </div>
    </>
    )
}

export default React.memo(MusicaMuestrasAudio);