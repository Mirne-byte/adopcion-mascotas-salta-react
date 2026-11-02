
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PiePagina from '../Componentes/PiePagina';

function Inicio() {
  const [perrosAPI, setPerrosAPI] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [errorAPI, setErrorAPI] = useState(false);

  useEffect(() => {
    axios
      .get('https://dog.ceo/api/breeds/image/random/6')
      .then((respuesta) => {
        setPerrosAPI(respuesta.data.message);
        setCargando(false);
      })
      .catch((error) => {
        console.error('Error al consumir la API:', error);
        setErrorAPI(true);
        setCargando(false);
      });
  }, []);

  const obtenerRaza = (urlImagen) => {
    const partes = urlImagen.split('/breeds/');

    if (partes.length < 2) {
      return 'Raza no identificada';
    }

    const raza = partes[1].split('/')[0];

    return raza
      .split('-')
      .reverse()
      .map((palabra) =>
        palabra.charAt(0).toUpperCase() + palabra.slice(1)
      )
      .join(' ');
  };

  return (
    <>
      <main className="contenedor">

        <section className="bienvenida">
          <h2 className="titulo-seccion">
            Bienvenidos a Huellitas de Amor
          </h2>

          <p className="descripcion-seccion">
            Somos una organización dedicada al rescate,
            rehabilitación y adopción responsable de perros
            y gatos. ¡Encuentra a tu nuevo mejor amigo hoy!
          </p>
        </section>

        <section className="seccion-mascotas">

          <h3 className="titulo-mascotas">
            🐾 ¡Amigos que esperan una familia!
          </h3>

          <p className="subtitulo-mascotas">
            Cada huellita merece un hogar lleno de amor.
          </p>

          {cargando && (
            <div className="cargando">
              Cargando fotografías e información de nuestros amigos...
            </div>
          )}

          {errorAPI && (
            <div className="cargando">
              No fue posible obtener los datos de la API.
              Verificá tu conexión a Internet e intentá nuevamente.
            </div>
          )}

          {!cargando && !errorAPI && (
            <div className="grid-tarjetas">

              {perrosAPI.map((urlImagen, index) => (
                <div key={urlImagen} className="tarjeta">

                  <img
                    src={urlImagen}
                    alt={`Perro de raza ${obtenerRaza(urlImagen)}`}
                  />

                  <div className="tarjeta-contenido">

                    <h3>
                      Mascota número {index + 1}
                    </h3>

                    <p>
                      <strong>Raza:</strong>{' '}
                      {obtenerRaza(urlImagen)}
                    </p>

                    <p>
                      <strong>Origen de la información:</strong>{' '}
                      API pública Dog CEO.
                    </p>

                    <p>
                      Cada mascota merece una familia que le
                      brinde cariño y protección.
                    </p>

                    <Link
                      to="/Contacto"
                      className="boton-adoptar"
                    >
                      Conóceme ❤️
                    </Link>

                  </div>
                </div>
              ))}

            </div>
          )}

        </section>

      </main>

      <PiePagina />
    </>
  );
}

export default Inicio;
