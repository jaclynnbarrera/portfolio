import React from "react";

const Projects = () => {
  return (
    <div className="projects">
      <h2>PROJECTS</h2>
      <div className="project">
        <h3>Radio 135</h3>
        <div className="stack">
          <p>REACT</p>
          <p>REACT-REDUX</p>
          <p>RAILS API</p>
          <p>POSTGRESQL</p>
        </div>
        <p>
          Developed an online radio statio site inspired by independent radio
          stations like NTSradio and lot radio. Users can select from curated
          songs and playlists, watch videos and leave comments.
        </p>
      </div>
      <div className="project">
        <h3>Camp Club</h3>
        <div className="stack">
          <p>RUBY ON RAILS</p>
          <p>POSTGRESQL</p>
        </div>
        <p>
          Developed an online radio statio site inspired by independent radio
          stations like NTSradio and lot radio. Users can select from curated
          songs and playlists, watch videos and leave comments.
        </p>
      </div>
      <div className="project">
        <h3>Plant Shop</h3>
        <div className="stack">
          <p>JAVASCRIPT</p>
          <p>MYSQL</p>
        </div>
        <p>e-commerce site for users to shop.</p>
      </div>
    </div>
  );
};

export default Projects;
