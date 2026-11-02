
import React from 'react';
import PiePagina from '../Componentes/PiePagina';

const mascotas = [
  {
    id: 1,
    nombre: 'Toby',
    especie: 'Perro',
    tamano: 'Mediano',
    edad: '2 años',
    personalidad: 'Juguetón, alegre y cariñoso. Le encanta compartir momentos con las personas.',
    foto: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=700'
  },
  {
    id: 2,
    nombre: 'Luna',
    especie: 'Gato',
    tamano: 'Pequeño',
    edad: '8 meses',
    personalidad: 'Curiosa, tranquila y compañera. Disfruta de los espacios cómodos y los mimos.',
    foto: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=700'
  },
  {
    id: 3,
    nombre: 'Max',
    especie: 'Perro',
    tamano: 'Grande',
    edad: '3 años',
    personalidad: 'Activo, inteligente y fiel. Ideal para compartir paseos y juegos.',
    foto: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=700'
  },
  {
    id: 4,
    nombre: 'Mia',
    especie: 'Gato',
    tamano: 'Pequeño',
    edad: '1 año',
    personalidad: 'Dulce y sociable. Le gusta descansar y recibir cariño.',
    foto: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=700'
  },
  {
    id: 5,
    nombre: 'Rocky',
    especie: 'Perro',
    tamano: 'Grande',
    edad: '5 años',
    personalidad: 'Noble, protector y compañero. Disfruta de la tranquilidad.',
    foto: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=700'
  },
  {
    id: 6,
    nombre: 'Nina',
    especie: 'Gato',
    tamano: 'Pequeño',
    edad: '4 meses',
    personalidad: 'Juguetona, curiosa y muy cariñosa. Busca una familia que la cuide.',
    foto: 'https://images.unsplash.com/photo-1511044568932-338cba0ad803?w=700'
  }
];

function Servicios() {
  return (
    <div className="catalogo-huellitas">

      <style>{`
        .catalogo-huellitas {
          max-width: 1200px;
          margin: 0 auto;
          padding: 35px 20px;
          color: #333;
          font-family: Arial, sans-serif;
        }

        .catalogo-encabezado {
          text-align: center;
          margin-bottom: 35px;
        }

        .catalogo-encabezado h1 {
          color: #684b38;
          font-size: 32px;
          margin-bottom: 12px;
        }

        .catalogo-descripcion {
          color: #666;
          font-size: 16px;
          line-height: 1.6;
        }

        .mascotas-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }

        .mascota-card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 3px 12px rgba(0,0,0,0.12);
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease;
        }

        .mascota-card:hover {
          transform: translateY(-5px);
        }

        .foto-mascota {
          width: 100%;
          height: 250px;
          object-fit: cover;
          display: block;
          background: #f1eee9;
        }

        .foto-no-disponible {
          width: 100%;
          height: 250px;
          display: none;
          align-items: center;
          justify-content: center;
          background: #f1eee9;
          color: #684b38;
        }

        .mascota-contenido {
          padding: 20px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .mascota-contenido h2 {
          color: #684b38;
          margin: 0 0 10px;
          font-size: 23px;
        }

        .datos {
          color: #9b7154;
          font-weight: bold;
          margin: 0 0 12px;
        }

        .personalidad {
          line-height: 1.5;
          flex: 1;
        }

        .boton-adoptar {
          display: block;
          text-align: center;
          text-decoration: none;
          color: white;
          background: #b87951;
          padding: 12px;
          border-radius: 8px;
          font-weight: bold;
          margin-top: 15px;
        }

        .boton-adoptar:hover {
          background: #8e5838;
        }

        @media (max-width: 850px) {
          .mascotas-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 550px) {
          .mascotas-grid {
            grid-template-columns: 1fr;
          }

          .catalogo-encabezado h1 {
            font-size: 25px;
          }
        }
      `}</style>

      <div className="catalogo-encabezado">
        <h1>Encontrá tu nueva compañía</h1>

        <p className="catalogo-descripcion">
          Conocé a nuestros perros y gatos que esperan una familia.
          ¡Uno de ellos puede ser tu nuevo mejor amigo!
        </p>
      </div>

      <div className="mascotas-grid">

        {mascotas.map((mascota) => (

          <article className="mascota-card" key={mascota.id}>

            <img
              className="foto-mascota"
              src={mascota.foto}
              alt={`Fotografía de ${mascota.nombre}`}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling.style.display = 'flex';
              }}
            />

            <div className="foto-no-disponible">
              Fotografía no disponible
            </div>

            <div className="mascota-contenido">

              <h2>{mascota.nombre}</h2>

              <p className="datos">
                {mascota.especie} · {mascota.tamano}
              </p>

              <p>
                <strong>Edad:</strong> {mascota.edad}
              </p>

              <p className="personalidad">
                {mascota.personalidad}
              </p>

              <a
                className="boton-adoptar"
                href="/Contacto"
              >
                Quiero adoptar a {mascota.nombre} ❤️
              </a>

            </div>

          </article>

        ))}

      </div>

      <PiePagina />

    </div>
  );
}

export default Servicios;
