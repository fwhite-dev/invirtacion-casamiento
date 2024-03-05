import "../styles/btn.css";
// eslint-disable-next-line react/prop-types
export const Boton = ({ nombreBoton, href }) => {
  return (
    <div className="contenedor-btn">
      <a className="btn btn-abrir-modal" target="_blank" href={href}>
        <svg className="icono"
          width="16"
          height="16"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.76974 1.24124L1.24121 8.76977"
            stroke="#000"
            strokeWidth="0.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.48438 1.20325L8.76964 1.24024L8.80762 6.5255"
            stroke="#000"
            strokeWidth="0.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="text">{nombreBoton}</div>
      </a>
    </div>
  );
};
