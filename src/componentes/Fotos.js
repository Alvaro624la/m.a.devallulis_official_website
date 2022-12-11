import React, { useState } from 'react';

function Fotos() {

  //IMPORTAR TODAS LAS IMAGENES DE LA CARPETA '../img'
  function importAll(r) {
    let imagenes = {};
    r.keys().map((item, index) => { imagenes[item.replace('./', '')] = r(item); });
    return imagenes;
  }
  const imagenes = importAll(require.context('../img/FotosJS', false, /\.(png|jpe?g|svg)$/));
  const arr = Object.keys(imagenes);

  return (
  <>
  <div className='fotos-body'>
    <div className='fotos-body__contenido'>
      {arr.map((rutaImg, index)=>{
        return <div className='fotos-body__contenido__div'>
            <img 
            key={`img_${index}`} 
            className='fotos-body__contenido__div__img' 
            src={imagenes[rutaImg]}
          />
        </div>
      })}
    </div>
  </div>
  <div className=''>

  </div>
  </>
  )
}

export default Fotos