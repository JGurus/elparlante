import React from "react";
import spotify from "../../images/icons/spotify-seeklogo.svg";
import vinyl from "../../images/vynil-2-web.png";
import speaker from "../../images/speaker.png";
import "./Home.css";

const Home = () => {
  return (
    <main className="landing-page">
      <div>
        <h2>Escucha Nuestro Podcast</h2>
        <h4>La industria musical en tiempos de pandemia - Ecuador 2020</h4>
        <a href="https://open.spotify.com/episode/2GolUG5Rd1cOhQL9xGiavc?si=8eixKPQTTkibt67J_JtnlQ" className="buttom" target="_blank" rel="noreferrer">
          <img src={spotify} alt="spotify-logo" />
        </a>
      </div>
      <div className="speaker" style={{ backgroundImage: `url(${speaker})` }}></div>
      <div className="vinyl" style={{ backgroundImage: `url(${vinyl})` }}></div>
    </main>
  );
};

export default Home;
