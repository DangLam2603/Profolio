"use client";
import React from "react";
import { motion } from "framer-motion";
import BlockCard from "@/components/BlogCard";
import Link from "next/link";
const Blog = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.5, delay: 1, ease: "easeInOut" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Link href="/blog/blog1">
          <BlockCard
            isRight={false}
            content={"Hi this is my first blog, let's check it out !!"}
            title={"My First Blog"}
            date={"Nov 2024"}
            imgAlt={"1st blog image"}
            imgSrc={"/assets/thumb.jpg"}
          />
        </Link>

        <div className="w-full grid xl:grid-cols-2 gap-8">
          <Link href="/blog/blog2">
            <BlockCard
              content={"From a dream to ideas and ended with reality"}
              title={"Explore My Own Website"}
              date={"Nov 2024"}
              imgAlt={"2st blog image"}
              imgSrc={"/assets/blog2.png"}
              links={""}
              tags={""}
            />
          </Link>

          <Link href="/blog/blog1">
            <BlockCard
              isRight={false}
              content={"Hi this is my first blog, let's check it out!"}
              title={"My First Blog"}
              date={"Nov 2024"}
              imgAlt={"1st blog image"}
              imgSrc={"/assets/thumb.jpg"}
            />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Blog;
