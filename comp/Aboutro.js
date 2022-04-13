import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
import Faq from "./Faqro";

export default function About() {
  return (
    <div>
      <section className="inner-banner">
        <div className="inner-text">
          <h1>About Us</h1>
          <nav aria-label="breadcrumb" class="sticky-header">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item active">About Us</li>
            </ol>
          </nav>
        </div>
        <div id="particles-1" class="particles"></div>
      </section>
      <div className="about-container">
        {/* <div className="About-section-title">
          <h2>About Us</h2>
          <p className="About-section_subtitle">
            dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et <br /> dolore magna aliqua. this dolor sit
            amet.
          </p>
        </div> */}
        <div className="features">
          <div
            className="features-left"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <div>
              <h4>
                Modern design with Essential <br /> Features
              </h4>
              <p class="text">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seiam{" "}
                <br />
                nonumy eirmod tempor invidunt ut labore et dolore magna <br />{" "}
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo <br /> duo dolores et ea rebum. Stet clita kasd gubergren,
                no sea takimata <br />
                sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
                amet,
                <br /> consetetur sadipscing.
              </p>
              <div class="mt-4 text-left">
                <Link className="white-btn" to="/">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          <div
            className="features-right"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <img src="./images/about1.svg" alt="about1"></img>
          </div>
        </div>
        <div className="features1">
          <div
            className="features1-left"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <img className="features1-img" src="./images/about2.svg"></img>
          </div>
          <div
            className="features1-right"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <div>
              <h4>
                Modern design with Essential <br /> Features
              </h4>
              <p class="text">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seiam{" "}
                <br />
                nonumy eirmod tempor invidunt ut labore et dolore magna <br />{" "}
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo <br /> duo dolores et ea rebum. Stet clita kasd gubergren,
                no sea takimata <br />
                sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
                amet,
                <br /> consetetur sadipscing.
              </p>
              <div class="mt-4 text-left">
                <Link className="white-btn" to="/">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Faq/>
    </div>
  );
}
