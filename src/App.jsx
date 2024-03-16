import "animate.css";
import { Card } from "./componentes/Card";
import { ModalMenu } from "./componentes/ModalMenu";
import { useEffect, useState } from "react";
import { ModalRegalos } from "./componentes/ModalRegalos";






import foto1 from "./assets/img/foto1.avif";
import foto2 from "./assets/img/foto2.avif";
import foto3 from "./assets/img/foto3.avif";
import foto4 from "./assets/img/foto4.avif";
import foto5 from "./assets/img/foto5.avif";
import foto6 from "./assets/img/foto6.avif";
import foto7 from "./assets/img/foto7.avif";
import foto8 from "./assets/img/foto8.avif";
import foto9 from "./assets/img/foto9.avif";
import foto10 from "./assets/img/foto10.avif";
import foto11 from "./assets/img/foto11.avif";
import foto12 from "./assets/img/foto12.avif";
import foto13 from "./assets/img/foto13.avif";
import foto14 from "./assets/img/foto14.avif";


function App() {
  const [showModalMenu, setShowModalMenu] = useState(false);
  const [showModalRegalos, setShowModalRegalos] = useState(false);


  useEffect(() => {
    let divMenu = document.querySelector(".menu");
    const iconoMenu = document.querySelector(".lucide-utensils");
    function verificarVisibilidadMenu(e) {
      if (e[0].isIntersecting) {
        iconoMenu.classList.add("animate__animated", "animate__bounce");
      } else {
        iconoMenu.classList.remove("animate__animated", "animate__bounce");
      }
    }
    let observerMenu = new IntersectionObserver(verificarVisibilidadMenu, {
      threshold: 0.65
    })

    let divRegalo = document.querySelector(".regalos");
    const iconoRegalo = document.querySelector(".icono-regalo");
    function visibilidadDivRegalo(e) {
      if (e[0].isIntersecting) {
        iconoRegalo.classList.add("animate__animated", "animate__bounce");
      } else {
        iconoRegalo.classList.remove("animate__animated", "animate__bounce");
      }
    }
    let observerRegalos = new IntersectionObserver(visibilidadDivRegalo, {
      threshold: 0.7
    })

    observerRegalos.observe(divRegalo);
    observerMenu.observe(divMenu);

    const fotosOcultas = document.querySelectorAll(".hidden");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("mostrar", entry.isIntersecting);
      });
    })
    fotosOcultas.forEach((foto) => observer.observe(foto));

  }, []
  );



  return (
    <div className="contenedor">
      <h1 className="titulo"> 🩷 Nuestra Boda <br />
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
        <div className="menu"
          onClick={() => { setShowModalMenu(true) }}  >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-utensils">
            <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
            <path d="M7 2v20" />
            <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
          </svg>
        </div>
        {showModalMenu && <ModalMenu cerrarModalMenu={() => { setShowModalMenu(false) }} />}


        <div className="regalos btn-abrir-modal"
          onClick={() => { setShowModalRegalos(true) }}>
          <div className="icono-regalo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 24 24"
              style={{ fill: "rgba(0, 20, 39, 1)" }}>
              <path d="M5 12H4v8a2 2 0 0 0 2 2h5V12H5zm13 0h-5v10h5a2 2 0 0 0 2-2v-8h-2zm.791-5A4.92 4.92 0 0 0 19 5.5C19 3.57 17.43 2 15.5 2c-1.622 0-2.705 1.482-3.404 3.085C11.407 3.57 10.269 2 8.5 2 6.57 2 5 3.57 5 5.5c0 .596.079 1.089.209 1.5H2v4h9V9h2v2h9V7h-3.209zM7 5.5C7 4.673 7.673 4 8.5 4c.888 0 1.714 1.525 2.198 3H8c-.374 0-1 0-1-1.5zM15.5 4c.827 0 1.5.673 1.5 1.5C17 7 16.374 7 16 7h-2.477c.51-1.576 1.251-3 1.977-3z">
              </path>
            </svg>
          </div>
          <div className="circulo-fondo-regalos">
          </div>

        </div>
        {showModalRegalos && <ModalRegalos cerrarModalRegalos={() => { setShowModalRegalos(false) }} />}

        <div className="relleno">
          <h2>Ceremonia</h2>
          <p> Viernes 5 Abril 19:30hs</p>
          <h2>Fiesta</h2>
          <p>Viernes 5 Abril 21:30hs</p>
        </div>
        <div className="dress-code">

          <span className="dress-code-text">
            <h4>Dress Code</h4>
            <p>
              Elegante 🎩
            </p>
          </span>

          <div className="circulo"></div>
        </div>

        <picture className="hidden foto-1">
          <source srcSet={foto1} />
          <img width="340px" height="520px" />
        </picture>
        <picture className="hidden foto-2">
          <source srcSet={foto2} />
          <img width="340px" height="520px" loading="lazy" />
        </picture>
        <picture className="hidden foto-3">
          <source srcSet={foto3} />
          <img width="340px" height="520px" loading="lazy" />
        </picture>
        <picture className="hidden foto-4">
          <source srcSet={foto4} />
          <img width="340px" height="520px" loading="lazy" />
        </picture>
        <picture className="hidden foto-5">
          <source srcSet={foto5} />
          <img width="340px" height="520px" loading="lazy" />
        </picture>
        <picture className="hidden foto-6">
          <source srcSet={foto6} />
          <img width="340px" height="520px" loading="lazy" />
        </picture>
        <picture className="hidden foto-7">
          <source srcSet={foto7} />
          <img width="340px" height="520px" loading="lazy" />
        </picture>
        <picture className="hidden foto-8">
          <source srcSet={foto8} />
          <img width="340px" height="520px" loading="lazy" />
        </picture>
        <picture className="hidden foto-9">
          <source srcSet={foto9} />
          <img width="340px" height="520px" loading="lazy" />
        </picture>
        <picture className="hidden foto-10">
          <source srcSet={foto10} />
          <img width="340px" height="520px" loading="lazy" />
        </picture>
        <picture className="hidden foto-11">
          <source srcSet={foto11} />
          <img width="340px" height="520px" loading="lazy" />
        </picture>
        <picture className="hidden foto-12">
          <source srcSet={foto12} />
          <img width="340px" height="520px" loading="lazy" />
        </picture>
        <picture className="hidden foto-13">
          <source srcSet={foto13} />
          <img width="340px" height="520px" loading="lazy" />
        </picture>
        <picture className="hidden foto-14">
          <source srcSet={foto14} />
          <img width="340px" height="520px" loading="lazy" />
        </picture>
      </div >
      <footer>
        <p className="copy">&copy; 2024 Federico Blanco. Todos los derechos reservados. Para consultas, contáctenos en <a href="mailto:fwhite@gmail.com"><strong>
          Click Aqui
        </strong></a>.</p>
      </footer>
    </div>
  );

}
export default App;
