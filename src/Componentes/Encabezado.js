import React from 'react';
import { NavLink } from 'react-router-dom';

function Encabezado() {
  return (
    <header className="header">
      <div className="logo">
        <h1>🐾 Huellitas de Amor</h1>
      </div>
      <nav>
        <NavLink 
          to="/Inicio" 
          style={({ isActive }) => ({ color: isActive ? '#e67e22' : '#333' })}
        >
          Inicio
        </NavLink>
        <NavLink 
          to="/Servicios" 
          style={({ isActive }) => ({ color: isActive ? '#e67e22' : '#333' })}
        >
          Catálogo de Mascotas
        </NavLink>
        <NavLink 
          to="/Contacto" 
          style={({ isActive }) => ({ color: isActive ? '#e67e22' : '#333' })}
        >
          Contacto y Refugio
        </NavLink>
      </nav>
    </header>
  );
}

export default Encabezado;
