// Navigate.js
import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../css/Navbar.css';

function Navigate({ isMenuOpen, toggleMenu }) {
  return (
    <Navbar expand="lg" className='nav-grid'>
      <Container fluid>
        <Navbar.Brand href="#home" className='brand'>Bank Of The SouthWesternLands</Navbar.Brand>
        <button onClick={toggleMenu} className="icon-button" aria-label="Menu">
          {isMenuOpen ? <FaTimes className="icon" /> : <FaBars className="icon" />}
        </button>
      </Container>
    </Navbar>
  );
}

export default Navigate;