import React from "react";
import "./Home.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Services from "./Services";
import About from "./About";
import Pricing from "./Pricing";
import Footer from "./Footer";
import Faq from "./Faq";
import Team from "./Team";
import Testimonial from "./Testimonial";
import Brands from "./Brands";
import Contact from "./Contact";
import Particlebg from './Particlebg';

export default function Home() {
  return (
    <div>
      {/* <Navbar/> */}
      <div className="home">
        <div className="container">
          <div className="container-home">
          <div className="home-1" data-aos="fade-up" data-aos-duration="1500">
            <div>
              <h1 className="title">
                Business is <br /> Now Digital
              </h1>
              <p className="text">
                We blend insights and strategy to create digital products <br />{" "}
                for forward-thinking organisations.
              </p>
              <div className="mt-4">
                <Link className="main-btn-home" to="/">
                  Download
                </Link>
              </div>
            </div>
          </div>
          <div className="home-2"data-aos="fade-up" data-aos-duration="1500">
            <div>
              <img className="home-img" src="images/banner-image.png"></img>
            </div>
          </div>
          {/* <img  className="header-shape" src="images/header-shape.svg" /> */}
          </div>
        </div>
        {/* <div id='home-js'><Particlebg/></div>   */}
      </div>
      <Services />
      <About />
      <Pricing />
      <Team />
      <Testimonial />
      <Faq />
      <Contact />
      <Brands />
    </div>
  );
}
