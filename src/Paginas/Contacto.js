
import React from 'react';
import Formulario from '../Componentes/Formulario';
import PiePagina from '../Componentes/PiePagina';

function Contacto() {
  return (
    <>
      <main className="contenedor">

        <h2 className="titulo-seccion">
          Contacto
        </h2>

        <p className="descripcion-seccion">
          Visítanos en nuestra Casa Particular, un hogar transitorio,
          o envíanos un mensaje para iniciar el proceso de adopción responsable.
        </p>

        <div className="contacto-grid">

          <Formulario />

          <div className="mapa-container">

            <h3>Nuestra Ubicación en Salta</h3>

            <p style={{ fontSize: '0.95rem', color: '#666' }}>
              📍 Barrio El Huaico, al lado de la Universidad UPATECO,
              Salta, Argentina.
            </p>

            <iframe
              title="Ubicación de Huellitas de Amor"
              src="https://www.google.com/maps?q=Universidad+Provincial+de+Administracion,+Tecnologia+y+Oficios+UPATECO,+Salta,+Argentina&output=embed"
              width="100%"
              height="350"
              style={{ border: 0, borderRadius: '8px' }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>

          </div>

        </div>

      </main>

      <PiePagina />
    </>
  );
}

export default Contacto;
