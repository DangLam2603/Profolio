"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import Image from "next/image";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in",
      once: false,
      // Animation duration in milliseconds
    });
  }, []);
  return (
    <>
      <section className="h-full">
        <div className="container mx-auto">
          <div className="h-[100vh]">Contact</div>
          <div
            data-aos="fade-up"
            className="flex flex-col border bg-slate-500 border-[#ffd700] items-center justify-between m-24 xl:pt-8 xl:pb-24"
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
          </div>
          <div className="h-[100vh]">Contact</div>
        </div>
      </section>
    </>
  );
};

export default Contact;
