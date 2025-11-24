import { useState } from "react";
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { Form } from "./components/Form.jsx";
import { JobListings } from "./components/JobListings.jsx";

import jobsData from "./data.json";

function App() {
  const [textToFilter, setTextToFilter] = useState("");
  const [filters, setFilters] = useState({
    technology: "",
    ubicacion: "",
    type: "",
    experienceLevel: "",
  });

  const jobsFilteredByFilters = jobsData.filter((job) => {
    return (
      filters.technology === "" ||
      job.data.technology.toLowerCase() === filters.technology.toLowerCase()
    )
  })

  const jobsWithTextFilter =
    textToFilter === ""
      ? jobsFilteredByFilters
      : jobsFilteredByFilters.filter((job) => {
          return job.titulo.toLowerCase().includes(textToFilter.toLowerCase());
        });

  const handleSearch = (filters) => {
    setFilters(filters);
  };

  const handleTextFilter = (newTextToFilter) => {
    setTextToFilter(newTextToFilter);
  };

  return (
    <>
      <Header />
      <main id="search-results">
        <Form onSearch={handleSearch} onTextFilter={handleTextFilter} />
        <JobListings jobs={jobsWithTextFilter} />
      </main>
      <Footer />
    </>
  );
}

export default App;
