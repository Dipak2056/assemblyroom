import "./App.css";
import Assemblyroom from "./Components/Assemblyroom";
import Clocking from "./Components/Clocking";
import ColdStoreLog from "./Components/ColdStoreLog";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="title-header container">
          <h1></h1>
        </div>
        <div className="contained">
          <div className="container item assembly">Assembly</div>
          <div className="container item clocking">Clocking</div>
          <div className="container item cold">Cold-Store</div>
        </div>
        <div className="container main">
          <Assemblyroom />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
