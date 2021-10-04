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
          <p>RUBY ON RAILS AP</p>
          <p>POSTGRESQL</p>
        </div>
        <p>
          Developed an online radio station and video player where users can
          discover a selection of songs and mixes and leave comments on favorite
          songs.
        </p>
        <div className="links">
          <a
            href="https://github.com/jaclynnbarrera/music-player-frontend"
            target="_blank"
            rel="noreferrer"
          >
            Github ↗️
          </a>{" "}
          |{" "}
          <a
            href="https://www.youtube.com/watch?v=69RPztsqZAs"
            target="_blank"
            rel="noreferrer"
          >
            Demo ↗️
          </a>
        </div>
      </div>
      <div className="project">
        <h3 className="plant">The Plant Shop</h3>
        <div className="stack">
          <p>JAVASCRIPT</p>
          <p>RUBY ON RAILS API</p>
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
            rel="noreferrer"
          >
            Github ↗️
          </a>{" "}
          |{" "}
          <a
            href="https://youtu.be/UoWabLQ8uak"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Demo ↗️
          </a>
        </div>
      </div>
      <div className="project">
        <h3 className="camp">Camp Club</h3>
        <div className="stack">
          <p>RUBY ON RAILS</p>
          <p>OMNIAUTH</p>
          <p>MYSQL</p>
        </div>
        <p>
          Camp Club is a complete Ruby on Rails application that allows you
          explore and leave reviews on your favorite campsites, enter new
          campsites into our database and see other camper profiles.
        </p>
        <div className="links">
          <a
            href="https://github.com/jaclynnbarrera/camp-club-app"
            target="_blank"
            rel="noreferrer"
          >
            Github ↗️ |{" "}
          </a>
          <a href="https://youtu.be/GY0ZREoSVQo" target="_blank">
            Demo ↗️
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
          Garden Zones is a command line interface application that helps you
          identify and learn about different plants and vegetables based on your
          gardening zone.
        </p>
        <div className="links">
          <a
            href="https://github.com/jaclynnbarrera/garden-zone-app"
            target="_blank"
            rel="noreferrer"
          >
            Github ↗️
          </a>{" "}
          |{" "}
          <a href="https://youtu.be/KpspE73aPGg" target="_blank">
            Demo ↗️
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
