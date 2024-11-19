"use client";
import { motion } from "framer-motion";
import { FaUser } from "react-icons/fa"; // Importing an icon from react-icons

const AboutMe = ({ isActive }) => {
  return (
    <>
      {/* For screens xl and above */}
      <motion.div
        initial={{ x: "100%", opacity: "0%" }}
        animate={{
          x: isActive ? "80%" : "0%", // Apply isActive only for large screens
          opacity: "100%",
        }}
        transition={{ duration: 1, delay: 1 }}
        className="mx-auto order-2 xl:order-none text-white p-6 rounded-lg shadow-lg xl:block hidden" // xl:block for large screens
      >
        <div className="flex items-center space-x-4">
          <FaUser className="text-4xl text-indigo-600" /> {/* Icon */}
          <h1 className="text-3xl font-semibold text-white-800">About Me</h1>
        </div>
        <p className="mt-4 text-lg text-white">
          Hi, I’m Dang! I’m passionate about building software that makes a real
          difference in people’s lives. I’m currently studying Software
          Engineering at FPT University, and I’m excited to apply what I’ve
          learned to real-world projects. I’m experienced in .NET and Java, with
          a focus on creating scalable backend solutions, but I also enjoy
          diving into UI/UX design for frontend apps. Right now, my goal is to
          grow my skills in backend technologies and cloud platforms, while
          contributing to meaningful projects. In the long run, I’d love to
          become a lead developer or solutions architect, creating innovative
          solutions that tackle tough challenges and help shape the future of
          tech.
        </p>
        <div className="mt-6 flex items-center space-x-4">
          <ul className="flex space-x-3">
            <li className="bg-green-500 text-white px-3 py-1 rounded-full">
              ReactJS
            </li>
            <li className="bg-green-500 text-white px-3 py-1 rounded-full">
              AWS
            </li>
            <li className="bg-green-500 text-white px-3 py-1 rounded-full">
              .NET
            </li>
          </ul>
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
        className="mx-auto order-2 xl:order-none text-white p-6 rounded-lg shadow-lg xl:hidden block" // xl:hidden for smaller screens
      >
        <div className="flex items-center space-x-4">
          <FaUser className="text-4xl text-indigo-600" /> {/* Icon */}
          <h1 className="text-3xl font-semibold text-white-800">About Me</h1>
        </div>
        <p className="mt-4 text-lg text-white">
          Hi, I’m Dang! I’m passionate about building software that makes a real
          difference in people’s lives. I’m currently studying Software
          Engineering at FPT University, and I’m excited to apply what I’ve
          learned to real-world projects. I’m experienced in .NET and Java, with
          a focus on creating scalable backend solutions, but I also enjoy
          diving into UI/UX design for frontend apps. Right now, my goal is to
          grow my skills in backend technologies and cloud platforms, while
          contributing to meaningful projects. In the long run, I’d love to
          become a lead developer or solutions architect, creating innovative
          solutions that tackle tough challenges and help shape the future of
          tech.
        </p>
        <div className="mt-6 flex items-center space-x-4">
          <ul className="flex space-x-3">
            <li className="bg-green-500 text-white px-3 py-1 rounded-full">
              ReactJS
            </li>
            <li className="bg-green-500 text-white px-3 py-1 rounded-full">
              AWS
            </li>
            <li className="bg-green-500 text-white px-3 py-1 rounded-full">
              .NET
            </li>
          </ul>
        </div>
      </motion.div>
    </>
  );
};

export default AboutMe;
