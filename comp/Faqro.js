import React from "react";
import "./Faq.css";
import { Link } from "react-router-dom";

export default function Faq() {
  return (
    <div>
       <section className="inner-banner">
    <div className="inner-text">
      <h1>FAQ'S</h1>
      <nav aria-label="breadcrumb" class="sticky-header">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active">FAQ'S</li>
        </ol>
      </nav>
    </div>
    <div id="particles-1" class="particles"></div>
  </section>
  
    <div className="faq-container">
      <div className="container">
        {/* <div className="faq-section-title text-center">
          <h2>Frequently Asked</h2>
          <p className="faq-section_subtitle">
            dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et <br /> dolore magna aliqua. this dolor sit
            amet.
          </p>
        </div> */}
        <div className="faq-main mt-4">
          <div className="faq-accordion">
            <div className="accordion" data-aos="fade-right" data-aos-duration="1000" id="accordionExample">
              <div className="card">
                <h2 className="card-header" id="headingOne">
                  <Link
                   to="/"
                    className="collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Frequently asked question one
                  </Link>
                </h2>
                <div
                  id="collapseOne"
                  className=" collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="card-body">
                  <p className="text">Morbi vehicula arcu et pellentesque tincidunt. Nunc ligula nulla, lobortis a elementum non, vulputate ut arcu. Aliquam erat volutpat. Nullam lacinia felis.</p>
                  </div>
                </div>
              </div>

              <div className="card">
                <h2 className="card-header" id="headingTwo">
                  <Link
                   to="/"
                    className=" collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Frequently asked question two
                  </Link>
                </h2>
                <div
                  id="collapseTwo"
                  className="collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="card-body">
                  <p className="text">Morbi vehicula arcu et pellentesque tincidunt. Nunc ligula nulla, lobortis a elementum non, vulputate ut arcu. Aliquam erat volutpat. Nullam lacinia felis.</p>
                  </div>
                </div>
              </div>

              <div className="card">
                <h2 className="card-header" id="headingThree">
                  <Link
                  to="/"
                    className="collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Frequently asked question three
                  </Link>
                </h2>

                <div
                  id="collapseThree"
                  className=" collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="card-body">
                  <p className="text">Morbi vehicula arcu et pellentesque tincidunt. Nunc ligula nulla, lobortis a elementum non, vulputate ut arcu. Aliquam erat volutpat. Nullam lacinia felis.</p>
                  </div>
                </div>
              </div>

              <div className="card">
                <h2 className="card-header" id="headingFour">
                  <Link
                   to="/"
                    className=" collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    Frequently asked question Four
                  </Link>
                </h2>
                <div
                  id="collapseFour"
                  className="collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordionExample"
                >
                  <div className="card-body">
                  <p className="text">Morbi vehicula arcu et pellentesque tincidunt. Nunc ligula nulla, lobortis a elementum non, vulputate ut arcu. Aliquam erat volutpat. Nullam lacinia felis.</p>
                  </div>
                </div>
              </div>

              <div className="card">
                <h2 className="card-header" id="headingFive">
                  <Link
                   to="/"
                    className=" collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    Frequently asked question Five
                  </Link>
                </h2>
                <div
                  id="collapseFive"
                  className="collapse"
                  aria-labelledby="headingFive"
                  data-bs-parent="#accordionExample"
                >
                  <div className="card-body">
                  <p className="text">Morbi vehicula arcu et pellentesque tincidunt. Nunc ligula nulla, lobortis a elementum non, vulputate ut arcu. Aliquam erat volutpat. Nullam lacinia felis.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="faq-img">
          <img src="images/faq.svg" className="faq-image" data-aos="fade-left" data-aos-duration="1000" alt="faq"/>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
