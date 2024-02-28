/* eslint-disable react/prop-types */
// import { X } from 'lucide-react';
import "../styles/modal.css";
export const Modal = ({ cerrarModal }) => {



  return (
    <div className="modal">
      <div className="modal-overlay">
        <button className="modal-btn-cerrar" onClick={cerrarModal} >
          {/* <X /> */}cerrar
          {
            console.log("first")
          }
        </button>
        <div className="modal-content">
          <h2>Regalos</h2>
          <p>Alias: NombreApellido</p>
          <br />
          <p>CBU: 0000000000000000000</p>
          <br />
          <p>Banco provincia de Cordoba</p>
          <form action="">

            <textarea placeholder='Dejamos tus comentarios y deseos' cols={50} rows={12}></textarea>
            {/* <button >Enviar</button> */}
          </form>
        </div>
      </div>
    </div>
  )
}
