import React from "react";
import Intro from "../components/Intro";
import Nav from "../components/Nav";
import Projects from "../components/Projects";
import About from "../components/About";
import Contact from "../components/Contact";

class Home extends React.Component {
  render() {
    console.log("home container");
    return (
      <div>
        <Nav />
        <Intro />
        <Projects />
        <About />
        <Contact />
      </div>
    );
  }
}

export default Home;
