import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Servicesro from "./comp/Servicesro";
import Aboutro from "./comp/Aboutro";
import Pricingro from "./comp/Pricingro";
import Footer from "./components/Footer";
import Faqro from "./comp/Faqro";
import Contactro from "./comp/Contactro";
import Portfolioro from "./comp/Portfolioro";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes> 
      <Route path="/" element={<Home/>} />
      <Route path="/Services" element={<Servicesro/>} />
      <Route path="/About" element={<Aboutro/>} />
      <Route path="/Pricing" element={<Pricingro/>} />
      <Route path="/Faq" element={<Faqro/>} />
      <Route path="/Contact" element={<Contactro/>} />
      <Route path="/Portfolio" element={<Portfolioro/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
