import { useId, useState} from "react"

let timeoutId = null

const useSearchForm = (idText, idTechnology, idLocation, idType, idExperienceLevel, onSearch) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const filters = {
      search: formData.get(idText),
      technology: formData.get(idTechnology),
      ubicacion: formData.get(idLocation),
      type: formData.get(idType),
      experienceLevel: formData.get(idExperienceLevel),
    };

    onSearch(filters)
  }

  return handleSubmit
}

export function Form({ onSearch }) {
  const idText = useId()
  const idTechnology = useId()
  const idLocation = useId()
  const idType = useId()
  const idExperienceLevel = useId()
  
  const handleSubmit = useSearchForm(
    idText,
    idTechnology,
    idLocation,
    idType,
    idExperienceLevel,
    onSearch
  );

  const [showTip, setShowTip] = useState(false);

  return (
    <section>
      <h1>Encuentra tu próximo trabajo</h1>
      <p>Explora miles de oportunidades en el sector tecnológico</p>
      <form onChange={handleSubmit} action="search">
        <div>
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
            name={idText}
            id={idText}
            placeholder="Buscar trabajos por empresas o habilidades"
            onFocus={() => setShowTip(true)}
            onBlur={() => setShowTip(false)}
          />
        </div>
        {showTip && (
          <p className="searchTip">
            Puedes buscar por palabras clave, por ejemplo: "React", "Node.js",
            "Remoto"
          </p>
        )}
        <div className="filters">
          <select name={idTechnology} id={idTechnology}>
            <option value="">Tecnología</option>
            <optgroup label="Tecnologías populares">
              <option value="javascript">JavaScript</option>
              <option value="python">Python</option>
              <option value="react">React</option>
              <option value="nodejs">Node.js</option>
            </optgroup>
            <option value="java">Java</option>
            <hr />
            <option value="csharp">C#</option>
            <option value="c">C</option>
            <option value="c++">C++</option>
            <hr />
            <option value="ruby">Ruby</option>
            <option value="php">PHP</option>
          </select>
          <select name={idLocation} id={idLocation}>
            <option value="">Ubicación</option>
            <option value="remote">Remoto</option>
            <option value="onsite">Presencial</option>
            <option value="hybrid">Híbrido</option>
          </select>
          <select name={idType} id={idType}>
            <option value="">Tipo de contrato</option>
            <option value="full-time">Tiempo completo</option>
            <option value="part-time">Medio tiempo</option>
            <option value="contract">Contrato</option>
          </select>
          <select name={idExperienceLevel} id={idExperienceLevel}>
            <option value="">Nivel de experiencia</option>
            <option value="no-experience">Sin experiencia</option>
            <option value="junior">Junior</option>
            <option value="mid-level">Nivel medio</option>
            <option value="senior">Senior</option>
          </select>
        </div>
      </form>
    </section>
  );
}
