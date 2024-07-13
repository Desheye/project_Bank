// animationUtils.js
export const slideUpAnimation = {
  initial: { y: "100vh", opacity: 0 },
  animate: { y: 100, opacity: 1 },
  exit: { y: "100vh", opacity: 0 },
  transition: { type: "spring", stiffness: 100, damping: 10 },
};
// animationUtils.js

export const slideUpLinear = {
  initial: { y: "-100%%", opacity: 1 },
  animate: { y: 0, opacity: 1 },
  exit: { y: "100%", opacity: 0 },
  transition: { type: "tween", ease: "easeInOut", duration: 8, },
};

export const slideUpEaseInOut = {
  initial: { x: "-100%", opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: "100%", opacity: 0 },
  transition: {
    type: "spring",
    stiffness: 10,
    damping: 10,
    mass: 5,
    duration: 1000
  },
};

// animationUtils.js
export const slideUpCustomBezier = {
  initial: { y: "-20%", opacity: 1 },
  animate: { y: 0, opacity: 1 },
  exit: { y: "100%", opacity: .3 },
  transition: { type: "tween", ease: [0.6, 0.01, -0.05, 1], duration: 2 },
};

export const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

export const fadeInAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: .7 },
};
