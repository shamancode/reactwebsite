import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/";
import SigninPage from "./pages/singin";
import ImportCSVPage from "./pages/importcsv";
import "bootstrap/dist/css/bootstrap.min.css";
import { AddUser } from "./components/AddUser";
import { EditUser } from "./components/EditUser";
import { GlobalProvider } from "./context/GlobalState";
import { Manager } from "./components/Manager";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/signin" component={SigninPage} exact />
          <Route path="/importcsv" component={ImportCSVPage} exact />

          <Route path="/projects" component={Manager} exact />
          <Route path="/add" component={AddUser} exact />
          <Route path="/edit/:id" component={EditUser} exact />
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
