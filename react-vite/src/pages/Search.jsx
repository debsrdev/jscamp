import { useEffect, useState } from "react";
import { Form } from "../components/Form.jsx";
import { JobListings } from "../components/JobListings.jsx";

const RESULTS_PER_PAGE = 5;

export function SearchPage() {
  const [filters, setFilters] = useState({
    search: "",
    technology: "",
    ubicacion: "",
    experienceLevel: "",
  });

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const hasActiveFilters = Object.values(filters).some((value) => value !== "");

  const handleClearFilters = () => {
    setFilters({
      search: "",
      technology: "",
      ubicacion: "",
      experienceLevel: "",
    });
  };

  useEffect(() => {
    async function fetchJobs() {
      try {
        setLoading(true);

        const params = new URLSearchParams();
        if (filters.search) params.append("text", filters.search);
        if (filters.technology) params.append("technology", filters.technology);
        if (filters.ubicacion) params.append("type", filters.ubicacion);
        if (filters.experienceLevel)
          params.append("level", filters.experienceLevel);

        const offset = (currentPage - 1) * RESULTS_PER_PAGE;
        params.append("limit", RESULTS_PER_PAGE);
        params.append("offset", offset);

        const queryParams = params.toString();

        //await new Promise((resolve) => setTimeout(resolve, 5000))

        const res = await fetch(
          `https://jscamp-api.vercel.app/api/jobs?${queryParams}`
        );
        const json = await res.json();
        setJobs(json.data);
        setTotal(json.total);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchJobs();
  }, [filters, currentPage]);

  const totalPages = Math.ceil(total / RESULTS_PER_PAGE);

  const handleSearch = (filters) => {
    setFilters(filters);
    setCurrentPage(1);
  };

  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <main id="search-results">
        <Form onSearch={handleSearch} />
        <div style={{ maxWidth: "42rem", width: "100%", margin: "0 auto" }}>
          <button
            style={{ display: hasActiveFilters ? "block" : "none", width: "100%" }}
            onClick={handleClearFilters}
          >
            Limpiar filtros
          </button>
        </div>
        <JobListings
          jobs={jobs}
          total={total}
          loading={loading}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handleChangePage}
        />
      </main>
    </>
  );
}
