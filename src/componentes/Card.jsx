import { Boton } from "./Boton"

// eslint-disable-next-line react/prop-types
export const Card = ({ modal, href, nombreBoton, className, iframe, src }) => {

  const iframeStyle = { borderRadius: "32px", border: "none", opacity: "0.9" }

  const imgSrc = src
  console.log(imgSrc)

  return (
    < div className={className} >
      {
        href ? (
          // Crea el boton con el link
          <Boton href={href} nombreBoton={nombreBoton}>
          </Boton>
        ) : iframe ? (
          <iframe
            src={src}
            width="100%"
            height="100%"
            style={iframeStyle}

            loading="lazy"
          ></iframe>
        ) : modal ? (
          <Boton nombreBoton={nombreBoton}></Boton>
        ) : src ? (

          <img src={'../assets/img/foto3.jpg'} alt="imagen" />
        ) : (
          <div className="text">{nombreBoton}</div>
        )
      }
    </div >
  )
}
