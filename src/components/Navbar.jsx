import React, { useState, useEffect } from 'react';
import logoImg from "../assets/image.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto'; 
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isNavOpen]);

  return (
    <nav className="navbar mb-2">
      <div className="logo-container">
        <img src={logoImg} alt="Logo" style={{ height: "100px" }} />
      </div>

      {/* Only on large screens */}
      <div className="navbar-wrapper">
        <ul className="nav-menu poppins-regular navitems-lg-scr">
          <li><a href="#home">Home</a></li>
          <li><a href="#for-team">For Team</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#why-us">Why Us</a></li>
          <li><a href="#share">Share</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#testimonials">Testimonial</a></li>
        </ul>

        <div className="cta-buttons navitems-lg-scr">
          <button className="btn-login">Login</button>
          <button className="btn-team">Onetag for teams</button>
        </div>

        {/* Burger icon for small screens */}
        <div className="toggler">
          <button className="btn-toggler" onClick={toggleNav}>
            <FontAwesomeIcon icon={faBars}/>
          </button>
        </div>
      </div>

      {/* Mobile Navbar - Only visible when isNavOpen is true */}
      {isNavOpen && (
        <div className="navbar-overlayed">   
        <div className='close-button p-2'>
        <button className="btn-close" onClick={toggleNav}>
            <FontAwesomeIcon icon={faClose}/>
          </button>
        </div> 
          <ul className="nav-menu poppins-semibold">
            <li><a href="#home">Home</a></li>
            <li><a href="#for-team">For Team</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#why-us">Why Us</a></li>
            <li><a href="#share">Share</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#testimonials">Testimonial</a></li>
          </ul>

          <div className="cta-buttons">
            <button className="btn-login">Login</button>
            <button className="btn-team">Onetag for teams</button>
          </div>
        </div>
      )}
    </nav>
  );
}
