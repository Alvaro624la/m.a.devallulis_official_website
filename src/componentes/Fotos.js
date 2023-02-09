import React, { useState } from 'react';
import { Helmet } from "react-helmet";

function Fotos() {
  // console.log('fotos cargado');
  //IMPORTAR TODAS LAS IMAGENES DE LA CARPETA '../img/DCIM/Comprimidas_sin-perdida'
  const importAllComp = (r) => {
    let imagenesComp = {};
    r.keys().forEach((item) => { imagenesComp[item.replace('./', '')] = r(item); });
    return imagenesComp;
  }
  const imagenesComp = importAllComp(require.context('../img/DCIM/Poca-calidad', false, /\.(png|jpe?g|svg)$/i));
  const arrImgComp = Object.keys(imagenesComp);

  //IMPORTAR TODAS LAS IMAGENES DE LA CARPETA '../img/DCIM/Originales'
  const importAllHD = (r) => {
    let imagenesOrig = {};
    r.keys().forEach((item) => { imagenesOrig[item.replace('./', '')] = r(item); });
    return imagenesOrig;
  }
  const imagenesOrig = importAllHD(require.context('../img/DCIM/HD', false, /\.(png|jpe?g|svg)$/i));
  const arrImgOrig = Object.keys(imagenesOrig);

  const [rutaActualClick, setRutaActualClick] = useState();

  //Abrir/cerrar - Visualizador img originales (HD)
  const [claseVisualizadorImgOrig, setclaseVisualizadorImgOrig] = useState('display-none');
  const [claseBtnCerrarImgOrig, setclaseBtnCerrarImgOrig] = useState('display-none');
  const cerrarImgOrig = () => {
    setclaseVisualizadorImgOrig('display-none');
    setclaseBtnCerrarImgOrig('display-none');
  };
  // ------ CREAR POLYFILL ------ //
  // ------ DESACTIVAR ERROR DE ESLINT PARA CAMBIAR FUNCIONES NATIVAS, CON LA SIGUIENTE FRASE COMENTADA: ------ //
  // eslint-disable-next-line no-extend-native
  Array.prototype.alvaroMap = function(callback){
    let result = [];
    for(let index = 0; index < this.length; index++){
      const el = this[index];
      const elTransformado = callback(el, index);
      result.push(elTransformado);
    }
    return result;
  }
  // COMPROBANDO EL POLYFILL:
  // const a = [2, 3];
  // console.log(a.map(callback => callback + 10));
  // console.log(a.alvaroMap(callback => callback + 10));

  return (
  <>
  <Helmet>
    <title>Fotos | Miguel Ángel de Vallulis</title>
    <meta name="description" content="Aquí verás unas cuantas fotos de Miguel Ángel" />
  </Helmet>
  <div className='fotos-body'>
    <div className='fotos-body__contenido'>
      {/*------Mostrar visualizador e img originales (HD) en DOM------*/}
      <div className={claseVisualizadorImgOrig} onClick={cerrarImgOrig}>
        {arrImgOrig.alvaroMap((rutaImg, index)=>{
          // console.log(rutaActualClick);
          // console.log(rutaImg);
          // const regExp1 = /(\d|\w)*\./i;
          // const regExp2 = /(png|jpe?g|svg)$/i;
          if(rutaActualClick === rutaImg){ //mejorar éste if para /.../i (que no importe .jpg o .JPG (includes lo he intentado y no sirve))
            return <div 
            key={`div__${index}`} 
            className="fotos-body__contenido__ver-img-orig__div">
            <img 
              key={`div__img__${index}`} 
              className='fotos-body__contenido__ver-img-orig__div__img' 
              aria-label={`Imagen nombrada como: ${rutaImg}`} 
              src={imagenesOrig[rutaImg]}
            />
          </div>
          }
        })}
        {/*------Boton placebo para cerrar visualizador------*/}
        <div className={claseBtnCerrarImgOrig}>
          <div className='fotos-body__contenido__ver-img-orig__btn-cerrar__bar1'></div>
          <div className='fotos-body__contenido__ver-img-orig__btn-cerrar__bar2'></div>
        </div>
      </div>
      {/*------Mostrar en DOM TODAS LAS IMAGENES DE arrImgComp------*/}
      {arrImgComp.alvaroMap((rutaImg, index)=>{
        return <div 
          key={`div__${index}`} 
          className='fotos-body__contenido__div'>
            <img 
            key={`div__img__${index}`} 
            className='fotos-body__contenido__div__img' 
            aria-label={`Imagen nombrada como: ${rutaImg}`} 
            src={imagenesComp[rutaImg]}
            loading='lazy'
            onClick={()=>{
              setRutaActualClick(rutaImg);
              setclaseVisualizadorImgOrig('fotos-body__contenido__ver-img-orig');
              setclaseBtnCerrarImgOrig('fotos-body__contenido__ver-img-orig__btn-cerrar');
            }}
          />
        </div>
      })}
    </div>
  </div>
  </>
  )
}

export default React.memo(Fotos);

//  Line 44:41:  Array.prototype.map() expects a value to be returned at the end of arrow function  array-callback-return