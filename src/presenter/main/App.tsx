import "./App.css";
import { GamePage } from "../pages/game";
import Amplify from "aws-amplify";
import awsconfig from "../../infra/aws-config/aws-exports";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "../pages/home";
import ReactDOM from "react-dom";
import React from "react";

function App() {
  Amplify.configure(awsconfig);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/game/:id">
            <GamePage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export function initializeApp() {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  );
}
