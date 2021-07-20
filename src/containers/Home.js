import React from "react";
import Intro from "../components/Intro";

class HomeContainer extends React.Component {
  render() {
    console.log("home container");
    return (
      <div className="intro">
        <Intro />
      </div>
    );
  }
}

export default HomeContainer;
