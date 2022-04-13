import React from 'react';
import {Link} from "react-router-dom";
import "./Portfolio.css";

export default function Portfolioro() {
  return (
    <div>
              <section className="inner-banner">
        <div className="inner-text">
          <h1>Portfolio</h1>
          <nav aria-label="breadcrumb" class="sticky-header">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item active">Portfolio</li>
            </ol>
          </nav>
        </div>
        <div id="particles-1" class="particles"></div>
      </section>
    </div>
  )
}
