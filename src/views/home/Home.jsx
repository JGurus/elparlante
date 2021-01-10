import React from "react";
import spotify from "../../images/icons/spotify-seeklogo.svg";
import ceci from "../../images/ceci.png";
import "./Home.css";

const Home = () => {
  return (
    <main className="landing-page">
      <div>
        <h2>Escucha Nuestro Podcast</h2>
        <a href="https://www.instagram.com/elparlanteec/" className="buttom" target="_blank" rel="noreferrer">
          <img src={spotify} alt="spotify-logo" />
        </a>
      </div>
      <div className="ceci" style={{ backgroundImage: `url(${ceci})` }}></div>
    </main>
  );
};

export default Home;
