import {Header} from "./components/Header.jsx";
import {Footer} from "./components/Footer.jsx";
import {Form} from "./components/Form.jsx";
import {JobListings} from "./components/JobListings.jsx";

function App() {
  return (
    <>
      <Header />
      <main id="search-results">
        <Form />
        <JobListings />
      </main>
      <Footer />
    </>
  );
}

export default App;
