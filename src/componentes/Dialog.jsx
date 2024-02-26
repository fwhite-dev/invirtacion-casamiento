/* eslint-disable react/prop-types */

export const Dialog = ({ tituloModal, textoModal }) => {



  return (
    <dialog className="dialog">
      <h2>{tituloModal}</h2>
      <p>
        {textoModal}
      </p>
      <button onClick={() => {
        const dialog = document.querySelector("dialog");
        dialog.close();

      }} className="btn-cerrar-modal">Close</button>
    </dialog>
  )
}
