import React, { useState, useEffect, useMemo, useCallback } from 'react';
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

import { FaPlay, FaPause, FaVolumeUp, FaVolumeDown, FaVolumeMute, FaShoppingCart } from "react-icons/fa";
import { FaSpotify, FaItunes, FaSoundcloud  } from "react-icons/fa";

function MusicaMuestrasAudio() {

    // const playAudio1 = useCallback((audio1)=>{
    //         const newAudio1 = new Audio(audio1);
    //         playPause ? newAudio1.pause() : newAudio1.play();
    // }, [audio2]);
    // const audiosArr = [];
    // useCallback(()=>{
    //     console.log('RENDERIZADO');
    //     audiosArr.push(audio1, audio2, audio3, audio4, audio5, audio6, audio7, audio8, audio9, audio10, audio11, audio12, audio13);
    // }, [audiosArr]);
    // console.log(audiosArr);
    // const newAudiosArr = new Array();
    // console.log(audio1)
    // const newAudio1 = new Audio(audio1);
    
    // console.log(newAudiosArr);
    // console.log('RENDERIZADO');
    // const a = useMemo(()=>{}, []);
    // const newAudiosArr = new Array();
    // useEffect(  () => {
    //     const newAudio1 = new Audio(audio1);
    //     const newAudio2 = new Audio(audio2);
    //     const newAudio3 = new Audio(audio3);
    //     const newAudio4 = new Audio(audio4);
    //     const newAudio5 = new Audio(audio5);
    //     const newAudio6 = new Audio(audio6);
    //     const newAudio7 = new Audio(audio7);
    //     const newAudio8 = new Audio(audio8);
    //     const newAudio9 = new Audio(audio9);
    //     const newAudio10 = new Audio(audio10);
    //     const newAudio11 = new Audio(audio11);
    //     const newAudio12 = new Audio(audio12);
    //     const newAudio13 = new Audio(audio13);
    //     newAudiosArr.push(newAudio1, newAudio2, newAudio3, newAudio4, newAudio5, newAudio6, newAudio7, newAudio8, newAudio9, newAudio10, newAudio11, newAudio12, newAudio13);
    // },[]);
    // console.log(newAudiosArr.length);


    const audiosArr = [audio1, audio2, audio3, audio4, audio5, audio6, audio7, audio8, audio9, audio10, audio11, audio12, audio13, audio14];
    // palabras acomnpañadas de - o ' ' | palabra unica
    const regExp = /([A-ZÁÉÍÓÚáéíóúÑñ][\wÁÉÍÓÚáéíóúÑñ]*((\ \w*)|(\-\w*))*)|([A-ZÁÉÍÓÚáéíóúÑñ][\wÁÉÍÓÚáéíóúÑñ]*)/g;
    

    // const [clasePlay, setClasePlay] = useState('display-block');
    // const [clasePause, setClasePause] = useState('display-none');
    // e => {
    //     console.log(e.target.id.includes(index.toString()));
    //     const a = e.target.id;
    //     if(a.includes(index.toString())){
    //     clasePlay === 'display-block' ? setClasePlay('display-none') : setClasePlay('display-block');
    //     clasePause === 'display-block' ? setClasePause('display-none') : setClasePause('display-block');
    //     }
    // }
    const [playPause, setPlayPause] = useState(false);
    const audioaudiosArr = new Array();
    // const audio = useMemo(() => new Audio(src), [src]);

    const cambiarAspecto = (e) => {
        e.target.className.includes('muestra-play') 
        ? e.target.className='componente-musicamuestrasaudio-body__escuchar__song-container__reproductor-audio__play-pause'
        : e.target.className='componente-musicamuestrasaudio-body__escuchar__song-container__reproductor-audio__play-pause muestra-play';
    };
    // const play = (e) => {
    //     // e.target.children[0].currentSrc.play();
    //     audio1.play();
    //     setPlayPause(true);
    // }
    // const pause = (e) => {
    //     // e.target.children[0].currentSrc.pause();
    //     audio1.pause();
    //     setPlayPause(false);
    // }




//nose si funciona o no, o si lo borro ...:


    // const efecto = useEffect(() => { //con el useEfect carga una sola vez, entonces no creará un <audio> cada vez y podre .pause() el audio que esté reproduciendose. Pero ahora NO SE VE NADA en el DOM
    //     const map = audiosArr.map(e=>e);
    //     // console.warn('CARGADO-RENDERIZADO');
    //     console.log(map);
    //     for(let i = 0; i < map.length; i++){
    //         const mapList = async () => {
    //             return <div className='componente-musicamuestrasaudio-body__escuchar__song-container'>
    //                 <div className='componente-musicamuestrasaudio-body__escuchar__song-container__reproductor-audio'>
    //                     <div className='componente-musicamuestrasaudio-body__escuchar__song-container__reproductor-audio__play-pause' onClick={(e)=>{
    //                         // console.log(e);
    //                         //                     // selectMuestra(e);
    //                         //                     // const src = audioaudiosArr[index];
    //                         //                     // const srcComprobacion = e.target.children[0].currentSrc;
    //                         //                     playPause ? setPlayPause(false) : setPlayPause(true);
    //                         //                     // playPause ? pause(src, srcComprobacion, index) : play(src, srcComprobacion, index);
    //                     }}>
    //                         {map[i].match(regExp).join('').replace(/[-?_?]/g, ' ')}
    //                         {/* {console.log(map[i])} */}
    //                         <audio 
    //                             controls 
    //                         >
    //                             <source src={map[i]}></source>
    //                         </audio>
    //                     </div>
    //                 </div>
    //             </div>
    //         }
    //         mapList();
    //     }
    // }, [])
    // console.log(efecto);

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

//1. con el useEfect carga una sola vez, entonces no creará un <audio> cada vez y podre .pause() el audio que esté reproduciendose. Pero ahora NO SE VE NADA en el DOM


                // useEffect(() => {
                //     const map = audiosArr.map(e=>e);
                //     // console.warn('CARGADO-RENDERIZADO');
                //     console.log(map);
                //     for(let i = 0; i < map.length; i++){
                //         const mapList = async () => {
                //             return <div className='componente-musicamuestrasaudio-body__escuchar__song-container'>
                //                 <div className='componente-musicamuestrasaudio-body__escuchar__song-container__reproductor-audio'>
                //                     <div className='componente-musicamuestrasaudio-body__escuchar__song-container__reproductor-audio__play-pause' onClick={(e)=>{
                //                         // console.log(e);
                //                         //                     // selectMuestra(e);
                //                         //                     // const src = audioaudiosArr[index];
                //                         //                     // const srcComprobacion = e.target.children[0].currentSrc;
                //                         //                     playPause ? setPlayPause(false) : setPlayPause(true);
                //                         //                     // playPause ? pause(src, srcComprobacion, index) : play(src, srcComprobacion, index);
                //                     }}>
                //                         {map[i].match(regExp).join('').replace(/[-?_?]/g, ' ')}
                //                         {/* {console.log(map[i])} */}
                //                         <audio 
                //                             controls 
                //                         >
                //                             <source src={map[i]}></source>
                //                         </audio>
                //                     </div>
                //                 </div>
                //             </div>
                //         }
                //         mapList();
                //     }
                // }, [])



//2. falta que el pause() funcione, para ello lo más seguro es que reenderice cada vez que clicko un nuevo audio entonces no puedo pausar el anterior ya dado al play. Intentar ir al paso 1. pues


                
                audiosArr.map((muestra, index)=>{
                    audioaudiosArr.push(new Audio(muestra));
                    return <div key={`div-n_${index}`} className='componente-musicamuestrasaudio-body__escuchar__song-container'>
                        <div className='componente-musicamuestrasaudio-body__escuchar__song-container__reproductor-audio'>
                            <div className='componente-musicamuestrasaudio-body__escuchar__song-container__reproductor-audio__play-pause'
                                // onClick={(e)=>{
                                    // selectMuestra(e);
                                    // const src = audioaudiosArr[index];
                                    // const srcComprobacion = e.target.children[0].currentSrc;
                                    // playPause ? setPlayPause(false) : setPlayPause(true);
                                    // playPause ? pause(src, srcComprobacion, index) : play(src, srcComprobacion, index);
                                // }}
                                >
                                    {/* {playPause ? <FaPause aria-label='Icono de pause/pausa de audio'/> : <FaPlay aria-label='Icono de pause/pausa de audio'/>} */}
                                    <div className='componente-musicamuestrasaudio-body__escuchar__song-container__reproductor-audio__play-pause__song-name'>
                                        {muestra.match(regExp).join('').replace(/[-?_?]/g, ' ')}
                                    </div>
                                    <audio
                                    loop
                                    controls 
                                    >
                                        <source src={muestra}></source>
                                    </audio>
                            </div>
                            <div className='componente-musicamuestrasaudio-body__escuchar__song-container__reproductor-audio__redes'>
                            <a href='#' target='_blank' aria-label='Spotify logo-link' className='componente-musicamuestrasaudio-body__escuchar__song-container__reproductor-audio__redes__a'>
                                <FaSpotify className='componente-musicamuestrasaudio-body__escuchar__song-container__reproductor-audio__redes__a__final-icon'/>
                            </a>
                            <a href='#' target='_blank' aria-label='iTunes logo-link' className='componente-musicamuestrasaudio-body__escuchar__song-container__reproductor-audio__redes__a'>
                            <FaItunes className='componente-musicamuestrasaudio-body__escuchar__song-container__reproductor-audio__redes__a__final-icon'/>
                            </a>
                            <a href='#' target='_blank' aria-label='SoundCloud logo-link' className='componente-musicamuestrasaudio-body__escuchar__song-container__reproductor-audio__redes__a'>
                            <FaSoundcloud className='componente-musicamuestrasaudio-body__escuchar__song-container__reproductor-audio__redes__a__final-icon'/>
                            </a>
                        </div>
                    </div>
                    
                </div>
                })
                
                
                
                
//3. Manual porque estoy hasta ***************
                }



