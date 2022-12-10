import './App.scss';
import React from 'react';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import Nav from './componentes/Nav';
import Inicio from './componentes/Inicio';
import Musica from './componentes/Musica';
import Fotos from './componentes/Fotos';
import Biografia from './componentes/Biografia';
import Contacto from './componentes/Contacto';
import Error404 from './componentes/Error404';
import Footer from './componentes/Footer';

function App() {
  return (
    <div className='body'>
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
  );
}

export default App;
