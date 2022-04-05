import "./App.css";
import Assemblyroom from "./Components/Assemblyroom";
import Clocking from "./Components/Clocking";
import ColdStoreLog from "./Components/ColdStoreLog";
import Footer from "./Components/Footer";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="wrapper">
          <div className="title-header container">
            <h1></h1>
          </div>
          <div className="contained">
            <Link to="/" className="container item assembly">
              Assembly
            </Link>
            <Link to="/clockin" className="container item clocking">
              Clocking
            </Link>
            <Link to="/coldstorage" className="container item cold">
              Cold-Store
            </Link>
          </div>
          <div className="container main">
            <Switch>
              <Route path="/coldstorage">
                <ColdStoreLog />
              </Route>
              <Route path="/clockin">
                <Clocking />
              </Route>
              <Route path="/" exact>
                <Assemblyroom />
              </Route>
            </Switch>
          </div>
          <div className="footer">
            <Footer />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
