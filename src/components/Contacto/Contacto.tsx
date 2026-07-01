import { useState } from 'react';
import './Contacto.scss';


export const Contacto = () => {
  // Estado para capturar los datos del formulario
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  // Función para manejar el cambio en los inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Función para procesar el envío del formulario
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Datos enviados de la florería:', formData);
    alert(`¡Gracias ${formData.nombre}! Recibimos tu mensaje.`);
    // Aquí limpiarías el formulario
    setFormData({ nombre: '', email: '', mensaje: '' });
  };

  return (
    <div className="contacto-seccion">
      <h2>Contáctanos</h2>
      <p>Envíanos tus dudas sobre arreglos florales o pedidos especiales.</p>
      
      <form onSubmit={handleSubmit} className="contacto-formulario">
        <div className="campo">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>

        <div className="campo">
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="campo">
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea
            id="mensaje"
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn-enviar">Enviar Mensaje</button>
      </form>
    </div>
  );
};
