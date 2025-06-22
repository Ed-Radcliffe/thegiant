import React from "react";

function Home() {
  return (
    <section
      style={{
        minHeight: "80vh",
        backgroundImage: `url('/path-to-your-background.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#eee",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "2rem",
        fontFamily: "'Georgia', serif",
        textShadow: "0 0 5px rgba(0,0,0,0.7)",
      }}
    >
      <img
        src="/assets/the-giant-logo.jpg"
        alt="The Giant Logo"
        style={{ maxWidth: "300px", marginBottom: "1rem" }}
      />
      <h1 style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>
        The Giant
      </h1>
      <p style={{ fontSize: "1.5rem", fontStyle: "italic", marginBottom: "2rem" }}>
        Doom metal inspired by the changing seasons
      </p>
      <a
        href="https://thegiant1.bandcamp.com/album/seasons"
        target="_blank"
        rel="noreferrer"
        style={{
          backgroundColor: "#3a3a3a",
          color: "#eee",
          padding: "1rem 2rem",
          borderRadius: "5px",
          textDecoration: "none",
          fontWeight: "bold",
          boxShadow: "0 0 10px rgba(58, 58, 58, 0.8)",
          transition: "background-color 0.3s ease",
        }}
        onMouseEnter={e => e.currentTarget.style.backgroundColor = "#575757"}
        onMouseLeave={e => e.currentTarget.style.backgroundColor = "#3a3a3a"}
      >
        Listen to "Seasons" EP
      </a>
    </section>
  );
}

export default Home;
