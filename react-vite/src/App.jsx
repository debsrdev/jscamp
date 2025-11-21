import {Header} from "./components/Header.jsx";
import {Footer} from "./components/Footer.jsx";
import {Form} from "./components/Form.jsx";
import {JobListings} from "./components/JobListings.jsx";

import jobsData from "./data.json";

function App() {
  return (
    <>
      <Header />
      <main id="search-results">
        <Form />
        <JobListings jobs={jobsData}/>
      </main>
      <Footer />
    </>
  );
}

export default App;
