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

      <section id="home" className="hero-section">

        <div className="hero-container">

          <div className="hero-content">

            <div className="hero-eyebrow">
              <span></span>
              LET CREATIVITY BLOSSOM
              <span></span>
            </div>

            <h1>Rangavallika</h1>

            <h2>RANGOLI FEST</h2>

            <p className="hero-script">
              Draw your imagination.
              <br />
              <span>Color the world.</span>
            </p>


            <div className="hero-info">

              <div className="hero-info-item">
                <div className="info-text">
                  <small>Event Date</small>

                  <strong>
                    14th January
                    <br />
                    2027
                  </strong>
                </div>
              </div>

              <div className="info-divider"></div>

              <div className="hero-info-item">
                <div className="info-text">
                  <small>Competition</small>

                  <strong>
                    Rangoli
                    <br />
                    Competition
                  </strong>
                </div>
              </div>

              <div className="info-divider"></div>

              <div className="hero-info-item">
                <div className="info-text">
                  <small>Registration</small>

                  <strong>
                    Online
                    <br />
                    Registration
                  </strong>
                </div>
              </div>

            </div>


            <div className="hero-buttons">

              <button
                className="primary-button"
                onClick={goRegister}
              >
                Register Now
                <span>→</span>
              </button>

              <a
                href="#guidelines"
                className="secondary-button"
              >
                View Guidelines
              </a>

  <button
  type="button"
  className="existing-registration-button"
  onClick={() => {
    window.location.href = "/register?continue=existing";
  }}
>
  <span className="existing-registration-content">
    <span className="existing-registration-top">
      Already registered?
    </span>

    <span className="existing-registration-bottom">
      Continue Existing Registration
    </span>
  </span>

  <span className="existing-registration-arrow">
    →
  </span>
</button>

            </div>

          </div>


          <div className="hero-art">

            <div className="art-glow"></div>

            <img
              src="/hero-rangoli.png"
              alt="Rangavallika Rangoli"
              className="main-rangoli"
            />

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

      <section id="about" className="about-section">

        <div className="about-container">

          <div className="about-content">

            <div className="section-label">
              ABOUT US
            </div>

            <h2>
              About <span>Rangavallika</span>
            </h2>

            <h3>
              Celebrating creativity,
              <br />
              tradition & expression.
            </h3>

            <p>
              Rangavallika Rangoli Fest is a celebration of
              creativity, Indian tradition and women's artistic
              expression, organized by{" "}
              <strong>
                Give Laurels Foundation of India.
              </strong>
            </p>

            <p>
              The event brings together women from different
              walks of life to showcase their talent, preserve
              our cultural heritage and share the beauty of
              Rangoli art.
            </p>

            <p>
              Through Rangavallika, Give Laurels Foundation of
              India continues its mission of creating
              opportunities, encouraging creativity and
              empowering women to contribute to a more
              inclusive and vibrant community.
            </p>

            <div className="about-signature">
              Art connects hearts
              <span>♥</span>
            </div>

          </div>


          <div className="about-values">

            <div className="value-item value-pink">
              <strong>
                Celebrating
                <br />
                Tradition
              </strong>

              <p>
                Honouring India's rich cultural heritage
                through the timeless art of Rangoli.
              </p>
            </div>


            <div className="value-item value-teal">
              <strong>
                Encouraging
                <br />
                Creativity
              </strong>

              <p>
                Providing women with a platform to express
                their imagination, creativity and talent.
              </p>
            </div>


            <div className="value-item value-gold">
              <strong>
                Empowering
                <br />
                Women
              </strong>

              <p>
                Creating opportunities for women to showcase
                their skills and celebrate their achievements.
              </p>
            </div>


            <div className="value-item value-green">
              <strong>
                Building
                <br />
                Community
              </strong>

              <p>
                Bringing people together through art, culture,
                creativity and shared experiences.
              </p>
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
