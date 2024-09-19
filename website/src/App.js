import Navigationbar from "./components/Navigationbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-background">
        <div>
            <header className="sticky top-0 bg-background z-50">
                <Navigationbar></Navigationbar>
            </header>
            <About></About>
            <Experience></Experience>
            <Projects></Projects>
            <Footer></Footer>
        </div>
    </div>
  );
}

export default App;
