import './App.scss';
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Nav from './componentes/Nav';
import Home from './componentes/Home';
import Musica from './componentes/Musica';
import Fotos from './componentes/Fotos';
import Biografia from './componentes/Biografia';
import Contacto from './componentes/Contacto';
import Error404 from './componentes/Error404';

function App() {
  return (
    <div className='body'>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path='/'           element={<Home/>}></Route>
          <Route path='/musica'     element={<Musica/>}></Route>
          <Route path='/biografia'  element={<Biografia/>}></Route>
          <Route path='/fotos'      element={<Fotos/>}></Route>
          <Route path='/contacto'   element={<Contacto/>}></Route>
          <Route path='/*'          element={<Error404/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
