import React from "react";
import Intro from "../components/Intro";
import Projects from "../components/Projects";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { Route, NavLink, HashRouter } from "react-router-dom";

class Home extends React.Component {
  render() {
    console.log("home container");
    return (
      <HashRouter>
        {/* <Nav /> */}
        <div className="nav">
          <p>Jaclyn Barrera</p>
          <p>Work</p>
          <p>About</p>
        </div>

        <div className="content">
          <Intro />
          <Projects />
          <About />
          <Contact />
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default Home;
