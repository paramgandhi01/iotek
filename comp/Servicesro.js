import React from "react";
import "./Services.css";
import {Link} from "react-router-dom";
import Particlebg from "../components/Particlebg";
import Particles from "react-tsparticles";

export default function Services() {
  return (
    <div>
    <section className="inner-banner">
    <div className="inner-text">
      <h1>Services</h1>
      <nav aria-label="breadcrumb" class="sticky-header">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active">Services</li>
        </ol>
      </nav>
    </div>
    {/* <div id="services-js"><Particles/></div> */}
  </section>
    <div className="services-section">
      <div className="section-title">
       <h2>Business Services</h2>
        <p className="section_subtitle">
          We serve small and medium sized companies in all tech related
          industries with high quality <br /> growth services which are
          presented below
        </p>
      </div>
      <div className="services">
        <div className="services-1"data-aos="fade-up" data-aos-delay="200" data-aos-duration="1500">
          <div className="services-title-icon">
            <div className="services-icon">
              <i className="lni lni-brush"></i>
            </div>

            <div className="services-title-name">
            <h4 className="services-title">
              Unique
              <br />
              UI/UX Design
            </h4>
            </div>
          </div>
          <div className="services-content">
            <p className="text">
              Short description for the ones who <br/> look for something new. Short <br/>
              description for the ones who look for <br/> something new.
            </p>
            <Link className="services-btn" to="/">
              Learn More
            </Link>
          </div>
        </div>
        <div className="services-2"data-aos="fade-up" data-aos-delay="400" data-aos-duration="1500">
        <div className="services-title-icon">
            <div className="services-icon">
              <i className="lni lni-layout"></i>
            </div>

            <div className="services-title-name">
            <h4 className="services-title">
              Theme
              <br />
              Development
            </h4>
            </div>
          </div>
          <div className="services-content">
            <p className="text">
              Short description for the ones who <br/> look for something new. Short <br/>
              description for the ones who look for <br/> something new.
            </p>
            <Link className="services-btn" to="/">
              Learn More
            </Link>
          </div>
        </div>
        <div className="services-3"data-aos="fade-up" data-aos-delay="600" data-aos-duration="1500">
        <div className="services-title-icon">
            <div className="services-icon">
              <i className="lni lni-bolt"></i>
            </div>

            <div className="services-title-name">
            <h4 className="services-title">
              Digital
              <br />
              Marketing
            </h4>
            </div>
          </div>
          <div className="services-content">
            <p className="text">
              Short description for the ones who <br/> look for something new. Short <br/>
              description for the ones who look for <br/> something new.
            </p>
            <Link className="services-btn" to="/">
              Learn More
            </Link>
          </div>
        </div>
      </div>
      <div className="services">
        <div className="services-1"data-aos="fade-up" data-aos-delay="200" data-aos-duration="1500">
          <div className="services-title-icon">
            <div className="services-icon">
              <i className="lni lni-rocket"></i>
            </div>

            <div className="services-title-name">
            <h4 className="services-title">
              Website
              <br />
              Design
            </h4>
            </div>
          </div>
          <div className="services-content">
            <p className="text">
              Short description for the ones who <br/> look for something new. Short <br/>
              description for the ones who look for <br/> something new.
            </p>
            <Link className="services-btn" to="/">
              Learn More
            </Link>
          </div>
        </div>
        <div className="services-2"data-aos="fade-up" data-aos-delay="400" data-aos-duration="1500">
        <div className="services-title-icon">
            <div className="services-icon">
              <i className="lni lni-layers"></i>
            </div>

            <div className="services-title-name">
            <h4 className="services-title">
            Responsive
              <br />
              Design
            </h4>
            </div>
          </div>
          <div className="services-content">
            <p className="text">
              Short description for the ones who <br/> look for something new. Short <br/>
              description for the ones who look for <br/> something new.
            </p>
            <Link className="services-btn" to="/">
              Learn More
            </Link>
          </div>
        </div>
        <div className="services-3" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1500">
        <div className="services-title-icon">
            <div className="services-icon">
              <i className="lni lni-envelope"></i>
            </div>

            <div className="services-title-name">
            <h4 className="services-title">
              Quick
              <br />
              Support
            </h4>
            </div>
          </div>
          <div className="services-content">
            <p className="text">
              Short description for the ones who <br/> look for something new. Short <br/>
              description for the ones who look for <br/> something new.
            </p>
            <Link className="services-btn" to="/">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
