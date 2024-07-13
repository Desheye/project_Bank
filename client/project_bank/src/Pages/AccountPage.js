// AccountPage.js
import React from 'react';
import '../css/accountpage.css';
import IconsComponent from '../Components/MenuList';
import UserLogin from '../Components/UserLogin';
import { slideUpCustomBezier } from '../Components/animationUtils';
import { motion as m, AnimatePresence } from 'framer-motion';

function AccountPage({ isMenuOpen }) {
  console.log('im here too');
  
  return (
    <AnimatePresence>
      {isMenuOpen && (
        <m.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={slideUpCustomBezier}
          className='account'>
          <div className='account-grid'>
            <div className='account-type'>
              <h3>Open Account</h3>
            </div>
            <div className='internet-banking'>
              <h3>Sign-In To Your Account</h3>
            </div>
          </div>
          <button className='login-btn'>Accounts ?</button>
          <IconsComponent />
          <UserLogin />
        </m.div>
      )}
    </AnimatePresence>
  );
}

export default AccountPage;
