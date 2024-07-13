// Main.js
import React, { useState } from 'react';
import './Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navigate from './Components/Navigate';
//import UserLogin from './Components/UserLogin';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import AccountPage from './Pages/AccountPage';
import ContactPage from './Pages/ContactPage';

function Main() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
    navigate('/main-grid');
  }

  return (
    <div className="Main-Container">
      <header>
        <h1>Bank Of The SouthWesternLands</h1>
      </header>
      <Navigate isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <Routes>
        <Route path="/main-grid" element={<HomePage isMenuOpen={isMenuOpen} />} />
        <Route path="/about" element={<AboutPage isMenuOpen={isMenuOpen} />} />
        <Route path="/account" element={<AccountPage isMenuOpen={isMenuOpen}/>} />
        <Route path="/contact" element={<ContactPage isMenuOpen={isMenuOpen} />} />
      </Routes>
    </div>
  );
}

export default Main;