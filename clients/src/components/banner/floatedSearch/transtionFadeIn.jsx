export function fadeIn() {
  return {
    hidden: {
      y: 100,
      opacity: 0,
      x: 0,
      transition: {
        type: "tween",
        duration: 0.6,
        delay: 0.5,
        ease: [0.25],
      },
    },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.6,
        delay: 0.5,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
}
