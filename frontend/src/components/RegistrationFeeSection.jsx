import React from "react";
import "./RegistrationFeeSection.css";

// Decorative Lotus Icon
const GoldLotusIcon = () => (
  <svg width="22" height="16" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C13.5 5 16 8 19 9.5C16 11 14 13.5 12 16.5C10 13.5 8 11 5 9.5C8 8 10.5 5 12 2Z" fill="#D4AF37" stroke="#B8860B" strokeWidth="0.8"/>
    <path d="M12 5C14 7.5 17 9.5 21 10C17.5 12 15 14.5 12 17.5C9 14.5 6.5 12 3 10C7 9.5 10 7.5 12 5Z" fill="#DAA520" opacity="0.8"/>
    <path d="M12 8C13.2 10 15 11.5 17.5 12C15 13 13.5 14.5 12 16C10.5 14.5 9 13 6.5 12C9 11.5 10.8 10 12 8Z" fill="#FFD700"/>
  </svg>
);

// Small Pink Floral Blossom next to "Fee"
const PinkBlossomIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="pink-blossom-icon">
    <path d="M12 2 C13 7, 17 8, 22 12 C17 16, 13 17, 12 22 C11 17, 7 16, 2 12 C7 8, 11 7, 12 2Z" fill="#E91E63" />
    <path d="M12 5 C13 9, 15 10, 19 12 C15 14, 13 15, 12 19 C11 15, 9 14, 5 12 C9 10, 11 9, 12 5Z" fill="#FF80AB" />
    <circle cx="12" cy="12" r="3" fill="#FFEB3B" />
  </svg>
);

// Card Top Emblem (Lotus Badge with Gold Lines)
const CardTopEmblem = () => (
  <div className="card-top-emblem-wrapper">
    <svg width="65" height="12" viewBox="0 0 65 12" fill="none">
      <path d="M5 6 H 50" stroke="#D4AF37" strokeWidth="1.2"/>
      <circle cx="5" cy="6" r="2" fill="#D4AF37"/>
      <path d="M50 6 C 55 2, 60 2, 63 6 C 60 10, 55 10, 50 6 Z" fill="#D4AF37"/>
    </svg>

    <div className="card-lotus-badge">
      <svg width="28" height="24" viewBox="0 0 28 24" fill="none">
        <path d="M14 2C16 6 19 9 23 11C19 13 16 16 14 20C12 16 9 13 5 11C9 9 12 6 14 2Z" fill="#E91E63" />
        <path d="M14 6C15.5 8.5 17.5 10.5 20.5 11C17.5 12.5 15.5 14.5 14 17C12.5 14.5 10.5 12.5 7.5 11C10.5 10.5 12.5 8.5 14 6Z" fill="#F48FB1" />
        <circle cx="14" cy="11.5" r="2.5" fill="#FFF7C2" />
      </svg>
    </div>

    <svg width="65" height="12" viewBox="0 0 65 12" fill="none">
      <path d="M60 6 H 15" stroke="#D4AF37" strokeWidth="1.2"/>
      <circle cx="60" cy="6" r="2" fill="#D4AF37"/>
      <path d="M15 6 C 10 2, 5 2, 2 6 C 5 10, 10 10, 15 6 Z" fill="#D4AF37"/>
    </svg>
  </div>
);

// Intricate Gold Corner Flourish inside Card
const CardCornerFlourish = ({ position = "top-right" }) => {
  const isRight = position.includes("right");
  const isBottom = position.includes("bottom");
  const transform = `${isRight ? "scaleX(-1) " : ""}${isBottom ? "scaleY(-1)" : ""}`;

  return (
    <svg 
      className={`card-corner-flourish flourish-${position}`} 
      width="70" 
      height="70" 
      viewBox="0 0 70 70" 
      fill="none"
      style={{ transform }}
    >
      <path d="M5 5 H 65 V 65" stroke="#E2BA6E" strokeWidth="1" strokeDasharray="3 3" opacity="0.4"/>
      <path d="M12 12 C 30 12, 58 40, 58 58" stroke="#D4AF37" strokeWidth="1.2" opacity="0.75"/>
      <path d="M12 12 C 12 30, 40 58, 58 58" stroke="#DAA520" strokeWidth="0.8" opacity="0.6"/>
      <circle cx="12" cy="12" r="3" fill="#D4AF37"/>
      <path d="M25 12 C 35 25, 45 35, 58 45" stroke="#D4AF37" strokeWidth="0.8" opacity="0.5"/>
    </svg>
  );
};

export default function RegistrationFeeSection({ goRegister }) {
  return (
    <section id="awards" className="registration-fee-luxury-section">
      <div className="registration-fee-luxury-container">
        {/* Header Block */}
        <div className="registration-fee-header">
          {/* Top Lotus above Registration */}
          <div className="fee-header-lotus-top">
            <GoldLotusIcon />
          </div>

          {/* REGISTRATION Badge */}
          <div className="fee-top-badge">
            <span className="badge-line"></span>
            <span className="badge-text">REGISTRATION</span>
            <span className="badge-line"></span>
          </div>

          {/* Main Title: Registration Fee + Flower */}
          <h2 className="fee-main-title">
            <span>Registration</span>
            <span className="fee-highlight">Fee</span>
            <PinkBlossomIcon />
          </h2>

          {/* Sub-Title */}
          <h3 className="fee-sub-title">Be a Part of Rangavallika</h3>

          {/* Center Lotus */}
          <div className="fee-header-lotus">
            <GoldLotusIcon />
          </div>

          {/* Description */}
          <p className="fee-description">
            Register for Rangavallika Rangoli Fest<br />
            and showcase your creativity.
          </p>

          {/* Bottom Lotus */}
          <div className="fee-header-lotus">
            <GoldLotusIcon />
          </div>
        </div>

        {/* Center Card */}
        <div className="fee-card-wrapper">
          <div className="fee-card">
            {/* 4 Inner Corner Flourishes inside Card */}
            <CardCornerFlourish position="top-left" />
            <CardCornerFlourish position="top-right" />
            <CardCornerFlourish position="bottom-left" />
            <CardCornerFlourish position="bottom-right" />
            
            {/* Top Emblem */}
            <CardTopEmblem />

            {/* Card Content */}
            <div className="fee-card-title">REGISTRATION FEE</div>

            <div className="fee-card-price">₹999</div>

            <p className="fee-card-subtext">
              Register now and be a part of<br />
              Rangavallika Rangoli Fest.
            </p>

            <button
              className="fee-card-button"
              onClick={goRegister}
            >
              Register Now <span className="btn-arrow">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
