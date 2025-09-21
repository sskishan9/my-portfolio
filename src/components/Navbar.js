import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      if (isOpen) setIsOpen(false); // Close hamburger when scrolling
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">Sameer Kishan</div>

      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <Link activeClass="active" to="about" smooth={true} duration={500} spy={true} onClick={() => setIsOpen(false)}>About</Link>
        <Link activeClass="active" to="skills" smooth={true} duration={500} spy={true} onClick={() => setIsOpen(false)}>Skills</Link>
        <Link activeClass="active" to="projects" smooth={true} duration={500} spy={true} onClick={() => setIsOpen(false)}>Projects</Link>
        <Link activeClass="active" to="experience" smooth={true} duration={500} spy={true} onClick={() => setIsOpen(false)}>Experience</Link>
        <Link activeClass="active" to="achievements" smooth={true} duration={500} spy={true} onClick={() => setIsOpen(false)}>Achievements</Link>
        <Link activeClass="active" to="contact" smooth={true} offset={-70} duration={500} spy={true} onClick={() => setIsOpen(false)}>Contact</Link>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
      </div>
    </nav>
  );
};

export default Navbar;
