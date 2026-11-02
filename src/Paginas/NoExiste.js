import React from 'react';
import PiePagina from '../Componentes/PiePagina';

function NoExiste() {
  return (
    <>
      <main className="contenedor" style={{ textAlign: 'center', paddingTop: '3rem' }}>
        <h2 style={{ fontSize: '3rem', color: '#e74c3c' }}>404</h2>
        <h3>Página No Encontrada</h3>
        <p style={{ marginTop: '1rem', color: '#7f8c8d' }}>
          La dirección que intentas visitar no existe o ha sido movida.
        </p>
      </main>
      <PiePagina />
    </>
  );
}

export default NoExiste;
