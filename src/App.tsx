import "./App.css";
import { GamePage } from "./presenter/pages/game";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./presenter/pages/home";

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

export default App;
