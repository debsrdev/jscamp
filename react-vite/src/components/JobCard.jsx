export function JobCard({ job }) {
  const { titulo, empresa, ubicacion, descripcion } = job;
  return (
    <article>
      <div>
        <h3 className="job-title">{titulo}</h3>
        <div>
          <p className="job-company">{empresa}</p> |{" "}
          <p className="job-location">{ubicacion}</p>
        </div>
        <p className="job-description">{descripcion}</p>
      </div>
      <button className="btn-apply">Aplicar</button>
    </article>
  )
}
