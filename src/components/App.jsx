import Nav from "./Nav";
import Typewriter from "typewriter-effect";
import About from "./About";
import Projects from "./Projects";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <div className="introduction">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Hi, I'm Emily and I am a web developer.")
                .start();
            }}
          />
        </div>
      </div>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
