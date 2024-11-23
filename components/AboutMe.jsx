"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa"; // Importing an icon from react-icons
import { Button } from "react-scroll";
import TypingText from "./TypingText";
const AboutMe = ({ isActive }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true); // Make button visible after 2s
    }, 10000);

    // Cleanup timer if the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* For screens xl and above */}
      <motion.div
        initial={{ x: "100%", opacity: "0%" }}
        animate={{
          x: isActive ? "80%" : "0%", // Apply isActive only for large screens
          opacity: "100%",
        }}
        transition={{ duration: 1.5, delay: 1 }}
        className="w-full mx-auto order-2 xl:order-none text-white p-6 rounded-xl sm:m-6  shadow-[0_0_15px_5px_rgba(0,0,0,0.3)]
           xl:block hidden" // xl:block for large screens
      >
        <div className="flex items-center p-3 space-x-4 mb-4 ">
          <FaUser className="text-3xl text-accent" /> {/* Icon */}
          <h1 className="text-3xl font-bold text-white-800">About Me</h1>
        </div>

        <TypingText text="Welcome!, you must be new around here. Ok, so you already know my name, but to make sure you know who I am, here is a little secret..." />

        <div className="flex flex-col xl:flex-row gap-8 justify-end mb-6">
          <Button
            to="work"
            spy={true}
            smooth={true}
            duration={1000}
            offset={-100}
            className={`border border-[#ffd700] text-[#ffd700] rounded-full bg-transparent hover:text-black hover:bg-[#ffed00] p-4 flex justify-center items-center gap-2 transition-opacity duration-1000 ease-in-out ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className="px-6">Tell me about it !!</span>
          </Button>
        </div>
      </motion.div>

      {/* For screens smaller than xl */}
      <motion.div
        initial={{ x: "100%", opacity: "0%" }}
        animate={{
          x: "0%", // For smaller screens, no animation needed
          opacity: "100%",
        }}
        transition={{ duration: 1, delay: 1 }}
        className="mx-auto order-2 xl:order-none text-white p-2 rounded-lg shadow-[0_0_15px_5px_rgba(0,0,0,0.3)] xl:hidden block" // xl:hidden for smaller screens
      >
        <div className="flex items-center p-3 space-x-4">
          <FaUser className="text-3xl text-accent" /> {/* Icon */}
          <h1 className="text-3xl font-semibold text-black-800">About Me</h1>
        </div>
        <TypingText text="Welcome! You must be new around here. Ok, so you already know my name, but to make sure you know who I am, here is a little secret..." />
        <div className="flex flex-col xl:flex-row gap-8 justify-end mb-6">
          <Button
            to="work"
            spy={true}
            smooth={true}
            duration={1000}
            offset={-100}
            className={`border border-[#ffd700]  p-2 rounded-full bg-transparent hover:text-black hover:bg-[#ffed00] flex justify-center items-center gap-2 transition-opacity duration-1000 ease-in-out ${
              isVisible ? "opacity-100 visible" : "opacity-0 hidden"
            }`}
            aria-label="Learn more about me"
          >
            <span className="px-4 text-accent hover:text-black">
              Tell me about it !!
            </span>
          </Button>
        </div>
      </motion.div>
    </>
  );
};

export default AboutMe;
