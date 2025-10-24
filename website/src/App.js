import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigationbar from "./components/Navigationbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Impressum from "./components/Impressum";

function App() {
  return (
    <Router>
      <div className="bg-background min-h-screen">
        <header className="sticky top-0 bg-background z-50">
          <Navigationbar />
        </header>

        <Routes>
          {/* Startseite */}
          <Route
            path="/"
            element={
              <>
                <About />
                <Experience />
                <Projects />
                <Footer />
              </>
            }
          />

          {/* Impressum-Seite */}
          <Route path="/impressum" element={<Impressum />} />
        </Routes>
      </div>
  </Router>
  );
}

export default App;
