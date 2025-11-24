import { useState, useEffect } from "react";
import {JobCard} from "./JobCard.jsx";
import {Pagination} from "./Pagination.jsx";

const RESULTS_PER_PAGE = 5;

export function JobListings({ jobs }) {
    const [currentPage, setCurrentPage] = useState(1)
    const totalPages = Math.ceil(jobs.length / RESULTS_PER_PAGE)

    useEffect(() => {
      setCurrentPage(1)
    }, [jobs])

    const pagedResults = jobs.slice(
        (currentPage - 1) * RESULTS_PER_PAGE,
        currentPage * RESULTS_PER_PAGE
    )

    const handlePageChange = (page) => {
        console.log("Cambiando a página: ", page)
        setCurrentPage(page)
    }
    return (
        <section>
          <header>
            <h2>Resultados de búsqueda</h2>
          </header>
          <footer>
            {pagedResults.map((job) => (
                <JobCard key={job.id} job={job} />
            ))}
          </footer>
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </section>
    )
}