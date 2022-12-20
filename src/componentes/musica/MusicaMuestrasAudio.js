import React from 'react';
import audio1 from '../../mp3/Canción-5-sin-nombre-largo.mp3';
import audio2 from '../../mp3/Indios-de-la-esquina.mp3';
import audio3 from '../../mp3/Juanetes-de-la-india.mp3';
import audio4 from '../../mp3/Panal-de-abejas.mp3';
import audio5 from '../../mp3/Peñacorada-en-mi-corazon.mp3';
import audio6 from '../../mp3/Piedras-en-el-horizonte.mp3';
import audio7 from '../../mp3/Valió-la-pena.mp3';

// import { FaPlay, FaPause, FaVolumeUp, FaVolumeDown, FaVolumeMute, FaShoppingCart } from "react-icons/fa";

function MusicaMuestrasAudio() {

    // function importAll(e) {
    //   let mp3 = {};
    //   e.keys().map((item) => { mp3[item.replace('./', '')] = e(item); });
    //   return mp3;
    // }
    // const mp3 = importAll(require.context('../mp3', false, /\.mp3$/i));
    // const mp3Arr = Object.keys(mp3);

    return (
    <>
    <div className='musica-body__play-songs-container'>
        <div className='musica-body__play-songs-container__song-container'>
            <p className='musica-body__play-songs-container__song-container__song-name'>
                Canción 5 sin nombre largo
            </p>
            <audio src={audio1} controls/>
        </div>
        <div className='musica-body__play-songs-container__song-container'>
            <p className='musica-body__play-songs-container__song-container__song-name'>
                Indios-de-la-esquina
            </p>
            <audio src={audio2} controls/>
        </div>
        <div className='musica-body__play-songs-container__song-container'>
            <p className='musica-body__play-songs-container__song-container__song-name'>
                Juanetes-de-la-india
            </p>
            <audio src={audio3} controls/>
        </div>
        <div className='musica-body__play-songs-container__song-container'>
            <p className='musica-body__play-songs-container__song-container__song-name'>
                Panal-de-abejas
            </p>
            <audio src={audio4} controls/>
        </div>
        <div className='musica-body__play-songs-container__song-container'>
            <p className='musica-body__play-songs-container__song-container__song-name'>
                Peñacorada-en-mi-corazon
            </p>
            <audio src={audio5} controls/>
        </div>
        <div className='musica-body__play-songs-container__song-container'>
            <p className='musica-body__play-songs-container__song-container__song-name'>
                Piedras-en-el-horizonte
            </p>
            <audio src={audio6} controls/>
        </div>
        <div className='musica-body__play-songs-container__song-container'>
            <p className='musica-body__play-songs-container__song-container__song-name'>
                Valió-la-pena
            </p>
            <audio src={audio7} controls/>
        </div>

    {/*Detección automática de títulos y src automático para reproducir audio (Problema: no se puede acceder a los mp3 solo desde la ruta de mp3 dada. Se tienen que importar, digo yo...por ahora...)*/}
        {/* {mp3Arr.map((songSrc)=>{
            // console.log(songSrc);
            return <div key={`containerOf-->${songSrc}`} className='musica-body__play-songs-container__song-container'>
                <div className='musica-body__play-songs-container__song-container__play-icon'><FaPlay/></div>
                <div className='musica-body__play-songs-container__song-container__pause-icon'><FaPause/></div>
                <p className='musica-body__play-songs-container__song-container__song-name'>
                {
                    songSrc.replace(/[-?_?]/g, ' ').match(/\w*[^\.mp3$]/gi)
                }
                </p>
                <audio src={`../mp3/${songSrc}`} controls/>
                <div className='musica-body__play-songs-container__song-container__mute-icon'><FaVolumeMute/></div>
            </div>
        })} */}
    </div>
    </>
    )
}

export default MusicaMuestrasAudio