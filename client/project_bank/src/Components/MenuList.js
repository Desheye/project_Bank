import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaInfoCircle, FaUser, FaEnvelope, FaBriefcase } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../css/menu-list.css';

const IconsComponent = () => {
  return (
    <Container>
      <Row className="menu-lists">
      <Link to="/about" className="col-link">
          <Col xs={4} sm={3} md={2} className="text-center">
            <FaInfoCircle size={20} />
            <p>About</p>
          </Col>
        </Link>

        <Link to="/account" className="col-link">
        <Col xs={4} sm={3} md={2} className="text-center">
          <FaUser size={20} />
          <p>Accounts</p>
        </Col>
        </Link>

        <Link to="/contact" className="col-link">
        <Col xs={4} sm={3} md={2} className="text-center">
          <FaEnvelope size={20} />
          <p>Contact Us</p>
        </Col>
        </Link>

        <Link to="#" className="col-link">
        <Col xs={4} sm={3} md={2} className="text-center">
          <FaBriefcase size={20} />
          <p>Careers</p>
        </Col>
        </Link>
      </Row>
    </Container>
  );
};

export default IconsComponent;