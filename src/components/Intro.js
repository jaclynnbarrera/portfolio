import React from "react";

const Intro = () => {
  console.log("introooo");
  return (
    <div className="intro">
      <p>
        Hola, my name is <span className="name">Jaclyn</span>. I'm a full-stack
        developer based in <span className="city">New York City</span>.
      </p>
      <img
        src="https://i.ibb.co/frZXzKt/globe.gif"
        alt="globe"
        border="0"
        width="450px"
        height="350px"
      />
    </div>
  );
};

export default Intro;
