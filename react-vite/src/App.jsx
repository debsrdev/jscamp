import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import JobCard from "./components/JobCard.jsx";

function App() {
  return (
    <>
      <Header />
      <main id="search-results">
        <section>
          <h1>Encuentra tu próximo trabajo</h1>
          <p>Explora miles de oportunidades en el sector tecnológico</p>
          <form action="search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-search"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
              <path d="M21 21l-6 -6" />
            </svg>
            <input
              type="search"
              name=""
              id=""
              placeholder="Buscar trabajos por empresas o habilidades"
            />
          </form>
          <div className="filters">
            <select name="technology" id="technology">
              <option value="">Tecnología</option>
              <option value="frontend">Frontend</option>
              <option value="backend">Backend</option>
              <option value="fullstack">Fullstack</option>
              <option value="devops">DevOps</option>
            </select>
            <select name="location" id="location">
              <option value="">Ubicación</option>
              <option value="remote">Remoto</option>
              <option value="onsite">Presencial</option>
              <option value="hybrid">Híbrido</option>
            </select>
            <select name="type" id="type">
              <option value="">Tipo de contrato</option>
              <option value="full-time">Tiempo completo</option>
              <option value="part-time">Medio tiempo</option>
              <option value="contract">Contrato</option>
            </select>
            <select name="experience" id="experience">
              <option value="">Nivel de experiencia</option>
              <option value="no-experience">Sin experiencia</option>
              <option value="junior">Junior</option>
              <option value="mid-level">Nivel medio</option>
              <option value="senior">Senior</option>
            </select>
          </div>
        </section>
        <section>
          <header>
            <h2>Resultados de búsqueda</h2>
          </header>
          <footer>
            <JobCard
              job={{
                id: 1,
                title: "Frontend Developer",
                company: "TechCorp",
                location: "Madrid, España",
                salary: "€45,000 - €60,000",
                description:
                  "Estamos buscando un desarrollador frontend con experiencia en React.",
                tags: ["React", "TypeScript", "CSS"],
              }}
            />
            <JobCard
              job={{
                id: 2,
                title: "Backend Developer",
                company: "DataStack",
                location: "Barcelona, España",
                salary: "€50,000 - €70,000",
                description:
                  "Desarrollador backend para trabajar con Node.js y bases de datos.",
                tags: ["Node.js", "PostgreSQL", "API"],
              }}
            />
            <JobCard
              job={{
                id: 3,
                title: "Full Stack Developer",
                company: "StartupX",
                location: "Valencia, España",
                salary: "€40,000 - €55,000",
                description:
                  "Buscan un desarrollador salvavidas que pueda hacer de todo.",
                tags: ["React", "Node.js", "MongoDB"],
              }}
            />
          </footer>
          <nav className="pagination">
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M15 6l-6 6l6 6" />
              </svg>
            </a>
            <a href="#" className="active">
              1
            </a>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#">5</a>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 6l6 6l-6 6" />
              </svg>
            </a>
          </nav>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
