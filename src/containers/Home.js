import React from "react";
import Intro from "../components/Intro";
import Nav from "../components/Nav";

class HomeContainer extends React.Component {
  render() {
    console.log("home container");
    return (
      <div className="intro">
        <Nav />
        <Intro />
      </div>
    );
  }
}

export default HomeContainer;
