import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <div className="container">
        <div className="contact-section-title text-center">
          <h2>Need Help? Say Hello</h2>
          <p className="contact-section_subtitle">
            dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et <br /> dolore magna aliqua. this dolor sit
            amet.
          </p>
        </div>
        <div className="contact-info mt-3">
          <div className="contacts">
            <div class="contact-info-icon contact1">
              <i class="lni lni-map-marker"></i>
            </div>
            <div class="contact-info-content contact1">
              <p>
                Elizabeth St, Melbourne
                <br />
                1202 Australia.
              </p>
            </div>
          </div>
          <div className="contacts">
            <div class="contact-info-icon contact2">
              <i class="lni lni-envelope"></i>
            </div>
            <div class="contact-info-content contact2">
              <p>info@example.com</p>
              <p>info@example.com</p>
            </div>
          </div>
          <div className="contacts">
            <div class="contact-info-icon contact3">
              <i class="lni lni-phone"></i>
            </div>
            <div class="contact-info-content contact3">
              <p>+333 789-321-654</p>
              <p>+333 985-458-609</p>
            </div>
          </div>
        </div>
        <div className="contact-main mt-2">
          <div className="contact-main-left"data-aos="fade-up" data-aos-duration="1500">
            <form className="contact-form">
              <div class="single-form form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  data-error="Name is required."
                  required="required"
                />
              </div>
              <div class="single-form form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  data-error="Valid email is required."
                  required="required"
                />
              </div>
              <div class="single-form form-group different">
                  <div>

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  data-error="Subject is required."
                  required="required"
                  />
                  </div>
                <div>

                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  data-error="Phone is required."
                  required="required"
                  />
                  </div>
              </div>
              <div class="single-form form-group">
                <textarea
                  placeholder="Your Mesaage"
                  name="message"
                  data-error="Please, leave us a message."
                  required="required"
                ></textarea>
              </div>
              <div className="single-form form-group text-center">
              <button type="submit" className="contact-main-btn">Send Message</button>
              </div>
            </form>
          </div>
          <div className="contact-main-right"data-aos="fade-up" data-aos-duration="1500">
            <iframe
              className="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29615915.60163266!2d115.17781997658622!3d-25.026468737800016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2b2bfd076787c5df%3A0x538267a1955b1352!2sAustralia!5e0!3m2!1sen!2sin!4v1587464040031!5m2!1sen!2sin"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
