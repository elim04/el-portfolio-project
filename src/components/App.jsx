import Landing from "./Landing";
import About from "./About";
import Projects from "./Projects";
import Experiments from "./Experiments";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Home from "./pages";

function App() {
  return (
    <Router>
      <div className="App">
        <Home />
      </div>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/experiments">
          <Experiments />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
