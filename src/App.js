import './App.css';
import React from 'react';
import Home from './pages/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contato from './pages/contato/contato';
import Fotos from './pages/fotos/fotos';
// import Detalhes from './pages/detalhes/detalhes';
import Comentarios from './pages/comentarios/comentarios';

// O BrowserRouter deve envolver toda a parte da aplicação que vai fazer uso de rotas

function App() {

  return (
    <BrowserRouter>      
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/contato' element={<Contato />}/>
        <Route path='/fotos' element={<Fotos />}/>
        <Route path='/comentarios' element={<Comentarios />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
