import { motion } from "framer-motion";

const stairAnimation = {
  initial: { bottom: "0%" },
  animate: { bottom: "100%" },
  exit: { bottom: "0%" },
};

// Helper to calculate reserved index for staggered effect
const reserveIndex = (index) => {
  const totalStep = 6;
  return totalStep - index - 1;
};

const Stair = () => (
  <>
    {[...Array(6)].map((_, index) => (
      <motion.div
        key={index}
        variants={stairAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          duration: 0.4,
          delay: reserveIndex(index) * 0.1,
          ease: "easeInOut",
        }}
        className="h-full w-full bg-white relative"
      />
    ))}
  </>
);

export default Stair;
