import { useState } from "react";

function Hero() {
  const [pointer, setPointer] = useState({
    x: 0,
    y: 0,
  });

  function handleMouseMove(event) {
    const x = (event.clientX / window.innerWidth - 0.5) * 36;
    const y = (event.clientY / window.innerHeight - 0.5) * 36;

    setPointer({ x, y });
  }

  function resetPosition() {
    setPointer({ x: 0, y: 0 });
  }

  return (
    <section
      className="hero"
      id="home"
      onMouseMove={handleMouseMove}
      onMouseLeave={resetPosition}
      style={{
        "--move-x": `${pointer.x}px`,
        "--move-y": `${pointer.y}px`,
        "--tilt-x": `${pointer.y * -0.18}deg`,
        "--tilt-y": `${pointer.x * 0.18}deg`,
      }}
    >
      <nav className="navbar">
        <div className="logo">
          NOIR<span>.</span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#menu">Menu</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <button className="reserve-btn">Reserve a table</button>
      </nav>

      <div className="hero-content">
        <p className="hero-label">MODERN DINING EXPERIENCE</p>

        <h1>
          Taste the
          <span> extraordinary.</span>
        </h1>

        <p className="hero-description">
          A contemporary dining experience where seasonal ingredients,
          bold flavours and modern technique come together.
        </p>

        <a href="#menu" className="hero-btn">
          Explore the menu <span>↗</span>
        </a>
      </div>

      <div className="hero-bottom">
        <span>EST. 2024 — NEW DELHI</span>
        <span>SCROLL TO EXPLORE ↓</span>
      </div>
    </section>
  );
}

export default Hero;