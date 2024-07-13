// AboutPage.js
import React from "react";
import { motion, AnimatePresence } from 'framer-motion';
import "../css/aboutpage.css";
import IconsComponent from '../Components/MenuList';
import { slideUpEaseInOut } from "../Components/animationUtils";

function AboutPage({ isMenuOpen }) {
  return (
    console.log('im here'),
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={slideUpEaseInOut}
          className="about"
        >
          <div className="about-grid">
            <div className="about-grid-left">
              <div className="about-text">
                     Bank of the Southwesternlands has been a cornerstone of financial
                     stability and community growth in our region for over seven decades. <br/>  <br/>
                     Founded in 1952 by local visionaries who saw the need for a
                     financial institution that truly understood the unique challenges
                     and opportunities of our southwestern landscape, we have grown
                     alongside the communities we serve.  <br/>  <br/>
                     Our roots run deep in the red
                     soil and rugged terrain of this land, much like the hardy mesquite
                     and steadfast saguaro that dot our horizon.   <br/><br/>We pride ourselves on
                     combining the warmth of neighborly service with cutting-edge
                     financial solutions, ensuring that whether you're a rancher, a tech
                     startup, or a growing family, your financial needs are met with
                     expertise and care. <br/>  <br/>At Bank of the Southwesternlands, we believe in
                     more than just safeguarding your money; we invest in the dreams and
                     aspirations of our region.  <br/>From financing local businesses to
                     supporting community initiatives, we are committed to fostering
                     prosperity and resilience in every town and city we call home.  <br/> <br/>As we
                     look to the future, we remain dedicated to our founding principles
                     of integrity, innovation, and community partnership. Join us in
                     building a brighter, more prosperous Southwesternlands, where your
                     financial success is our highest priority.
              </div>
            </div>
            <div className="about-grid-right">
              <div className="img-grid">
              </div>
              <IconsComponent />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default AboutPage;