import React from 'react';
import {Link} from "react-router-dom";
import "./Footer.css";
import Particlebg from './Particlebg';
import "../js/bttop";

//  import Particles from 'react-particles-js';

export default function Footer() {
  return (
    <footer>
    <div className="footer-container">
        <div className='footer-main'>   
                <div className="footer-logo text-center">
                    <Link to="/"><img src="/images/logo.svg" alt="Logo"/></Link>
                </div>

                <div className="footer-support mt-4">
                    <div className='text-center'>+8801234567890</div>
                    <div className='text-center'>support@uideck.com</div>
                </div>

                <div>
                <ul className="social text-center mt-4">
                    <li><Link to="/https://www.facebook.com/"><i className="lni lni-facebook-filled"></i></Link></li>
                    <li><Link to="/https://twitter.com/"><i className="lni lni-twitter-original"></i></Link></li>
                    <li><Link to="/https://instagram.com/"><i className="lni lni-instagram-original"></i></Link></li>
                    <li><Link to="/"><i className="lni lni-linkedin-original"></i></Link></li>
                </ul>
                </div>

                <div className="copyright text-center mt-4">
                    <h6>2022 © itotek. Design by Setblue.</h6>
                </div>
        </div> 
        <div id='particles-js'><Particlebg/></div>   
        <Link to="#" className="back-to-top"><i class="lni lni-chevron-up"></i></Link> 
    </div>  
</footer>
  )
}
