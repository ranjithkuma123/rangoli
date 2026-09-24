import React from "react";
import "./Header.css";

function Header() {
  const goRegister = () => {
    window.location.href = "/register";
  };

  const goToSection = (id) => {
    const element = document.getElementById(id);

    if (!element) {
      console.log(`Section #${id} not found`);
      return;
    }

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <header className="home-header">
      <div className="header-box">

        {/* GIVE LAURELS LOGO */}
        <button
          type="button"
          className="give-laurels-brand"
          onClick={() => goToSection("home")}
        >
          <img
            src="/give.png"
            alt="Give Laurels Foundation of India"
          />
        </button>

        {/* NAVIGATION */}
        <nav className="desktop-nav">

          <button
            type="button"
            onClick={() => goToSection("home")}
          >
            Home
          </button>

          <button
            type="button"
            onClick={() => goToSection("about")}
          >
            About Us
          </button>

          <button
            type="button"
            onClick={() => goToSection("guidelines")}
          >
            Guidelines
          </button>

          <button
            type="button"
            onClick={() => goToSection("awards")}
          >
            Awards
          </button>

          <button
            type="button"
            onClick={() => goToSection("contact")}
          >
            Contact
          </button>

        </nav>

        {/* REGISTER */}
        <button
          type="button"
          className="header-register"
          onClick={goRegister}
        >
          Register Now
          <span>→</span>
        </button>

        {/* MOBILE MENU */}
        <button
          type="button"
          className="mobile-menu"
          aria-label="Menu"
        >
          ☰
        </button>

      </div>
    </header>
  );
}

export default Header;