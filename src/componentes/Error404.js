import React from 'react';
import { Helmet } from "react-helmet";

function Error404() {
  <Helmet>
    <title>Página desconocida</title>
    <meta name="robots" content="noindex"></meta>
  </Helmet>
  return (
    <>
    <div className="error404-container" aria-label='Mensaje de error: página no encontrada'>
      <div className="error404-container__1"><span className="error404-container__1__span">404</span>Error </div>
      <div className="error404-container__2">Página no encontrada</div>
      <div className="error404-container__3">Quizás quisiste decir: <a href="http://prueba-vallulis.000webhostapp.com/">www.miguelangeldevallulis.com</a></div>
      
    </div>
    </>
  )
}

export default Error404