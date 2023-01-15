import React from 'react'

function Error404() {
  return (
    <>
    <div class="error404-container" aria-label='Mensaje de error: página no encontrada'>
      <div class="error404-container__1"><span class="error404-container__1__span">404</span>Error </div>
      <div class="error404-container__2">Página no encontrada</div>
      <div class="error404-container__3">Quizás quisiste decir: <a href="http://prueba-vallulis.000webhostapp.com/">www.miguelangeldevallulis.com</a></div>
      
    </div>
    </>
  )
}

export default Error404