/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import { motion } from "framer-motion";
import BlogContent from "@/components/BlogContent";

const blog2 = () => {
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
          title={"Explore My Own Website"}
          date={"11/26/2024"}
          imgAlt={"my personal website"}
          imgSrc={["/assets/blog2.png", "/assets/cm.jpg"]}
          ImgNote={[
            "My first personal website",
            "Cristian Mihai's coding project",
          ]}
        >
          <h1 className="text-3xl font-bold mb-4">How it's start?</h1>
          <p>
            I always want my own website when i was in my first year of college.
            My background is a backend developer with those logics, apis and
            databases. And i dont know where to start, i was lost in direction
            and it became a dream to me since then. Unitl one day my friend told
            me to learn NextJs together and i was hooked in it.{" "}
          </p>
          <br />
          <h1 className="text-3xl font-bold mb-4">What's next?</h1>
          <p>
            With the basic login i learn through university, i was able to start
            a NextJs project. And that was the beginning of my portfolio
            website. At first i through it's just basic React with fancy UI, but
            i was wrong. It was pain in the ass to learn Hook and how to get
            components together. But the more i code the more i enjoy it. At my
            peek, i was coding straight from 5pm to 6am the next day just to
            finish the animation for HomePage.
          </p>
          <br />
          <p>
            If you scrolling Youtube and find some website just like mine, it's
            probally Cristian Mihai's Profolio website (picture 2 above -
            recommend to see it!). For the record, i followed his tutorial and
            learn a lot from it. "But your's just a copy from it" - you may ask.
            Well, i have my own personal upgrade for it, like the About Me
            section i with AOS library motion and more. the thing is copy is not
            bad, espeacially for those beginner like me, it create a foundation
            to start and building up momentum to keep going. As long as, you
            keep learning and practice, the success will be your own.
          </p>
          <br />
          <br />
        </BlogContent>
      </div>
    </motion.div>
  );
};

export default blog2;
