import { useState, useEffect } from "react";
import { JobCard } from "./JobCard.jsx";
import { Pagination } from "./Pagination.jsx";


export function JobListings({ 
  jobs, total, loading, currentPage, totalPages, onPageChange }) {

  useEffect(() => {
    document.title = `Resultados: ${total} - Página ${currentPage} - DevJobs`;
  }, [currentPage, total]);

  const handlePageChange = (page) => {
    console.log("Cambiando a página: ", page);
    onPageChange(page);
  };
  return (
    <>
      {loading ? (
        <p>Cargando empleos...</p>
      ) : jobs.length === 0 ? (
        <p>No se encontraron empleos.</p>
      ) : (
        <section className="search-results-section">
          <header>
            <h2>Resultados de búsqueda</h2>
          </header>
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
