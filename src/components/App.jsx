import { useState } from "react";

//components
import Landing from "./Landing";
import About from "./About";
import Projects from "./projects/ProjectList";
import Experiments from "./Experiments";
import Footer from "./footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Home from "./pages";

//for light/dark mode
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../theme/theme";
import { GlobalStyles } from "../theme/global";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <Router>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
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
          <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
