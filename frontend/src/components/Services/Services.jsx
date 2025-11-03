import React from "react";
import "./Services.css";
import MagicBento from "./MagicBento";

export default function Services() {
  return (
    <section className="service-section" id="service">
      <div className="service-header">
        <h1 className="our-services">
          Our <span className="span-services">Services</span>
        </h1>
        <p className="service-paragraph">
          Comprehensive solutions to accelerate your business growth
        </p>
      </div>

      {/*  MagicBento */}
      <div className="magic-bento-container">
        <MagicBento
          textAutoHide={true}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={300}
          particleCount={15}
          glowColor="132, 0, 255"
        />
      </div>
    </section>
  );
}
