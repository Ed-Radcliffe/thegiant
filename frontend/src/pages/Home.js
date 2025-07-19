import React from "react";

function Home() {
  return (
    <section className="section">
      <img
        src="/assets/the-giant-logo.jpg"
        alt="The Giant Logo"
        className="logo-image"
      />
      <h1 className="section-title">The Giant</h1>
      <p className="section-subtitle">Doom metal inspired by the changing seasons</p>
      <a
        href="https://thegiant1.bandcamp.com/album/seasons"
        target="_blank"
        rel="noreferrer"
        className="button"
      >
        Listen to "Seasons" EP
      </a>
    </section>
  );
}

export default Home;
