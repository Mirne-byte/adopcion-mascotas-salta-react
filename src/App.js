
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Encabezado from './Componentes/Encabezado';
import Inicio from './Paginas/Inicio';
import Servicios from './Paginas/Servicios';
import Contacto from './Paginas/Contacto';
import NoExiste from './Paginas/NoExiste';

function App() {
  return (
    <BrowserRouter basename="/adopcion-mascotas-salta-react">
      <Encabezado />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Inicio" element={<Inicio />} />
        <Route path="/Servicios" element={<Servicios />} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="*" element={<NoExiste />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
