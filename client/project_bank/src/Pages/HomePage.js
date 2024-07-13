// HomePage.js
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../css/homepage.css';
import { slideUpLinear, staggerChildren, fadeInAnimation } from '../Components/animationUtils';

function HomePage({ isMenuOpen }) {
  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          className='main-grid'
          variants={ slideUpLinear }
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <motion.div className="menu-list" variants={staggerChildren}>
            <motion.h2 variants={fadeInAnimation}>
            <Link to="/about" className='menu-link'>About Us</Link>
            </motion.h2>
            <motion.h2 variants={fadeInAnimation}>
            <Link to="/account" className='menu-link'>Account</Link>
            </motion.h2>
            <motion.h2 variants={fadeInAnimation}>
            <Link to="/contact" className='menu-link'>Contact Us</Link>
            </motion.h2>
            <motion.h1 variants={fadeInAnimation}>Career</motion.h1>
          </motion.div>
          <motion.div className="location" variants={fadeInAnimation}>
            <div className="cards">
              <div className="header">Lagos</div>
              <div className="address">117, Broad Street Lagos Island, Nigeria</div>
            </div>
            <div className="cards">
              <div className="header">Ibadan</div>
              <div className="address">Plot 7A, Queen Cinema Dugbe - Ibadan, Nigeria</div>
            </div>

            <div className="cards">
              <div className="header">Ondo</div>
              <div className="address">230, Obafemi  Awolowo Way - Alagbaka , Akure - Ondo, Nigeria</div>
            </div>

            <div className="cards">
              <div className="header">Oshogbo</div>
              <div className="address">23, New Ikirun Road, Aiyetoro - Osun, Nigeria</div>
            </div>

            <div className="cards">
              <div className="header">Ekiti</div>
              <div className="address"> 45, Ado Central Business District, Ekiti, Nigeria</div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default HomePage;