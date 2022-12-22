import React, { useState } from 'react';
import audio1 from '../../mp3/Canción-5-sin-nombre-largo.mp3';
import audio2 from '../../mp3/Indios-de-la-esquina.mp3';
import audio3 from '../../mp3/Juanetes-de-la-india.mp3';
import audio4 from '../../mp3/Panal-de-abejas.mp3';
import audio5 from '../../mp3/Peñacorada-en-mi-corazon.mp3';
import audio6 from '../../mp3/Piedras-en-el-horizonte.mp3';
import audio7 from '../../mp3/Valió-la-pena.mp3';

import { FaPlay, FaPause, FaVolumeUp, FaVolumeDown, FaVolumeMute, FaShoppingCart } from "react-icons/fa";
import { FaSpotify, FaItunes, FaSoundcloud  } from "react-icons/fa";

function MusicaMuestrasAudio() {

    const muestrasArr = [audio1, audio2, audio3, audio4, audio5, audio6, audio7];
                            // palabras acomnpañadas de - | palabra unica
    const regExp = /([A-ZÁÉÍÓÚÑ][\wÁÉÍÓÚáéíóúÑñ]*(\-\w*)*)|([A-ZÁÉÍÓÚÑ][\wÁÉÍÓÚáéíóúÑñ]*)/g;
    
    const [clasePlay, setClasePlay] = useState('display-block');
    const [clasePause, setClasePause] = useState('display-none');

    const playOrPause = (e) => {
        console.log(e.target.className);
        clasePlay === 'display-block' ? setClasePlay('display-none') : setClasePlay('display-block');
        clasePause === 'display-block' ? setClasePause('display-none') : setClasePause('display-block');
    };

    return (
    <>
    <div className='componente-musicamuestrasaudio-body'>
        <div className='componente-musicamuestrasaudio-body__ver'>
            <p className='componente-musicamuestrasaudio-body__ver__titulo' aria-label='Titulo sección ver'>VER</p>
            <div className='componente-musicamuestrasaudio-body__ver__video'>
                <iframe 
                    className='componente-musicamuestrasaudio-body__ver__video__iframe'
                    aria-label='Videoclip del artista en Youtube' 
                    src={`https://www.youtube-nocookie.com/embed/A4oLeO90LeY`}
                    allowFullScreen
                    importance='low'
                    allow='autoplay'/>
            </div>
        </div>
        <div className='componente-musicamuestrasaudio-body__escuchar'>
            <p className='componente-musicamuestrasaudio-body__escuchar__titulo' aria-label='Titulo sección escuchar'>ESCUCHAR</p>
            {
                muestrasArr.map((muestra, index)=>{
                    return <div key={`div-n_${index}`} className='componente-musicamuestrasaudio-body__escuchar__song-container'>
                        <div className='componente-musicamuestrasaudio-body__escuchar__song-container__play-pause' onClick={playOrPause}>
                            <div className='componente-musicamuestrasaudio-body__escuchar__song-container__play-pause__izq'>
                                <FaPlay className={clasePlay} id={`play-num_${index}`} aria-label='Icono de play/reproducción de audio'/>
                                <FaPause className={clasePause} id={`pause-num_${index}`} aria-label='Icono de pause/pausa de audio'/>
                                <div className='componente-musicamuestrasaudio-body__escuchar__song-container__play-pause__izq__song-name' aria-label='Nombre de la muestra de audio'>
                                    {muestra.match(regExp).join('').replace(/[-?_?]/g, ' ')}
                                </div>
                            </div>
                            <div className='componente-musicamuestrasaudio-body__escuchar__song-container__play-pause__dcha'>
                                <a href='#' target='_blank' aria-label='Spotify logo-link' className='componente-musicamuestrasaudio-body__escuchar__song-container__play-pause__dcha__a'>
                                    <FaSpotify className='componente-musicamuestrasaudio-body__escuchar__song-container__play-pause__dcha__a__final-icon'/>
                                </a>
                                <a href='#' target='_blank' aria-label='iTunes logo-link' className='componente-musicamuestrasaudio-body__escuchar__song-container__play-pause__dcha__a'>
                                <FaItunes className='componente-musicamuestrasaudio-body__escuchar__song-container__play-pause__dcha__a__final-icon'/>
                                </a>
                                <a href='#' target='_blank' aria-label='SoundCloud logo-link' className='componente-musicamuestrasaudio-body__escuchar__song-container__play-pause__dcha__a'>
                                <FaSoundcloud className='componente-musicamuestrasaudio-body__escuchar__song-container__play-pause__dcha__a__final-icon'/>
                                </a>
                            </div>
                        </div>
                        <audio  
                            // controls
                        >
                            <source src={muestra}></source>
                        </audio>
                    </div>
                })
            }
        </div>
    </div>
    </>
    )
}

export default MusicaMuestrasAudio