import "animate.css";
import { Card } from "./componentes/Card";
import { ModalMenu } from "./componentes/ModalMenu";
import { useState } from "react";
import { ModalRegalos } from "./componentes/ModalRegalos";


import foto28 from "./assets/img/img28.avif";

import foto31 from "./assets/img/img31.avif";




function App() {
  const [showModalMenu, setShowModalMenu] = useState(false);
  const [showModalRegalos, setShowModalRegalos] = useState(false);
  return (
    <div className="contenedor">
      <h1 className="titulo">💍Nuestra boda <br />
        Flor y Fede 🩷</h1>
      <div className="contenerdor-grid">
        <Card
          className="form-alergias"
          modal={false}
          link={true}
          nombreBoton="Alergias"
          href="https://forms.gle/B4BBKfXYB25gi5Bs6"
        />
        <Card
          className="trafic"
          modal={false}
          link={true}
          nombreBoton="Trafic"
          href="https://forms.gle/pbKqVYpWNWAU8Eu58"
        />
        <Card
          className="ubicacion-iglesia"
          modal={false}
          link={true}
          nombreBoton="Iglesia"
          href="https://maps.app.goo.gl/uPcBgWzuxue41HvB8"
        />
        <Card
          className="ubicacion-salon"
          modal={false}
          link={false}
          iframe={true}
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3396.6763801173943!2d-63.901914923644306!3d-31.642709974158155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDM4JzMzLjgiUyA2M8KwNTMnNTcuNiJX!5e0!3m2!1ses!2sar!4v1708378242355!5m2!1ses!2sar"
        />
        <div className="menu" onClick={() => { setShowModalMenu(true) }}>
        </div>
        {showModalMenu && <ModalMenu cerrarModalMenu={() => { setShowModalMenu(false) }} />}

        <div className="regalos btn-abrir-modal" onMouseEnter={() => {
          const iconoAnimado = document.querySelector(".icono-regalo");
          iconoAnimado.classList.add("animate__animated", "animate__bounce");
        }} onMouseLeave={() => {
          const iconoAnimado = document.querySelector(".icono-regalo");
          iconoAnimado.classList.remove("animate__animated", "animate__bounce");
        }} onClick={() => { setShowModalRegalos(true) }}>
          <div className="icono-regalo">
            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" style={{ fill: "rgba(0, 0, 0, 1)" }}><path d="M5 12H4v8a2 2 0 0 0 2 2h5V12H5zm13 0h-5v10h5a2 2 0 0 0 2-2v-8h-2zm.791-5A4.92 4.92 0 0 0 19 5.5C19 3.57 17.43 2 15.5 2c-1.622 0-2.705 1.482-3.404 3.085C11.407 3.57 10.269 2 8.5 2 6.57 2 5 3.57 5 5.5c0 .596.079 1.089.209 1.5H2v4h9V9h2v2h9V7h-3.209zM7 5.5C7 4.673 7.673 4 8.5 4c.888 0 1.714 1.525 2.198 3H8c-.374 0-1 0-1-1.5zM15.5 4c.827 0 1.5.673 1.5 1.5C17 7 16.374 7 16 7h-2.477c.51-1.576 1.251-3 1.977-3z"></path></svg>
          </div>
          <div className="circulo-fondo-regalos">
          </div>

        </div>
        {showModalRegalos && <ModalRegalos cerrarModalRegalos={() => { setShowModalRegalos(false) }} />}

        <div className="relleno"></div>
        <div className="dress-code">

          <span className="dress-code-text">
            <h4 className="subtitulo">Dress Code</h4>
            <p>
              Elegante Sport
            </p>
          </span>

          <div className="circulo"></div>
        </div>

        <picture className="foto-0">
          <source srcSet={foto28} />
          <img width="340px" height="520px" />
        </picture>
        <picture className="foto-1">
          <source srcSet={foto31} />
          <img width="340px" height="520px" loading="lazy" />
        </picture>
        <picture className="foto-2" >
          <source srcSet={foto31} />
          <img width="160px" height="340px" loading="lazy" alt="Foto de los novios" />
        </picture>

      </div >
    </div>
  );

}
export default App;
