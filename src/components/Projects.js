import React from "react";

const Projects = () => {
  return (
    <div className="projects">
      <h2>WORK</h2>
      <div className="project">
        <h3 className="radio">Radio 135</h3>
        <div className="stack">
          <p>REACT</p>
          <p>REDUX</p>
          <p>RAILS AS API</p>
          <p>POSTGRESQL</p>
        </div>
        <p>
          Developed an online radio statio inspired by independent radio
          stations like NTS Radio and The Lot Radio. Users can select from
          curated songs and DJ sets, watch videos and leave comments.
        </p>
        <div className="links">
          <a
            href="https://github.com/jaclynnbarrera/music-player-frontend"
            target="_blank"
          >
            Github ↗️
          </a>{" "}
          |{" "}
          <a
            href="https://www.youtube.com/watch?v=KWOz8rt1-zE&feature=youtu.be"
            target="_blank"
          >
            Demo ↗️ |
          </a>
          <a href="https://radio135.netlify.app/" target="_blank">
            {" "}
            Live Site ↗️
          </a>
        </div>
      </div>
      <div className="project">
        <h3 className="plant">The Plant Shop</h3>
        <div className="stack">
          <p>VANILLA JS</p>
          <p>RAILS AS API</p>
          <p>POSTGRESQL</p>
        </div>
        <p>
          The Plant Shop is an e-commerce single page application where users
          can shop for different plants, add and remove items from their cart.
        </p>
        <div className="links">
          <a
            href="https://github.com/jaclynnbarrera/the-plant-shop"
            target="_blank"
          >
            Github ↗️
          </a>{" "}
          |{" "}
          <a href="https://www.youtube.com/watch?v=EBNyFQTuNVY" target="_blank">
            {" "}
            Demo ↗️ |{" "}
          </a>
          <a
            href="https://jaclynnbarrera.github.io/theplantshop/"
            target="_blank"
          >
            Live Site ↗️
          </a>
        </div>
      </div>
      <div className="project">
        <h3 className="camp">Camp Club</h3>
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
          <a
            href="https://github.com/jaclynnbarrera/camp-club-app"
            target="_blank"
          >
            Github ↗️ |{" "}
          </a>
          <a href="https://www.youtube.com/watch?v=tRUzdfTXxdU" target="_blank">
            Demo ↗️
          </a>{" "}
          |{" "}
          <a href="https://camp-club.herokuapp.com/" target="_blank">
            Live Site ↗️
          </a>
        </div>
      </div>
      <div className="project">
        <h3 className="zones">Garden Zones</h3>
        <div className="stack">
          <p>RUBY</p>
          <p>FROSTLINE API</p>
          <p>NOKOGIRI</p>
        </div>
        <p>
          Developed an online radio statio site inspired by independent radio
          stations like NTSradio and lot radio. Users can select from curated
          songs and playlists, watch videos and leave comments.
        </p>
        <div className="links">
          <a
            href="https://github.com/jaclynnbarrera/garden-zone-app"
            target="_blank"
          >
            Github ↗️
          </a>{" "}
          | <a href="">Demo ↗️</a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
