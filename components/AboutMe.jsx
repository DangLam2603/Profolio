"use client";
import { motion } from "framer-motion";
import { FaUser } from "react-icons/fa"; // Importing an icon from react-icons
import { FaDownload } from "react-icons/fa";
import { Button } from "./ui/button";
const AboutMe = ({ isActive }) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/assets/DangLam_CV.pdf";
    link.download = "DangLam_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
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
        className="mx-auto order-2 xl:order-none text-white p-6 rounded-lg  shadow-2xl xl:block hidden" // xl:block for large screens
      >
        <div className="flex items-center space-x-4">
          <FaUser className="text-4xl text-indigo-600" /> {/* Icon */}
          <h1 className="text-3xl font-semibold text-white-800">About Me</h1>
        </div>
        <p className="mt-4 mb-5 text-lg text-white">
          Hi, I’m Dang! I love building software that makes a real difference in
          people’s lives. Right now, I’m studying Software Engineering at FPT
          University, where I’m learning to create powerful backend solutions
          with .NET and Java. I’m also passionate about UI/UX design and enjoy
          working on the frontend too. My current focus is growing my skills in
          backend technologies and cloud platforms while contributing to
          projects that matter. In the long run, I hope to take on a leadership
          role, like a lead developer or solutions architect, and work on
          innovative solutions that shape the future of technology.
        </p>
        <div className="flex flex-col  xl:flex-row items-center gap-8">
          <Button
            onClick={handleDownload}
            className="border border-[#00ff99] bg-transparent text-accent hover:text-white flex items-center gap-2"
            aria-label="Learn more about me"
          >
            <span>Download CV</span>
            <FaDownload />
          </Button>
        </div>
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
        <p className="mt-4 text-lg mb-6 text-white whitespace-pre-line">
          Hi, I’m Dang! I’m passionate about building software that makes a real
          difference in people’s lives. I’m currently studying Software
          Engineering at FPT University, and I’m excited to apply what I’ve
          learned to real-world projects.I’m experienced in .NET and Java, with
          a focus on creating scalable backend solutions, but I also enjoy
          diving into UI/UX design for frontend apps. <br />
          Right now, my goal is to grow my skills in backend technologies and
          cloud platforms, while contributing to meaningful projects. In the
          long run, I’d love to become a lead developer or solutions architect,
          creating innovative solutions that tackle tough challenges and help
          shape the future of tech.
        </p>
        <div className="flex flex-col xl:flex-row gap-8">
          <Button
            onClick={handleDownload}
            className="border border-[#00ff99] bg-transparent text-accent hover:text-white flex items-center gap-2"
            aria-label="Learn more about me"
          >
            <span>Download CV</span>
            <FaDownload />
          </Button>
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
        </div>
      </motion.div>
    </>
  );
};

export default AboutMe;
