import React from 'react';
import banner from '../img/musica-banner.jpg';
import 'animate.css';
import MusicaCdComprar from './musica/MusicaCdComprar';
import { FaPlay, FaPause, FaVolumeUp, FaVolumeDown, FaVolumeMute, FaShoppingCart } from "react-icons/fa";


function Musica() {

  function importAll(r) {
    let mp3 = {};
    r.keys().map((item) => { mp3[item.replace('./', '')] = r(item); });
    return mp3;
  }
  const mp3 = importAll(require.context('../mp3', false, /\.mp3$/i));
  const mp3Arr = Object.keys(mp3);
  return (
  <>
  <div className='musica-body'>
    <a className='musica-body__banner-cont'>
      <img className='musica-body__banner-cont__img' src={banner} aria-label='Imagen cabecera de música'/>
    </a>
    <MusicaCdComprar/>
    <div className='musica-body__play-songs-container'>
        {mp3Arr.map((songSrc)=>{
            console.log(songSrc);
          return <div key={`containerOf-->${songSrc}`} className='musica-body__play-songs-container__song-container'>
            <div className='musica-body__play-songs-container__song-container__play-icon'><FaPlay/></div>
            <div className='musica-body__play-songs-container__song-container__pause-icon'><FaPause/></div>
            <p className='musica-body__play-songs-container__song-container__song-name'>
              {
                songSrc.replace(/[-_]/g, ' ').match(/\w*[^\.mp3$]/gi)
              }
            </p>
            <audio src={`../mp3/${songSrc}`} controls/>
            <div className='musica-body__play-songs-container__song-container__mute-icon'><FaVolumeMute/></div>
          </div>
        })}
    </div>
  </div>
  </>
  )
}

export default Musica