"use client";
import React from "react";
import { motion } from "framer-motion";
const Blog = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 1, delay: 1, ease: "easeInOut" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto"></div>
    </motion.div>
  );
};

export default Blog;
