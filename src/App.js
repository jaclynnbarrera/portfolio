import "./App.css";
import Home from "./containers/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import { Route, NavLink, HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <div className="nav">
        <p>
          <NavLink to="/">Jaclyn Barrera</NavLink>
        </p>
        <p>
          <NavLink to="/work">Work</NavLink>
        </p>
        <p>
          <NavLink to="/about">About</NavLink>
        </p>
      </div>

      <div className="content">
        <Route exact path="/" component={Home} />
        <Route path="/work" component={Projects} />
        <Route path="/about" component={About} />
      </div>
    </HashRouter>
  );
}

export default App;
