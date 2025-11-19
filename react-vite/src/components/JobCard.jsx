function JobCard({ job }) {
  const { title, company, location, description } = job;
  return (
    <article>
      <div>
        <h3 className="job-title">{title}</h3>
        <div>
          <p className="job-company">{company}</p> |{" "}
          <p className="job-location">{location}</p>
        </div>
        <p className="job-description">{description}</p>
      </div>
      <button className="btn-apply">Aplicar</button>
    </article>
  );
}

export default JobCard;
