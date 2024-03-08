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
                    <h2 className='regalos-titulo'>Regalos</h2>
                    <p className='regalos-alias'>Alias: florenciasoco</p>
                    <br />
                    <p className='regalos-numero'>CBU:
                        <span>
                            0000003100099953207963
                        </span>
                    </p>
                    <br />

                </div>
            </div>
        </div>
    )
}
