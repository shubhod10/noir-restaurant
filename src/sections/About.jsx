function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-image-wrap">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85"
          alt="Noir restaurant interior"
        />

        <span className="about-image-label">NOIR / EST. 2024</span>
      </div>

      <div className="about-content">
        <p className="about-label">OUR PHILOSOPHY</p>

        <h2>
          Good food is
          <span>a feeling.</span>
        </h2>

        <p className="about-text">
          At NOIR, dining is more than what is on the plate. It is the
          atmosphere, the conversation, the anticipation and the memory you
          take with you.
        </p>

        <p className="about-text">
          We bring together seasonal ingredients, thoughtful technique and a
          little bit of curiosity to create dishes worth remembering.
        </p>

        <div className="about-stats">
          <div>
            <strong>12</strong>
            <span>Seasonal ingredients</span>
          </div>

          <div>
            <strong>24</strong>
            <span>Signature dishes</span>
          </div>

          <div>
            <strong>01</strong>
            <span>Unique experience</span>
          </div>
        </div>

        <a href="#menu" className="about-link">
          Discover our menu <span>↗</span>
        </a>
      </div>
    </section>
  );
}

export default About;