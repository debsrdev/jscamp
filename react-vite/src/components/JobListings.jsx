import { useState, useEffect } from "react";
import { JobCard } from "./JobCard.jsx";
import { Pagination } from "./Pagination.jsx";


export function JobListings({ 
  jobs, total, loading, currentPage, totalPages, onPageChange }) {

  const title = loading 
  ? `Cargando...` 
  : `Resultados: ${total} - Página ${currentPage} - DevJobs`;

  const handlePageChange = (page) => {
    onPageChange(page);
  };
  return (
    <>
      <title>{title}</title>
      {loading ? (
        <p>Cargando empleos...</p>
      ) : jobs.length === 0 ? (
        <p>No se encontraron empleos.</p>
      ) : (
        <section className="search-results-section">
          <footer>
            {jobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </footer>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </section>
      )}
    </>
  );
}
