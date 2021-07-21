import React from "react";

const Projects = () => {
  return (
    <div className="projects">
      <h2>WORK</h2>
      <div className="project">
        <h3>Radio 135</h3>
        <div className="stack">
          <p>REACT</p>
          <p>REDUX</p>
          <p>RAILS AS API</p>
          <p>POSTGRESQL</p>
        </div>
        <p>
          Developed an online radio statio site inspired by independent radio
          stations like NTSradio and lot radio. Users can select from curated
          songs and playlists, watch videos and leave comments.
        </p>
        <div className="links">
          <a href="https://github.com/jaclynnbarrera/music-player-frontend">
            Github
          </a>{" "}
          |{" "}
          <a href="https://github.com/jaclynnbarrera/music-player-frontend">
            Demo
          </a>
        </div>
      </div>
      <div className="project">
        <h3>The Plant Shop</h3>
        <div className="stack">
          <p>VANILLA JS</p>
          <p>RAILS AS API</p>
          <p>POSTGRESQL</p>
        </div>
        <p>The Plant Shop is an e-commerce web app selling plants.</p>
        <div className="links">
          <a href="https://github.com/jaclynnbarrera/music-player-frontend">
            Github
          </a>{" "}
          |{" "}
          <a href="https://github.com/jaclynnbarrera/music-player-frontend">
            Demo
          </a>
        </div>
      </div>
      <div className="project">
        <h3>Camp Club</h3>
        <div className="stack">
          <p>RUBY ON RAILS</p>
          <p>OMNIAUTH</p>
          <p>SQLITE</p>
        </div>
        <p>
          Camp Club is an app where campers can explore different campsites and
          their ammenities. Campers can leave reviews for their favorite
          campsites and see other campers who have also stayed there. Campers
          can also create a new campsite if it's not in the database and search
          by state.
        </p>
        <div className="links">
          <a href="https://github.com/jaclynnbarrera/music-player-frontend">
            Github
          </a>{" "}
          |{" "}
          <a href="https://github.com/jaclynnbarrera/music-player-frontend">
            Demo
          </a>
        </div>
      </div>
      <div className="project">
        <h3>Garden Zones</h3>
        <div className="stack">
          <p>RUBY</p>
          <p>FROSTLINE API</p>
          <p>NOKOGIRI</p>
        </div>
        <p>A Command Line Interface application</p>
        <div className="links">
          <a href="https://github.com/jaclynnbarrera/music-player-frontend">
            Github
          </a>{" "}
          |{" "}
          <a href="https://github.com/jaclynnbarrera/music-player-frontend">
            Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
