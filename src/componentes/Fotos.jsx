import React, { useState } from 'react';
import { Helmet } from "react-helmet";
import lowIMG_3852 from '../img/DCIM/Poca-calidad/IMG_3852.jpg';
import HDIMG_3852 from '../img/DCIM/HD/IMG_3852.jpg';
// import lowIMG_3857 from '../img/DCIM/Poca-calidad/IMG_3857.jpg';
// import HDIMG_3857 from '../img/DCIM/HD/IMG_3857.jpg';
// import lowIMG_3841 from '../img/DCIM/Poca-calidad/IMG_3841.jpg';
// import HDIMG_3841 from '../img/DCIM/HD/IMG_3841.jpg';
// import lowIMG_3982 from '../img/DCIM/Poca-calidad/IMG_3982.jpg';
// import HDIMG_3982 from '../img/DCIM/HD/IMG_3982.jpg';
import lowIMG_4007 from '../img/DCIM/Poca-calidad/IMG_4007.jpg';
import HDIMG_4007 from '../img/DCIM/HD/IMG_4007.jpg';
import lowIMG_4063 from '../img/DCIM/Poca-calidad/IMG_4063.jpg';
import HDIMG_4063 from '../img/DCIM/HD/IMG_4063.jpg';
import lowIMG_4109 from '../img/DCIM/Poca-calidad/IMG_4109.jpg';
import HDIMG_4109 from '../img/DCIM/HD/IMG_4109.jpg';
import lowIMG_4114 from '../img/DCIM/Poca-calidad/IMG_4114.jpg';
import HDIMG_4114 from '../img/DCIM/HD/IMG_4114.jpg';
import lowIMG_4180 from '../img/DCIM/Poca-calidad/IMG_4180.jpg';
import HDIMG_4180 from '../img/DCIM/HD/IMG_4180.jpg';

function Fotos() {
  const arrLowImg = [
    lowIMG_3852,
    // lowIMG_3857,
    //  lowIMG_3841,
    // lowIMG_3982,
    lowIMG_4007,
    lowIMG_4063,
    lowIMG_4109,
    lowIMG_4114,
    lowIMG_4180
    ];
  const arrHDImg = [
    HDIMG_3852,
    // HDIMG_3857,
    // HDIMG_3841,
    // HDIMG_3982,
    HDIMG_4007,
    HDIMG_4063,
    HDIMG_4109,
    HDIMG_4114,
    HDIMG_4180
  ];

  const [rutaActualClick, setRutaActualClick] = useState('');

  //Abrir/cerrar - Visualizador img originales (HD)
  const [claseVisualizadorImgOrig, setclaseVisualizadorImgOrig] = useState('display-none');
  const [claseBtnCerrarImgOrig, setclaseBtnCerrarImgOrig] = useState('display-none');
  const cerrarImgOrig = () => {
    setclaseVisualizadorImgOrig('display-none');
    setclaseBtnCerrarImgOrig('display-none');
  };
  //////

  return (
    <>
    <Helmet>
      <title>Fotos | Miguel Ángel de Vallulis</title>
      <meta name="description" content="Aquí verás unas cuantas fotos de Miguel Ángel" />
    </Helmet>
    <div className='fotos-body'>
      <div className='fotos-body__contenido'>
      {/* ------ Mostrar en DOM TODAS LAS IMAGENES Low DE arrLowImg ------ */}
      {
        arrLowImg.map((img, i)=>{
          return <div 
            key={`div__${i}`} 
            className='fotos-body__contenido__div'>
              <img 
              key={`div__img__${i}`} 
              className='fotos-body__contenido__div__img' 
              aria-label={`Imagen nombrada como: ${img}`} 
              src={img}
              loading='lazy'
              onClick={()=>{
                setRutaActualClick(img);
                setclaseVisualizadorImgOrig('fotos-body__contenido__ver-img-orig');
                setclaseBtnCerrarImgOrig('fotos-body__contenido__ver-img-orig__btn-cerrar');
              }}
            />
          </div>
        })
      }
      {/*------ Mostrar visualizador de img HD en DOM de arrImgOrig ------*/}
        <div className={claseVisualizadorImgOrig} onClick={cerrarImgOrig}>
          {
            arrHDImg.map((img, i)=>{
              if(rutaActualClick.includes(img.match(/IMG_\d{4}/g))){ // se entiende que es (... === true)
                return <div 
                key={`div__${i}`} 
                className="fotos-body__contenido__ver-img-orig__div">
                <img 
                  key={`div__img__${i}`} 
                  className='fotos-body__contenido__ver-img-orig__div__img' 
                  aria-label={`Imagen nombrada como: ${img}`} 
                  src={img}
                />
              </div>
              } 
            })
          }
          {/*------ Boton placebo para cerrar visualizador ------*/}
          <div className={claseBtnCerrarImgOrig}>
            <div className='fotos-body__contenido__ver-img-orig__btn-cerrar__bar1'></div>
            <div className='fotos-body__contenido__ver-img-orig__btn-cerrar__bar2'></div>
          </div>
        </div>
      </div>
    </div>
    </>
    )
  }
  
  export default React.memo(Fotos);
  
  //  Line 44:41:  Array.prototype.map() expects a value to be returned at the end of arrow function  array-callback-return