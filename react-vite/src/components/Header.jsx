import { useState, useEffect } from "react";
// import { Link } from "./Link";
import { Link } from "react-router-dom";

export function Header() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Handler que se ejecuta cuando la ventana cambia de tamaño
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      //console.log("Ancho de la ventana: ", window.innerWidth);
    };

    // Suscribirse al evento resize
    window.addEventListener("resize", handleResize);

    // Función de limpieza: desuscribirse cuando el componente se desmonte
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header>
      <Link to="/">
        <h1 style={{ color: "white" }}>
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
          DevJobs
        </h1>
      </Link>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/search">Empleos</Link>
        <Link to="">Empresas</Link>
        <Link to="">Salarios</Link>
      </nav>
      <div>
        <Link to="">Subir CV</Link>
      </div>
    </header>
  );
}
