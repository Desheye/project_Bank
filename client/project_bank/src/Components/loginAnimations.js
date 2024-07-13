// loginAnimations.js
import { useAnimation } from "framer-motion";

export const useLoginAnimations = () => {
  const loginBoxAnimation = useAnimation();
  const signupBoxAnimation = useAnimation();
  const signupFormAnimation = useAnimation();
  const loginGridAnimation = useAnimation();

  const triggerAnimations = () => {
    // Y-axis animations for loginbox and signup-Box
    loginBoxAnimation.start({ y: '20%', transition: { duration: 5 } });
    signupBoxAnimation.start({ y: '-20', transition: { duration: 5 } });

    // X-axis animations for signupbox and login-grid
    signupFormAnimation.start({ x: '20%', transition: { duration: 5 } });
    loginGridAnimation.start({ x: '-10%', transition: { duration: 5 } });

    // Swap the positions of containerA and containerB after animations
    setTimeout(() => {
      document.querySelector('.containerA').style.transform = 'translateY(-100%)';
      document.querySelector('.containerB').style.transform = 'translateY(100%)';
    }, 1000);
  };

  return {
    loginBoxAnimation,
    signupBoxAnimation,
    signupFormAnimation,
    loginGridAnimation,
    triggerAnimations
  };
};
