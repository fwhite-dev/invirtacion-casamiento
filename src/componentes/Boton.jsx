import "../styles/btn.css";
// eslint-disable-next-line react/prop-types
export const Boton = ({ nombreBoton, href }) => {
  return (
    <div className="contenedor-btn">

      {nombreBoton === "Iglesia" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-map-pin"
        >
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-clipboard-type"
        >
          <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
          <path d="M9 12v-1h6v1" />
          <path d="M11 17h2" />
          <path d="M12 11v6" />
        </svg>
      )}



      <a className="btn btn-abrir-modal" target="_blank" href={href}>
        <svg
          className="icono"
          width="16"
          height="16"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.76974 1.24124L1.24121 8.76977"
            stroke="#001427"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.48438 1.20325L8.76964 1.24024L8.80762 6.5255"
            stroke="#001427"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="texto-oculto">{nombreBoton}</div>
      </a>
    </div>
  );
};
