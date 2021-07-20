import React from "react";
import Intro from "../components/Intro";
import Nav from "../components/Nav";
import Projects from "../components/Projects";

class HomeContainer extends React.Component {
  render() {
    console.log("home container");
    return (
      <div className="intro">
        <Nav />
        <Intro />
        <Projects />
      </div>
    );
  }
}

export default HomeContainer;
