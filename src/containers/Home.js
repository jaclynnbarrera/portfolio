import React from "react";
import Intro from "../components/Intro";
import Projects from "../components/Projects";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

class Home extends React.Component {
  render() {
    return (
      <div className="content">
        <Intro />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default Home;
