import { useState } from "react"

export function JobCard({ job }) {
  const [isApplied, setIsApplied] = useState(false)
  const { titulo, empresa, ubicacion, descripcion } = job

  const handleApplyClick = () => {
    setIsApplied(true)
  }

  const buttonClasses = isApplied ? "btn-apply-job is-applied" : "btn-apply-job"
  const buttonText = isApplied ? "Aplicado" : "Aplicar"

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
      <button className={buttonClasses} onClick={handleApplyClick}>{buttonText}</button>
    </article>
  )
}
