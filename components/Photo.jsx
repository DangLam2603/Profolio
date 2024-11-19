"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = ({ isActive }) => {
  return (
    <div className="w-full h-full relative flex justify-center items-center">
      {/* For screens xl and above */}
      <motion.div
        initial={{ x: "100%", opacity: "0%" }}
        animate={{
          x: isActive ? "-140%" : "0%", // Apply isActive only for large screens
          opacity: "100%",
        }}
        transition={{ duration: 1, delay: isActive ? 0.3 : 1.5 }}
        className="relative w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] z-10 xl:block hidden overflow-hidden rounded-full"
      >
        <Image
          src="/assets/photo.png"
          sizes="2xl"
          priority
          quality={100}
          fill
          alt="photo"
          className="rounded-full object-cover object-center border-4 border-transparent"
        />
        {/* Motion circle around the image */}
        <motion.svg
          className="absolute top-0 left-0 w-full h-full"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253" // Center the circle in the SVG
            cy="253" // Center the circle in the SVG
            r="245" // Make radius slightly smaller to fit within the image
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>

      {/* For screens smaller than xl */}
      <motion.div
        initial={{ x: "100%", opacity: "0%" }}
        animate={{
          x: "0%", // For smaller screens, no animation on x
          opacity: "100%",
        }}
        transition={{ duration: 1, delay: 1 }}
        className="relative w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] z-10 xl:hidden block overflow-hidden rounded-full"
      >
        <Image
          src="/assets/photo.png"
          sizes="2xl"
          priority
          quality={100}
          fill
          alt="photo"
          className="rounded-full object-cover object-center border-4 border-transparent"
        />
        {/* Motion circle around the image */}
        <motion.svg
          className="absolute top-0 left-0 w-full h-full"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253" // Center the circle in the SVG
            cy="253" // Center the circle in the SVG
            r="245" // Make radius slightly smaller to fit within the image
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
