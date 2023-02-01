import './App.scss';
import React, { useState, useEffect } from 'react';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import Nav from './componentes/Nav';
import Inicio from './componentes/Inicio';
import Musica from './componentes/Musica';
import Fotos from './componentes/Fotos';
import Biografia from './componentes/Biografia';
import Contacto from './componentes/Contacto';
import Error404 from './componentes/Error404';
import Footer from './componentes/Footer';
import { ScaleLoader } from "react-spinners";
import ContextoMADV from './componentes/contexto/Contexto';
import vSpinner from './img/Logo-PNG_V-negra.png'

function App() {

  const [clasePageLoader , setClasePageLoader] = useState('page-loader');
  const [claseBody, setClaseBody] = useState('display-none');
  console.log(process.env.PUBLIC_URL);
  
  try{
    useEffect(() => {
      const onPageLoad = () => {
        console.warn('Página cargada');
        setClasePageLoader('display-none');
        setClaseBody('body');
      };
      // Comprobar si la página está cargada
      if (document.readyState === 'complete') onPageLoad()
      else {
        console.warn('Página pendiente de carga');
        window.addEventListener('load', onPageLoad, false);
        // Eliminar EventListener cuando termina de ejecutarse el useEffect
        return () => window.removeEventListener('load', onPageLoad);
      }
    }, []);
  } catch(error){
    console.warn(`App.js/pageloader Error --> ${error}`);
  }
  
  return (
    <>
      <div className={clasePageLoader}>
        <img className="page-loader__img1" src={vSpinner} alt='spinner - cargando página'/>
        <ScaleLoader color='#3c963c' width={8} height={90} aria-label='spinner de carga'/>
        <img className="page-loader__img2" src={vSpinner} alt='spinner - cargando página'/>
      </div>
      <div className={claseBody}>
      <ContextoMADV>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Nav/>
          <Routes>
            <Route path='/home'       element={<Navigate to='/'/>}></Route>
            <Route path='/inicio'     element={<Navigate to='/'/>}></Route>
            <Route path='/'           element={<Inicio/>}></Route>
            <Route path='/musica'     element={<Musica/>}></Route>
            <Route path='/biografia'  element={<Biografia/>}></Route>
            <Route path='/fotos'      element={<Fotos/>}></Route>
            <Route path='/contacto'   element={<Contacto/>}></Route>
            <Route path='/*'          element={<Error404/>}></Route>
          </Routes>
        </BrowserRouter>
        <Footer/>
      </ContextoMADV>
      </div>
    </>
  );
}

export default App;

//falta:

  //debajo de boton COMPRALO YA, que salgan dos opciones, COMPRAR ONLINE o COMPRAR EN TIENDA (se abre apartado con HOTEL RIO CEA, dirección, maps(iframe o yoquese)))
  
  //HOTEL RIO CEA
  // Avda Mister Universo Juan Ferrero, 55 24880,
  // Puente Almuhey León, España
  // Teléfonos: 987 703 521
  //https://www.hotelriocea.com/contacto/

  //avanzado
//javascript how detect finger to right (para esconder la haburguer nav)
// funcionaliad ver icono play o pause al clickar individualmente cada título
// resproducir solo muestra clickada
//usar hook useMemo para componente fotos