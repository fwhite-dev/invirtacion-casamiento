/* eslint-disable react/prop-types */
import { X } from 'lucide-react';
import "../styles/modal.css";
export const ModalMenu = ({ cerrarModalMenu }) => {
  return (
    <div className="modal">
      <div className="modal-overlay">
        <button className="modal-btn-cerrar" onClick={cerrarModalMenu} >
          <X size={32} />
        </button>
        <div className="modal-content">
          <h2>Menu</h2>
          <p>
            <h4>🍹Recepción🍹</h4>
            🥪Mini bocaditos fríos y calientes🥟
            <h4>Primer tiempo</h4>
            🥩Peceto y verduras escabechadas, acompañado con diferentes cazuelas🥗
            <h4>Segundo tiempo</h4>
            🍷Bondiola de cerdo con reducción de malbec y crema de calabazas🥩
            <h4>
              Tercer tiempo
            </h4>
            🍖Vacío de ternera con papas doradas🍟
            <h4>
              Cuarto tiempo
            </h4>
            🍎Matambre con ensaladas varias🍖
            <h4>
              Quinto tiempo
            </h4>
            🥞Brouwni con crema americana y salsa de caramelo
            <br />
            🧁Mesa dulce
            <br />
            🍰Torta
            <h4>
              Trasnoche
            </h4>
            🌮Tacos y fajitas🍺
          </p>
        </div>
      </div>
    </div>
  )
}
