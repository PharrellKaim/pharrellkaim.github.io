import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { useParams } from "react-router-dom";

import Navigationbar from "./components/Navigationbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Impressum from "./components/Impressum";
import Blog from "./components/Blog";
import BlogPost from "./components/BlogPost"
import BlogPreview from "./components/BlogPreview";

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
                <BlogPreview />
                <Projects />
                <Footer />
              </>
            }
          />

          {/* Blog Übersicht */}
          <Route path="/blog" element={<Blog />} />

          {/* Einzelner Blogpost */}
          <Route path="/blog/:id" element={<BlogPost />} />

          {/* Impressum-Seite */}
          <Route path="/impressum" element={<Impressum />} />
        </Routes>
      </div>
  </Router>
  );
}

export default App;
