/* eslint-disable react/prop-types */
import { X } from 'lucide-react';
import "../styles/modal.css";
export const ModalRegalos = ({ cerrarModalRegalos }) => {
    return (
        <div className="modal">
            <div className="modal-overlay">
                <button className="modal-btn-cerrar" onClick={cerrarModalRegalos} >
                    <X size={32} />
                </button>
                <div className="modal-content">

                    <h2>Regalos</h2>
                    <p>Alias: florenciasoco</p>
                    <br />
                    <p>CBU: 0000000000000000000</p>
                    <br />
                    <p>Banco provincia de Cordoba</p>

                </div>
            </div>
        </div>
    )
}
