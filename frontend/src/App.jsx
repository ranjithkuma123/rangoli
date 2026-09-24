import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Register from "./Register";
import Payment from "./components/Payment";
import Header from "./components/Header";

import AdminLogin from "./admin/pages/AdminLogin";
import AdminDashboard from "./admin/pages/AdminDashboard";
import AdminRegistrations from "./admin/pages/AdminRegistrations";
import AdminPayments from "./admin/pages/AdminPayments";
import AdminQueries from "./admin/pages/AdminQueries";
import ProtectedAdminRoute from "./admin/components/ProtectedAdminRoute";

import "./App.css";

import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiHeart,
  FiUser,
  FiMessageCircle,
  FiList,
} from "react-icons/fi";

function PaymentReturnPage() {
  const params = new URLSearchParams(window.location.search);

  const payment = params.get("payment");
  const registrationId = params.get("registration_id");

  if (
    !registrationId ||
    !["success", "failed", "pending"].includes(payment)
  ) {
    return <HomePage />;
  }

  return (
    <Payment
      registrationId={registrationId}
      registration={{
        registration_id: registrationId,
        payment_status:
          payment === "success"
            ? "SUCCESS"
            : payment === "failed"
            ? "FAILED"
            : "PAYMENT_INITIATED",
      }}
      onBack={() => {
        window.location.href = "/";
      }}
      onHome={() => {
        window.location.href = "/";
      }}
    />
  );
}
function App() {
  return (
<BrowserRouter>
  <Routes>

    {/* PUBLIC RANGOLI WEBSITE */}
   <Route path="/" element={<PaymentReturnPage />} />

    {/* REGISTRATION */}
    <Route path="/register" element={<Register />} />

    {/* ADMIN LOGIN */}
    <Route path="/admin" element={<AdminLogin />} />
    <Route
  path="/admin/dashboard"
  element={
    <ProtectedAdminRoute>
      <AdminDashboard />
    </ProtectedAdminRoute>
  }
/>
<Route
  path="/admin/registrations"
  element={
    <ProtectedAdminRoute>
      <AdminRegistrations />
    </ProtectedAdminRoute>
  }
/>
<Route
  path="/admin/payments"
  element={
    <ProtectedAdminRoute>
      <AdminPayments />
    </ProtectedAdminRoute>
  }
/>
<Route
  path="/admin/queries"
  element={
    <ProtectedAdminRoute>
      <AdminQueries />
    </ProtectedAdminRoute>
  }
/>


    {/* Unknown URL */}
    <Route
      path="*"
      element={<Navigate to="/" replace />}
    />

  </Routes>
</BrowserRouter>
  );
}


/* =====================================================
   HOME PAGE
===================================================== */

