export const textVariants = (delay: number, duration: number = 0.5) => ({
  y: 0,
  opacity: 1,
  transition: {
    delay,
    duration,
    type: "tween",
  },
});
export const imgVariants = (delay: number, duration: number = 0.5) => ({
  y: 0,
  opacity: 1,
  transition: {
    delay,
    duration,
  },
});
