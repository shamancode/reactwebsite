import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import SigninPage from "./pages/singin";
import ImportCSVPage from "./pages/importcsv";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SigninPage} exact />
        <Route path="/importcsv" component={ImportCSVPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
