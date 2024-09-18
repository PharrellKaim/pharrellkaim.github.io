import Navigationbar from "./components/Navigationbar";
import About from "./components/About";
function App() {
  return (
    <div className="bg-background">
        <div>
            <Navigationbar></Navigationbar>
            <About></About>
        </div>
    </div>
  );
}

export default App;