{/* <div className='componente-musicamuestrasaudio-body__escuchar__song-container'>
    <div className='componente-musicamuestrasaudio-body__escuchar__song-container__reproductor-audio'>
        <div className='componente-musicamuestrasaudio-body__escuchar__song-container__reproductor-audio__play-pause'
            onClick={e=>{
                setPlayPause(!playPause);
                cambiarAspecto(e);
                playAudio1(audio1);
                // playPause ? playAudio1(audio1) : playAudio1(audio1);
                playPause ? console.log('pause') : console.log('play');
            }
        }>
            {playPause ? <FaPause aria-label='Icono de pause/pausa de audio'/> : <FaPlay aria-label='Icono de pause/pausa de audio'/>}
            {audio1.match(regExp).join('').replace(/[-?_?]/g, ' ')}
            </div>
            <div className='componente-musicamuestrasaudio-body__escuchar__song-container__reproductor-audio__redes'>
            <a href='#' target='_blank' aria-label='Spotify logo-link' className='componente-musicamuestrasaudio-body__escuchar__song-container__reproductor-audio__redes__a'>
                <FaSpotify className='componente-musicamuestrasaudio-body__escuchar__song-container__reproductor-audio__redes__a__final-icon'/>
            </a>
            <a href='#' target='_blank' aria-label='iTunes logo-link' className='componente-musicamuestrasaudio-body__escuchar__song-container__reproductor-audio__redes__a'>
            <FaItunes className='componente-musicamuestrasaudio-body__escuchar__song-container__reproductor-audio__redes__a__final-icon'/>
            </a>
            <a href='#' target='_blank' aria-label='SoundCloud logo-link' className='componente-musicamuestrasaudio-body__escuchar__song-container__reproductor-audio__redes__a'>
            <FaSoundcloud className='componente-musicamuestrasaudio-body__escuchar__song-container__reproductor-audio__redes__a__final-icon'/>
            </a>
        </div>
    </div>
</div>

<div>{audio2.match(regExp).join('').replace(/[-?_?]/g, ' ')}</div>
<div>{audio3.match(regExp).join('').replace(/[-?_?]/g, ' ')}</div>
<div>{audio4.match(regExp).join('').replace(/[-?_?]/g, ' ')}</div>
<div>{audio5.match(regExp).join('').replace(/[-?_?]/g, ' ')}</div>
<div>{audio6.match(regExp).join('').replace(/[-?_?]/g, ' ')}</div>
<div>{audio7.match(regExp).join('').replace(/[-?_?]/g, ' ')}</div>
<div>{audio8.match(regExp).join('').replace(/[-?_?]/g, ' ')}</div>
<div>{audio9.match(regExp).join('').replace(/[-?_?]/g, ' ')}</div>
<div>{audio10.match(regExp).join('').replace(/[-?_?]/g, ' ')}</div>
<div>{audio11.match(regExp).join('').replace(/[-?_?]/g, ' ')}</div>
<div>{audio12.match(regExp).join('').replace(/[-?_?]/g, ' ')}</div>
<div>{audio13.match(regExp).join('').replace(/[-?_?]/g, ' ')}</div> */}


        
        </div>
    </div>
    </>
    )
}

export default React.memo(MusicaMuestrasAudio);