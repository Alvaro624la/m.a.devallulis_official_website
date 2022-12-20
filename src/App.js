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

function App() {
  
  const [clasePageLoader , setClasePageLoader] = useState('page-loader');
  const [claseBody, setClaseBody] = useState('display-none');
  
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
    <div className={clasePageLoader}><ScaleLoader color='#3c963c' width={8} height={90} aria-label='spinner de carga'/></div>
    <div className={claseBody}>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path='/'           element={<Navigate to='/inicio'/>}></Route>
          <Route path='/inicio'     element={<Inicio/>}></Route>
          <Route path='/musica'     element={<Musica/>}></Route>
          <Route path='/biografia'  element={<Biografia/>}></Route>
          <Route path='/fotos'      element={<Fotos/>}></Route>
          <Route path='/contacto'   element={<Contacto/>}></Route>
          <Route path='/*'          element={<Error404/>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
    </>
  );
}

export default App;
