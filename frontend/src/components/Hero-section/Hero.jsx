
import "./Hero.css";

const Header = () => {
  return (
    <section className="hero" id="home" aria-label="Hero section">
      <div className="hero-wrapper">
        <div className="hero-left">
          <p className="kicker">LET'S CREATE</p>
          <h1 className="hero-title">
            Bright Ideas, <span className="accent">Brilliant Results</span>
          </h1>
          <p className="hero-sub">
            We build beautiful, effective web experiences that drive measurable results.
            Design-driven development tailored to your business goals.
          </p>

          <div className="hero-actions">
            <a className="btn-primary-hero" href="#start">Start Project</a>
            <a className="link-light" href="#works">View Work</a>
          </div>

         

          {/* Brand logos row */}
          <div className="brand-row" aria-label="Trusted by">
            <img src="/assets/logo-google.png" alt="Google" />
            <img src="/assets/logo-slack.png" alt="Slack" />
            <img src="/assets/logo-ax.png" alt="Agworld" />
            <img src="/assets/logo-ill.png" alt="BlueCrate" />
            <img src="/assets/logo-other.png" alt="Other" />
          </div>
        </div>

        <div className="hero-right" aria-hidden="true">
          {/* person image: replace with your asset */}
          <div className="hero-image-wrap">
            <img className="hero-image" src="./src/assets/person.png" alt="Person working on laptop" />
            {/* Subtle floating cards / badges */}
            <div className="badge badge-1">UI/UX</div>
            <div className="badge badge-2">8.9k Projects</div>
            <div className="badge badge-3">Design</div>
          </div>
        </div>

         {/* CSS-based marquee */}
          <div className="marquee-wrapper" aria-hidden="false">
            <div className="marquee">
              <span>Featured — Creative Design • UI/UX • Web Development • Branding • Marketing</span>
              <span>Featured — Creative Design • UI/UX • Web Development • Branding • Marketing</span>
              <span>Featured — Creative Design • UI/UX • Web Development • Branding • Marketing</span>
              <span>Featured — Creative Design • UI/UX • Web Development • Branding • Marketing</span>
              <span>Featured — Creative Design • UI/UX • Web Development • Branding • Marketing</span>
            </div>
          </div>

      </div>
    </section>
  );
};

export default Header;
