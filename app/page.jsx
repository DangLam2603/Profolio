/* eslint-disable react/no-unescaped-entities */
"use client";
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import TypingHeader from "@/components/TypingEffect";
import { Button } from "@/components/ui/button";
import { FaUserAlt } from "react-icons/fa";
import { useState } from "react";
import { motion } from "framer-motion";
import AboutMe from "@/components/AboutMe";

export default function HomePage() {
  const [isActive, setIsActive] = useState(false);

  return (
    <section className="h-full">
      <div className="container mx-auto">
        {!isActive ? (
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
            {/* Left side - Introduction */}
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: isActive ? 0 : 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-center xl:text-left order-2 xl:order-none"
            >
              <span className="text-xl">Software Developer</span>
              <TypingHeader />
              <p className="max-w-[500px] mb-9 text-white">
                Welcome to my portfolio! This is my little corner of the
                internet where I share blogs, job descriptions for recruiters,
                and my personal story. Feel free to explore and get to know more
                about me. Let’s dive in, shall we?
              </p>
              <div className="flex flex-col xl:flex-row items-center gap-8">
                <Button
                  onClick={() => setIsActive(true)}
                  className="border border-[#00ff99] bg-transparent text-accent hover:text-white flex items-center gap-2"
                  aria-label="Learn more about me"
                >
                  <span>About Myself</span>
                  <FaUserAlt />
                </Button>
              </div>
              {/* Social Links */}
              <div className="flex flex-col xl:flex-row xl:justify-start justify-center items-center mt-5 p-5">
                <Social
                  containerStyle="flex items-center justify-center gap-4"
                  iconStyle="w-8 h-8"
                />
              </div>
            </motion.div>

            {/* Right side - Photo */}
            <div className="order-1 xl:order-none mb-8 xl:mb-0">
              <Photo isActive={isActive} />
            </div>
          </div>
        ) : (
          // AboutMe Section
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
            <AboutMe isActive={isActive} />
            <div className="order-1 xl:order-none mb-8 xl:mb-0">
              <Photo isActive={isActive} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
