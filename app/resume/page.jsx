"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Resume = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          className="block h-[40vh] bg-green-500 mb-20 mt-20"
        >
          This is the top section.
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          className="block h-[50vh] bg-green-500 mb-5"
        >
          This is the top section.
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          className="block h-[30vh] bg-green-500 mb-5"
        >
          This is the top section.
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          className="block h-[30vh] bg-green-500 mb-5"
        >
          This is the top section.
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          className="block h-[50vh] bg-green-500 mb-5"
        >
          This is the top section.
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          className="block h-[40vh] bg-green-500 mb-20 "
        >
          This is the top section.
        </div>
      </div>
    </section>
  );
};

export default Resume;
