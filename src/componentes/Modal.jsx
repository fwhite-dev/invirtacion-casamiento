/* eslint-disable react/prop-types */
// import { X } from 'lucide-react';
import "../styles/modal.css";
export const Modal = ({ cerrarModal }) => {



  return (
    <div className="modal">
      <div className="modal-overlay">
        <button className="modal-btn-cerrar" onClick={cerrarModal} >
          cerrar
        </button>
        <div className="modal-content">
          <h2>Menu</h2>
          <p>Menú 2
            Recepción
            Mini bocaditos frios y calientes
            Primer tiempo
            Peceto y verduras escabechadas sobre colchón de hojas verdes acompañado con diferentes cazuelas
            Segundo tiempo
            Bondiola de cerdo con reducción de malbec y crema de calabazas
            Tercer tiempo
            Vacío de ternera con papas doradas
            Cuarto tiempo
            Matambre con ensaladas varias
            Quinto tiempo
            Brouwni con crema americana y salsa de caramelo
            Mesa dulce y torta
            Trasnoche
            Tacos y fajitas

          </p>
          {/* <h2>Regalos</h2>
          <p>Alias: NombreApellido</p>
          <br />
          <p>CBU: 0000000000000000000</p>
          <br />
          <p>Banco provincia de Cordoba</p>
          <form action="">

            <textarea placeholder='Dejamos tus comentarios y deseos' cols={50} rows={12}></textarea>
          </form> */}
        </div>
      </div>
    </div>
  )
}
