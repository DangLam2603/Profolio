/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import { motion } from "framer-motion";
import BlogContent from "@/components/BlogContent";

const blog1 = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.5, delay: 1, ease: "easeInOut" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="conatiner mx-auto">
        <BlogContent
          title={"My First Blog"}
          date={"November 26, 2024"}
          imgAlt={"1st blog image"}
          imgSrc={["/assets/thumb.jpg"]}
          ImgNote={["1st blog"]}
        >
          If you reading this blog right now, i assume you have go though all
          the website. For those who don't know that i was born in a educated
          family, my mom is a literature teacher. So i thought it would be
          awsome to write something to share with friends. Starting with this
          blog.
          <br />
          <br />
          This should be a good start to my writing journey. Once again, thank
          you for visiting my website. I hope you have a nice day !!
          <br />
          <br />
        </BlogContent>
      </div>
    </motion.div>
  );
};

export default blog1;
