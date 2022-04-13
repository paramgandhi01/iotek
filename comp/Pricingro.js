import React from "react";
import "./Pricing.css";
import {Link} from "react-router-dom";
export default function Pricing() {
  return (
    <div>
      <section className="inner-banner">
    <div className="inner-text">
      <h1>Pricing</h1>
      <nav aria-label="breadcrumb" class="sticky-header">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active">Pricing</li>
        </ol>
      </nav>
    </div>
    <div id="particles-1" class="particles"></div>
  </section>
      <div className="container1">
        {/* <div className="Pricing-section-title">
          <h2>Our Pricing</h2>
          <p className="Pricing-section_subtitle">
            dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et <br /> dolore magna aliqua. this dolor sit
            amet.
          </p>
        </div> */}
        <div className="pricing-cards">
          <div className="pricing-card1 wow fadeInUp" data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
            <div className="prices">
              <div>
                <p>Starter</p>
                <h5>$199</h5>
                <p>per year</p>
              </div>
            </div>
            <div className="lists">
              <div>

              <ul>
                <li>
                  <i class="lni lni-arrow-right-circle"></i> Carefully crafted
                  components
                </li>
                <li>
                  <i class="lni lni-arrow-right-circle"></i> Amazing page
                  examples
                </li>
                <li>
                  <i class="lni lni-arrow-right-circle"></i> Super friendly
                  support team
                </li>
                <li>
                  <i class="lni lni-arrow-right-circle"></i> Awesome Support
                </li>
              </ul>
              </div>
            </div>
            <div className="p-btn">
              <div>

            <a class="price-btn" href="#">Get Started</a>
              </div>
            </div>
          </div>
          <div className="pricing-card2 wow fadeInUp" data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
            <div className="prices">
              <div>
                <p>Professional</p>
                <h5>$599</h5>
                <p>per year</p>
              </div>
            </div>
            <div className="lists">
              <div>

              <ul>
                <li>
                  <i class="lni lni-arrow-right-circle"></i> Carefully crafted
                  components
                </li>
                <li>
                  <i class="lni lni-arrow-right-circle"></i> Amazing page
                  examples
                </li>
                <li>
                  <i class="lni lni-arrow-right-circle"></i> Super friendly
                  support team
                </li>
                <li>
                  <i class="lni lni-arrow-right-circle"></i> Awesome Support
                </li>
              </ul>
              </div>
            </div>
            <div className="p-btn">
              <div>

            <a class="price-btn" href="#">Get Started</a>
              </div>
            </div>
          </div>
          <div className="pricing-card3 wow fadeInUp" data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
            <div className="prices">
              <div>
                <p>Business</p>
                <h5>$799</h5>
                <p>per year</p>
              </div>
            </div>
            <div className="lists">
              <div>

              <ul>
                <li>
                  <i class="lni lni-arrow-right-circle"></i> Carefully crafted
                  components
                </li>
                <li>
                  <i class="lni lni-arrow-right-circle"></i> Amazing page
                  examples
                </li>
                <li>
                  <i class="lni lni-arrow-right-circle"></i> Super friendly
                  support team
                </li>
                <li>
                  <i class="lni lni-arrow-right-circle"></i> Awesome Support
                </li>
              </ul>
              </div>
            </div>
            <div className="p-btn">
              <div>

             <a class="price-btn" href="#">Get Started</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
