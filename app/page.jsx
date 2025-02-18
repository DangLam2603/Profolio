/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import TypingHeader from "@/components/TypingEffect";
import { Button } from "@/components/ui/button";
import { FaUserAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import AboutMe from "@/components/AboutMe";
import Image from "next/image";

export default function HomePage() {
  const [isActive, setIsActive] = useState(false);
  const [showWork, setShowWork] = useState(false); // State to control visibility

  const handleShowWork = () => {
    setShowWork(true); // Update state to show the Work section
  };
  useEffect(() => {
    document.body.classList.add("overflow-x-hidden");
    AOS.init({
      duration: 1000,
      offset: 50,
      once: false,
    });
  }, []);

  return (
    <section className="h-full">
      <div className="container mx-auto px-4 sm:px-8">
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
              <TypingHeader fullText={"Hello, I'm\nDang Lam!"} />
              <p className="max-w-[500px] mb-9 text-white">
                Welcome to my portfolio! This is my little corner of the
                internet where I share blogs, job descriptions for recruiters,
                and my personal story. Feel free to explore and get to know more
                about me. Let’s dive in, shall we?
              </p>
              <div className="flex flex-col xl:flex-row items-center gap-8">
                <Button
                  onClick={() => setIsActive(true)}
                  className="border border-[#ffd700] bg-transparent text-accent hover:text-black flex items-center gap-2"
                  aria-label="Learn more about me"
                >
                  <FaUserAlt />
                  <span>About Me !!</span>
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
          <>
            <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 relative">
              {/* AboutMe component positioned absolutely */}
              <div className="w-full order-2 xl:order-none z-20 relative mb-8 xl:mb-0">
                <AboutMe onShowWork={handleShowWork} isActive={isActive} />
              </div>
              <div className="relative order-1 xl:order-none mb-8 xl:mb-0 z-10">
                <Photo isActive={isActive} />
              </div>
            </div>

            {/* Work Section */}
            <div
              id="work"
              className="container max-w-full my-2 xl:my-auto p-8 overflow-hidden"
              style={{
                display: showWork ? "visible" : "hidden",
                opacity: showWork ? 1 : 0,
                transition: "opacity 0.5s ease-in-out",
              }}
            >
              <div className="max-w-full flex xl:flex-row flex-col justify-between items-center ">
                <div
                  data-aos="zoom-down-right"
                  className="w-full text-white p-6 m-6 rounded-xl shadow-[0_0_15px_5px_rgba(0,0,0,0.3)]"
                >
                  <p>
                    "I'm from Vung Tau, a beautiful beach city in Vietnam. After
                    high school, I felt lost and unsure about what to study in
                    university. One day, I decided to visit FPT University, and
                    everything changed. The amazing architecture and the
                    friendly atmosphere immediately drew me in. That visit
                    inspired me to follow my passion and study Software
                    Development at FPTU."
                  </p>
                </div>

                <div
                  data-aos="fade-up"
                  className="relative max-w-full flex justify-left items-center "
                >
                  <Image
                    src="/assets/BRVT.jpeg"
                    sizes="2xl"
                    priority
                    quality={100}
                    width={700}
                    height={700}
                    alt="photo"
                    className="object-cover object-center border-4 border-white shadow-lg"
                  />
                </div>
              </div>

              {/* Additional images with better responsive grid */}
              <div
                data-aos="zoom-out-right"
                data-aos-anchor-placement="top-center"
                className="max-w-full mt-16 flex flex-wrap justify-around items-center gap-4"
              >
                <Image
                  src="/assets/graduated.jpg"
                  sizes="xl"
                  priority
                  quality={100}
                  width={500}
                  height={500}
                  alt="photo"
                  className="object-cover object-center border-4 border-white shadow-lg transform -rotate-6"
                />
                <Image
                  src="/assets/FPTU.jpeg"
                  sizes="2xl"
                  priority
                  quality={100}
                  width={500}
                  height={500}
                  alt="photo"
                  className="object-cover object-center border-4 border-white shadow-lg transform rotate-6"
                />
              </div>

              {/* Club Section */}
              <div
                data-aos="fade-right"
                className="w-full mt-12 p-6 text-white flex xl:flex-row flex-col justify-between items-center rounded-xl shadow-[0_0_15px_5px_rgba(0,0,0,0.3)]"
              >
                <p>
                  "Through my journey, I have made many friends, and I was lucky
                  enough to join a club at FPTU, something I had never done
                  before. This club is called MEC – Multimedia and Entertainment
                  Club."
                </p>
                <Image
                  src="/assets/mec/mec-grp.JPG"
                  sizes="2xl"
                  priority
                  quality={100}
                  width={500}
                  height={500}
                  alt="photo"
                  className="object-cover mt-12 object-center border-4 border-white shadow-lg transform -rotate-6"
                />
              </div>

              <div
                data-aos="zoom-out-left"
                className="w-full xl:mt-20 mt-2 flex xl:flex-row flex-col justify-between items-center"
              >
                <Image
                  src="/assets/mec/gr2.JPG"
                  sizes="2xl"
                  priority
                  quality={100}
                  width={500}
                  height={500}
                  alt="photo"
                  className="object-cover object-center border-4 border-white shadow-lg transform rotate-6"
                />
                <p className="text-white mt-8 p-6 xl:w-1/2 rounded-xl sm:m-6 shadow-[0_0_15px_5px_rgba(0,0,0,0.3)]">
                  "In MEC, we genuinely care for each other and are always happy
                  to see one another. We share so many moments together—having
                  fun, laughing, and even crying..."
                </p>
              </div>

              <div
                data-aos="fade-up"
                className="w-full xl:mt-20 mt-10 flex flex-col justify-between items-center"
              >
                <Image
                  src="/assets/mec/say.JPG"
                  sizes="2xl"
                  priority
                  quality={100}
                  width={500}
                  height={500}
                  alt="photo"
                  className="object-cover object-center border-4 border-white shadow-lg"
                />
                <p className="order-1 text-white p-6 xl:w-1/2 rounded-xl sm:m-6 shadow-[0_0_15px_5px_rgba(0,0,0,0.3)]">
                  "...As MEC’s slogan says, 'MEC là nhà' (MEC is Home), it truly
                  feels like home. In this big family, every MEC member treats
                  one another with love and warmth."
                </p>
              </div>
              <div
                data-aos="fade-up-left"
                className="max-w-full mt-16 mb-16 flex xl:flex-row-reverse flex-col justify-between items-center"
              >
                <Image
                  src="/assets/mec/mec1.jpg"
                  sizes="2xl"
                  priority
                  quality={100}
                  width={500} // Replace with your desired width
                  height={500} // Replace with your desired height
                  alt="photo"
                  className="object-cover object-center border-4 xl:mt-12 mb-12 border-white shadow-lg transform rotate-6"
                />
                <div data-aos="fade-up-right">
                  <Image
                    src="/assets/mec/IMG_0590.PNG"
                    sizes="2xl"
                    priority
                    quality={100}
                    width={500} // Replace with your desired width
                    height={500} // Replace with your desired height
                    alt="photo"
                    className="object-cover object-center border-4 border-white shadow-lg transform rotate-6"
                  />
                  <Image
                    src="/assets/mec/LD.png"
                    sizes="2xl"
                    priority
                    quality={100}
                    width={500} // Replace with your desired width
                    height={500} // Replace with your desired height
                    alt="photo"
                    className="object-cover object-center border-4 border-white shadow-lg transform -rotate-6"
                  />
                </div>
              </div>
              <div
                data-aos="fade-up"
                className="relative xl:mt-20 mt-12 flex xl:flex-row flex-col justify-between items-center"
              >
                <Image
                  src="/assets/Play.PNG"
                  sizes="2xl"
                  priority
                  quality={100}
                  width={600} // Replace with your desired width
                  height={600} // Replace with your desired height
                  alt="photo"
                  className="object-cover xl:mt-20 object-center border-4 border-white shadow-lg"
                />
                <Image
                  src="/assets/IMG2.JPG"
                  sizes="2xl"
                  priority
                  quality={100}
                  width={350} // Replace with your desired width
                  height={350} // Replace with your desired height
                  alt="photo"
                  className="xl:absolute xl:top-[-30%] xl:right-[1%] object-cover object-center border-4 border-white shadow-lg transform rotate-12"
                />
              </div>
              <br />
              <div
                data-aos="fade-up"
                className="flex xl:flex-row mt-16 flex-col justify-between items-center"
              >
                <p className="text-white p-6 xl:w-1/2 mb-8 rounded-xl sm:mb-6 shadow-[0_0_15px_5px_rgba(0,0,0,0.3)]">
                  "...At the end of my journey, I am grateful for the to be a
                  part of FPTU, this open so much opportunity for me to level-up
                  myself. I am really happy to take a part at this VP bank
                  Hackathon contest where i found so many talented persons. It
                  was a great experience to learn from them and to share my
                  knowledge with them."
                </p>
                <Image
                  src="/assets/mec/hack.JPG"
                  sizes="2xl"
                  priority
                  quality={100}
                  width={500} // Replace with your desired width
                  height={500} // Replace with your desired height
                  alt="photo"
                  className="object-cover object-center border-4 border-white shadow-lg transform rotate-6"
                />
              </div>
              <br />
              <div
                data-aos="fade-up"
                className="xl:relative xl:min-h-[80vh] flex xl:flex-row flex-col m-2 justify-center items-center"
              >
                <Image
                  src="/assets/mec/top.JPG"
                  sizes="2xl"
                  priority
                  quality={100}
                  width={500} // Replace with your desired width
                  height={500} // Replace with your desired height
                  alt="photo"
                  className="xl:absolute block top-24 left-24 object-cover object-center border-4 border-white shadow-lg transform -rotate-6"
                />
                <Image
                  src="/assets/mec/cer.JPG"
                  sizes="2xl"
                  priority
                  quality={100}
                  width={500} // Replace with your desired width
                  height={500} // Replace with your desired height
                  alt="photo"
                  className="xl:absolute block top-60 right-24 object-cover object-center border-4 border-white shadow-lg transform rotate-6"
                />
              </div>
              <div className="p-10  w-full max-h-full flex justify-end items-end">
                What's Next ... ?!!
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