function HomePage() {
  useEffect(() => {
    if (window.location.pathname === "/about") {
      window.history.replaceState(null, "", "/#about");

      setTimeout(() => {
        const aboutSection = document.getElementById("about");

        if (aboutSection) {
          aboutSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    }
  }, []);


  const goRegister = () => {
    window.location.href = "/register";
  };


  return (
    <div className="home-page">

      <Header />


      {/* =================================================
          HERO / HOME
      ================================================= */}

      {/* =================================================
          HERO / HOME
      ================================================= */}

      <section id="home" className="hero-section">

        <div className="hero-container">

          <div className="hero-content">

            <div className="hero-eyebrow">
              <span className="eyebrow-flower">❀</span>
              <span className="eyebrow-text">LET CREATIVITY BLOSSOM</span>
              <span className="eyebrow-flower">❀</span>
            </div>

            <div className="hero-title-wrap">
              <h1 className="main-script-title">
                Rangavalika <span className="title-flower-emoji">🌸</span>
              </h1>
              <h2 className="main-serif-subtitle">RANGOLI FEST</h2>
            </div>

            <p className="hero-script-tagline">
              Draw your imagination.
              <br />
              <span className="tagline-sub">Color the world. ♡</span>
            </p>

            {/* BADGES ROW */}
            <div className="hero-badges-row">

              <div className="badge-card">
                <div className="badge-icon-wrapper">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                </div>
                <div className="badge-text-box">
                  <span className="badge-label">DATE</span>
                  <strong className="badge-value">14th January 2027</strong>
                </div>
              </div>

              <div className="badge-card">
                <div className="badge-icon-wrapper">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
                <div className="badge-text-box">
                  <span className="badge-label">CATEGORY</span>
                  <strong className="badge-value">Rangoli Competition</strong>
                </div>
              </div>

              <div className="badge-card">
                <div className="badge-icon-wrapper">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                  </svg>
                </div>
                <div className="badge-text-box">
                  <span className="badge-label">MODE</span>
                  <strong className="badge-value">Online Registration</strong>
                </div>
              </div>

            </div>

            {/* BUTTONS & LINKS */}
            <div className="hero-buttons-row">
              <button
                className="hero-primary-btn"
                onClick={goRegister}
              >
                <span className="btn-doc-icon">📄</span>
                Register Now
                <span className="btn-arrow">→</span>
              </button>

              <a
                href="#guidelines"
                className="hero-secondary-btn"
              >
                <span className="btn-doc-icon">📋</span>
                View Guidelines
              </a>

              <div className="hero-continue-reg-block">
                <button
                  type="button"
                  className="existing-registration-text-btn"
                  onClick={() => {
                    window.location.href = "/register?continue=existing";
                  }}
                >
                  <span className="cont-top">Already registered?</span>
                  <span className="cont-bottom">Continue Existing Registration → ♡</span>
                </button>
              </div>
            </div>

          </div>


          <div className="hero-art">
            <div className="handwritten-art-annotation">
              <span>Celebrate</span>
              <span>Art,</span>
              <span>Culture,</span>
              <span>You ♥</span>
            </div>
          </div>

        </div>

      </section>


      {/* =================================================
          MOVING INFORMATION BAR
      ================================================= */}

      <div className="home-marquee">

        <div className="marquee-track">

          <span>
            ✦ Rangavallika — Where tradition meets creativity
          </span>

          <span>
            ✦ 14th January 2027 — Save the date and get ready to create
          </span>

          <span>
            ✦ Give Laurels Foundation of India — Creating opportunities and empowering communities
          </span>

          <span>
            ✦ Celebrate Indian culture through the timeless art of Rangoli
          </span>

          <span>
            ✦ Rangavallika — Where tradition meets creativity
          </span>

          <span>
            ✦ 14th January 2027 — Save the date and get ready to create
          </span>

          <span>
            ✦ Give Laurels Foundation of India — Creating opportunities and empowering communities
          </span>

          <span>
            ✦ Celebrate Indian culture through the timeless art of Rangoli
          </span>

        </div>

      </div>


      {/* =================================================
          ABOUT US
      ================================================= */}

      {/* =================================================
          ABOUT US
      ================================================= */}

      <section id="about" className="about-section">

        <div className="about-container">

          <div className="about-content">

            <div className="about-eyebrow">
              <span className="eyebrow-line">─</span>
              <span className="eyebrow-icon">🪷</span>
              <span className="eyebrow-text">ABOUT US</span>
              <span className="eyebrow-line">─</span>
            </div>

            <h2 className="about-heading">
              About <span className="about-title-script">Rangavalika <span className="title-flower-emoji">🌸</span></span>
            </h2>

            <h3 className="about-subheading">
              Celebrating creativity,
              <br />
              tradition & expression. <span className="pink-heart">💕</span>
            </h3>

            <p className="about-paragraph">
              Rangavalika Rangoli Fest is a celebration of creativity, Indian tradition
              and women's artistic expression, organized by{" "}
              <strong>Give Laurels Foundation of India.</strong>
            </p>

            <p className="about-paragraph">
              The event brings together women from different walks of life to showcase
              their talent, preserve our cultural heritage and share the beauty of Rangoli art.
            </p>

            <p className="about-paragraph">
              Through Rangavalika, Give Laurels Foundation of India continues its mission
              of creating opportunities, encouraging creativity and empowering women
              to contribute to a more inclusive and vibrant community.
            </p>

            <div className="about-signature-block">
              <span className="signature-text">Art connects hearts 💕</span>
              <div className="signature-flourish"></div>
            </div>

          </div>


          <div className="about-values-grid">

            {/* CARD 1 - PINK */}
            <div className="value-card card-pink">
              <div className="card-icon-circle icon-pink">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"></path>
                  <path d="M12 6v12M6 12h12"></path>
                </svg>
              </div>
              <strong className="card-title title-pink">
                Celebrating Tradition
              </strong>
              <p className="card-desc">
                Honouring India's rich cultural heritage through the timeless art of Rangoli.
              </p>
              <div className="card-corner-petal petal-pink"></div>
            </div>


            {/* CARD 2 - TEAL */}
            <div className="value-card card-teal">
              <div className="card-icon-circle icon-teal">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18h6M10 22h4M15 9A3 3 0 0 0 9 9c0 2 1 3.5 2 4.5V15h2v-1.5c1-1 2-2.5 2-4.5z"></path>
                </svg>
              </div>
              <strong className="card-title title-teal">
                Encouraging Creativity
              </strong>
              <p className="card-desc">
                Providing women with a platform to express their imagination, creativity and talent.
              </p>
              <div className="card-corner-petal petal-teal"></div>
            </div>


            {/* CARD 3 - GOLD */}
            <div className="value-card card-gold">
              <div className="card-icon-circle icon-gold">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <strong className="card-title title-gold">
                Empowering Women
              </strong>
              <p className="card-desc">
                Creating opportunities for women to showcase their skills and celebrate their achievements.
              </p>
              <div className="card-corner-petal petal-gold"></div>
            </div>


            {/* CARD 4 - GREEN */}
            <div className="value-card card-green">
              <div className="card-icon-circle icon-green">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </div>
              <strong className="card-title title-green">
                Building Community
              </strong>
              <p className="card-desc">
                Bringing people together through art, culture, creativity and shared experiences.
              </p>
              <div className="card-corner-petal petal-green"></div>
            </div>

          </div>

        </div>

      </section>


      {/* =================================================
          GUIDELINES
      ================================================= */}

      <section id="guidelines" className="guidelines-section">

        <div className="guidelines-container">

          <div className="guidelines-heading">

            <div className="guidelines-label">
              <span></span>
              GUIDELINES
              <span></span>
            </div>

            <h2>
              Everything <span>You Need to Know</span>
            </h2>

            <p>
              Please read the guidelines carefully before participating.
            </p>

          </div>


          <div className="guidelines-grid">

            <div className="guideline-card guideline-pink">
              <span className="guideline-number">01</span>

              <div>
                <h3>Eligibility</h3>

                <ul>
                  <li>Open to women participants.</li>
                  <li>
                    Participants must provide accurate registration
                    details.
                  </li>
                  <li>
                    Each participant can register only once.
                  </li>
                </ul>
              </div>
            </div>


            <div className="guideline-card guideline-teal">
              <span className="guideline-number">02</span>

              <div>
                <h3>Registration</h3>

                <ul>
                  <li>
                    Registration must be completed through the
                    official online registration form.
                  </li>
                  <li>
                    All required details must be entered correctly.
                  </li>
                  <li>
                    Select the required package during registration.
                  </li>
                  <li>
                    Registration will be confirmed after successful
                    payment.
                  </li>
                </ul>
              </div>
            </div>


            <div className="guideline-card guideline-gold">
              <span className="guideline-number">03</span>

              <div>
                <h3>Rangoli Competition</h3>

                <ul>
                  <li>
                    Create the Rangoli according to the theme or
                    instructions announced by the organizers.
                  </li>
                  <li>
                    The Rangoli should be created by the registered
                    participant.
                  </li>
                  <li>
                    Participants should bring the required Rangoli
                    materials.
                  </li>
                  <li>
                    The Rangoli must be completed within the
                    allotted time.
                  </li>
                </ul>
              </div>
            </div>


            <div className="guideline-card guideline-green">
              <span className="guideline-number">04</span>

              <div>
                <h3>Competition Rules</h3>

                <ul>
                  <li>
                    Participants must follow all instructions given
                    by the organizers.
                  </li>
                  <li>
                    Maintain cleanliness and discipline at the venue.
                  </li>
                  <li>
                    Unfair practices or copying may result in
                    disqualification.
                  </li>
                  <li>
                    The organizers' decision will be final.
                  </li>
                </ul>
              </div>
            </div>


            <div className="guideline-card guideline-purple">
              <span className="guideline-number">05</span>

              <div>
                <h3>Prizes &amp; Awards</h3>

                <ul>
                  <li>
                    Winners will receive prizes or awards according
                    to the event arrangements.
                  </li>
                  <li>
                    Certificates will be provided as specified by
                    the organizers.
                  </li>
                  <li>
                    Prize details will be announced by the organizers.
                  </li>
                </ul>
              </div>
            </div>


            <div className="guideline-card guideline-orange">
              <span className="guideline-number">06</span>

              <div>
                <h3>Important Instructions</h3>

                <ul>
                  <li>
                    Keep your registration confirmation safely.
                  </li>
                  <li>
                    Follow the reporting time communicated by the
                    organizers.
                  </li>
                  <li>
                    Necessary changes to event arrangements may be
                    made by the organizers.
                  </li>
                  <li>
                    Participants are expected to cooperate with the
                    organizing team.
                  </li>
                </ul>
              </div>
            </div>

          </div>


          <div className="guidelines-bottom">
            <span>CREATE</span>
            <b>✦</b>
            <span>PARTICIPATE</span>
            <b>✦</b>
            <span>CELEBRATE</span>
          </div>

        </div>

      </section>


      {/* =================================================
          REGISTRATION FEE
      ================================================= */}

      <section id="awards" className="awards-section">

        <div className="awards-heading">

          <div className="awards-label">
            <span></span>
            REGISTRATION
            <span></span>
          </div>

          <h2>
            Registration <em>Fee</em>
          </h2>

          <h3>
            Be a Part of Rangavallika
          </h3>

          <p>
            Register for Rangavallika Rangoli Fest
            <br />
            and showcase your creativity.
          </p>

        </div>


        <div className="registration-fee-wrapper">

          <div className="registration-fee-card">

            <div className="registration-fee-symbol">
              ✦
            </div>

            <div className="registration-fee-small-title">
              REGISTRATION FEE
            </div>

            <div className="registration-fee-divider">
              <span>✦</span>
            </div>

            <div className="registration-fee-price">
              ₹999
            </div>

            <p className="registration-fee-text">
              Register now and be a part of
              <br />
              Rangavallika Rangoli Fest.
            </p>

            <button
              className="registration-fee-button"
              onClick={goRegister}
            >
              Register Now
              <span>→</span>
            </button>

          </div>

        </div>


        <div className="awards-subline">
          CREATE&nbsp;&nbsp; • &nbsp;&nbsp;PARTICIPATE&nbsp;&nbsp; • &nbsp;&nbsp;SHINE
        </div>

      </section>


      {/* =================================================
          CONTACT
      ================================================= */}

      <section id="contact" className="contact-section">

        <div className="contact-heading">

          <div className="contact-label">
            <span></span>
            CONTACT US
            <span></span>
          </div>

          <h2>
            Contact <em>Us</em>
          </h2>

          <h3>
            We’d Love to Hear from You
          </h3>

          <p>
            Have a question, need more information, or want to be a
            part of Rangavallika?
            <br />
            Reach out to us — we’re here to help!
          </p>

        </div>


        <div className="contact-container">


          {/* ================= LEFT ================= */}

          <div className="contact-info">


            {/* EMAIL */}

            <div className="contact-item email-item">

              <div className="contact-icon email-icon">
                <FiMail />
              </div>

              <div className="contact-item-content">

                <h4>Email Us</h4>

                <a href="mailto:info@givelaurelsfoundation.com">
                  info@givelaurelsfoundation.com
                </a>

                <a href="mailto:support@givelaurelsfoundation.org">
                  support@givelaurelsfoundation.org
                </a>

              </div>

            </div>


            {/* PHONE */}

            <div className="contact-item phone-item">

              <div className="contact-icon phone-icon">
                <FiPhone />
              </div>

              <div className="contact-item-content">

                <h4>Call Us</h4>

                <a href="tel:+919347823942">
                  +91 9347823942
                </a>

                <a href="tel:+919347823943">
                  +91 9347823943
                </a>

                <a href="tel:+919347813943">
                  +91 9347813943
                </a>

                <small>
                  (Mon - Sat, 10 AM - 6 PM)
                </small>

              </div>

            </div>


            {/* ADDRESS */}

            <div className="contact-item address-item">

              <div className="contact-icon address-icon">
                <FiMapPin />
              </div>

              <div className="contact-item-content">

                <h4>Our Address</h4>

          
<h3>Our Address</h3>

<a
  href="https://www.google.com/maps/search/?api=1&query=306%2C%203RD%20FLOOR%20SPACE%20TREE%2C%20UNITY%20HUB%2C%20HUDA%20TECHNO%20ENCLAVE%2C%20BESIDE%20RAIDURG%20METRO%20STATION%2C%20HITECH%20CITY%2C%20Madhapur%2C%20Hyderabad%2C%20Telangana%20500081"
  target="_blank"
  rel="noopener noreferrer"
  className="address-map-link"
>
  306, 3RD FLOOR SPACE TREE,
  <br />
  UNITY HUB, HUDA TECHNO ENCLAVE
  <br />
  BESIDE RAIDURG METRO STATION
  <br />
  HITECH CITY, Madhapur, Hyderabad,
  <br />
  Telangana 500081
</a>
              </div>

            </div>


            {/* FOLLOW US */}

            <div className="contact-item social-item">

              <div className="contact-icon social-icon">
                <FiHeart />
              </div>

              <div className="contact-item-content">

                <h4>Follow Us</h4>

                <div className="social-links">

                  <a
                    href="https://www.instagram.com/givelaurelsfoundationofindia/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="instagram"
                  >
                    <FaInstagram />
                  </a>

                  <a
                    href="https://www.facebook.com/profile.php?id=61591867197927"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="facebook"
                  >
                    <FaFacebookF />
                  </a>

                  <a
                    href="https://www.youtube.com/channel/UCpE9niJWvxJVFe-LiNH9x4g"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="youtube"
                  >
                    <FaYoutube />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/givelaurelsfoundation-ofindia-19185a409/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="linkedin"
                  >
                    <FaLinkedinIn />
                  </a>

                  <a
                    href="https://x.com/givelaurels"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X"
                    className="x-twitter"
                  >
                    <FaXTwitter />
                  </a>

                </div>

              </div>

            </div>


            {/* MESSAGE */}

            <div className="contact-message">

              <span>Let’s Create a</span>

              <strong>
                Brighter, More Colorful World
              </strong>

              <span>Together!</span>

              <div className="message-heart">
                ♡
              </div>

            </div>

          </div>


          {/* ================= RIGHT ================= */}

          <div className="contact-form-card">

            <div className="form-label">

              <span></span>

              SEND US A MESSAGE

              <span></span>

            </div>


            <h3>
              We’re Here <em>for You</em>
            </h3>


            <p className="form-intro">
              Fill out the form and our team will get back to you soon.
            </p>


            <form
              onSubmit={async (e) => {
  e.preventDefault();

  const form = e.currentTarget;

  const formData = new FormData(form);

  const queryData = {
  name: formData.get("name"),
  phone: formData.get("phone"),
  subject: formData.get("subject"),
  message: formData.get("message"),
};
  try {
    const rawApiUrl = String(
      import.meta.env.VITE_API_URL || "http://localhost:5000"
    ).trim().replace(/\/$/, "");
    const API_ROOT = rawApiUrl.endsWith("/api") ? rawApiUrl : `${rawApiUrl}/api`;

    const response = await fetch(`${API_ROOT}/queries`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(queryData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to submit query");
    }

    alert("Thank you! Your message has been received.");

    form.reset();

  } catch (error) {
    console.error("Contact form error:", error);

    alert(
      error.message ||
      "Unable to submit your message. Please try again."
    );
  }
}}
            >

             <div className="form-row">

  <div className="form-field full-width">
    <input
      type="text"
      name="name"
      placeholder="Your Name *"
      required
    />
  </div>

</div>

<div className="form-row">

  <div className="form-field full-width">
    <input
      type="tel"
      name="phone"
      placeholder="Your Phone Number *"
      required
    />
  </div>

</div>


              <div className="form-group">

                <div className="input-wrapper">

                  <FiList />

                  <select
                    name="subject"
                    defaultValue=""
                    required
                  >

                    <option value="" disabled>
                      Select Subject *
                    </option>

                    <option value="registration">
                      Registration
                    </option>

                    <option value="competition">
                      Competition
                    </option>

                    <option value="package">
                    Prices
                    </option>

                    <option value="general">
                      General Enquiry
                    </option>

                  </select>

                </div>

              </div>


              <div className="form-group">

                <div className="input-wrapper textarea-wrapper">

                  <FiMessageCircle />

                  <textarea
                    name="message"
                    placeholder="Your Message *"
                    rows="5"
                    required
                  ></textarea>

                </div>

              </div>


              {/* CLEAN SEND AREA */}

              <div className="contact-action">

                <button
                  type="submit"
                  className="contact-action-button"
                >

                  <span>
                    Send Message
                  </span>

                  <b>
                    →
                  </b>

                </button>


                <div className="contact-action-privacy">

                  <span className="privacy-circle">
                    ✓
                  </span>

                  <span>
                    Your information is safe with us. We respect your privacy.
                  </span>

                </div>

              </div>

            </form>

          </div>

        </div>


        <div className="contact-footer-line">
          ART&nbsp;&nbsp; • &nbsp;&nbsp;CULTURE&nbsp;&nbsp; • &nbsp;&nbsp;COMMUNITY
        </div>

      </section>

    </div>
  );
}


export default App;
