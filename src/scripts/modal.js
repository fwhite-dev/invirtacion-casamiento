const btnAbrirModal = document.querySelector(".btn-abrir-modal");
const btnCerrarModal = document.querySelector(".btn-cerrar-modal");
const modal = document.querySelector(".dialog");

btnAbrirModal.addEventListener("click", () => {
  modal.showModal();
});

btnCerrarModal.addEventListener("click", () => {
  modal.close();
});

export default modal;
