import { Boton } from "./Boton"

// eslint-disable-next-line react/prop-types
export const Card = ({ foto, modal, href, nombreBoton, className, iframe, src }) => {

  const iframeStyle = { borderRadius: "32px", border: "none", opacity: "0.9" }

  return (
    <div className={className}>
      {
        href ? (
          // Crea el boton con el link
          <>
            <Boton href={href} nombreBoton={nombreBoton}>
            </Boton>
          </>
        ) : iframe ? (
          <iframe
            src={src}
            width="100%"
            height="100%"
            style={iframeStyle}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        ) : modal ? (
          <Boton nombreBoton={nombreBoton}></Boton>
        ) : foto ? (
          <img src={src} style={{ width: "100%" }} alt="foto" />

        ) : (
          <div className="text">{nombreBoton}</div>
        )
      }
    </div >
  )
}
