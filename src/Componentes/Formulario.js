
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function Formulario() {
  const form = useRef();
  const [enviando, setEnviando] = useState(false);
  const [resultado, setResultado] = useState('');

  const ampliarMensaje = (e) => {
    e.target.style.height = 'auto';
    e.target.style.height = e.target.scrollHeight + 'px';
  };

  const sendEmail = (e) => {
    e.preventDefault();

    setEnviando(true);
    setResultado('');

    emailjs
      .sendForm(
        'service_vj6ej3n',
        'template_sqyb62t',
        form.current,
        'XytlLTyBAJIrmdZ0S'
      )
      .then(() => {
        setResultado('¡Mensaje enviado correctamente!');
        form.current.reset();

        const mensaje = form.current.querySelector('textarea');
        mensaje.style.height = '120px';
      })
      .catch((error) => {
        console.error('Error completo de EmailJS:', error);

        setResultado(
          'No se pudo enviar el mensaje. Error: ' +
          (error.text || error.message || 'Error desconocido')
        );
      })
      .finally(() => {
        setEnviando(false);
      });
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="form-contacto"
    >
      <h3>Formulario de Adopción y Contacto</h3>

      <div className="form-grupo">
        <label htmlFor="username">Nombre Completo</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Escribe tu nombre completo"
          required
        />
      </div>

      <div className="form-grupo">
        <label htmlFor="email">Correo Electrónico</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="ejemplo@correo.com"
          required
        />
      </div>

      <div className="form-grupo">
        <label htmlFor="message">
          Mascota de Interés / Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          placeholder="Indica qué mascota deseas adoptar o escribe tu consulta..."
          onChange={ampliarMensaje}
          required
        />
      </div>

      <input
        type="submit"
        value={enviando ? 'Enviando...' : 'Enviar Solicitud'}
        className="btn-submit"
        disabled={enviando}
      />

      {resultado && (
        <p role="status">{resultado}</p>
      )}
    </form>
  );
}

export default Formulario;
