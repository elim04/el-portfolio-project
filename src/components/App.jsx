import Landing from "./Landing";
import About from "./About";
import Projects from "./projects/ProjectList";
import Experiments from "./Experiments";
import Footer from "./footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Home from "./pages";

function App() {
  return (
    <Router>
      <div className="App">
        <Home />
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
        <Footer />
      </div>
    </Router>
  );
}

export default App;
