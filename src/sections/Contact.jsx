function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-layout">
        <div className="contact-heading">
          <p className="contact-label">GET IN TOUCH</p>

          <h2>
            Let’s make
            <span>something memorable.</span>
          </h2>
        </div>

        <div className="contact-card">
          <p className="contact-card-label">CONTACT DETAILS</p>

          <h3>Shubhodeep Dey</h3>

          <div className="contact-details">
            <a href="tel:+917489471654">+91 7489471654</a>

            <a href="mailto:deyshubhodeep3@gmail.com">
              deyshubhodeep3@gmail.com
            </a>
          </div>

          <a
            className="contact-email-button"
            href="mailto:deyshubhodeep3@gmail.com"
          >
            Send an email <span>↗</span>
          </a>
        </div>
      </div>

      <footer className="site-footer">
        <div className="footer-brand">NOIR.</div>

        <div className="footer-socials">
          <a
            href="https://github.com/shubhod10"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/Shubhodeep Dey/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://www.instagram.com/shubho_d_10/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </div>

        <span>© {new Date().getFullYear()} Shubhodeep Dey</span>
      </footer>
    </section>
  );
}

export default Contact;