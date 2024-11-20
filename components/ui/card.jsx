/* eslint-disable @next/next/no-img-element */
"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FaUsers } from "react-icons/fa";
import { motion } from "framer-motion"; // Correct import
import { FaCalendarCheck } from "react-icons/fa";
export default function ProjectCard({
  isRight,
  date,
  title,
  content,
  teamSize,
  imgSrc,
  imgAlt,
  tags = [],
  links = [],
}) {
  return (
    <motion.div
      className="xl:w-full p-6 m-8"
      initial={{ opacity: 0 }} // Start invisible
      animate={{ opacity: 1 }} // Fade in to visible
      transition={{ duration: 0.5, delay: 1, ease: "easeInOut" }} // Fade-in effect
    >
      <div
        className={`
          w-full
          flex flex-col xl:flex-row 
          shadow-2xl 
          rounded-xl 
          overflow-hidden 
          transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-black hover:shadow-2xl 
          ${isRight ? "xl:flex-row-reverse" : ""}
        `}
      >
        {/* Image Section */}
        {imgSrc && (
          <div className="flex items-center p-6 justify-center">
            <img
              src={imgSrc}
              alt={imgAlt || title}
              className=" h-[24rem] object-contain 
                         opacity-90 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        )}

        {/* Content Section */}
        <div className="w-full p-6 flex flex-col justify-center">
          <div className="flex flex-row sm:flex-row items-center justify-between">
            <div className="xl:w-[70%] w-fit ">
              <h2 className="text-2xl font-bold mb-4 text-white">{title}</h2>
              {tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {tags.map((tag, index) => (
                    <Badge
                      key={index}
                      className="bg-gray-500 text-white px-3 py-1 rounded-full shadow 
                         hover:bg-slate-700 transition-colors cursor-pointer"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
            <div className="w-full xl:w-fit flex items-center justify-end gap-2 pr-3">
              <FaCalendarCheck scale={1.5} />
              <span>{date}</span>
            </div>
          </div>

          <p className="text-lg text-white mb-4">{content}</p>

          {links.length > 0 && (
            <div className="flex justify-between space-x-4">
              <div className="space-x-4">
                {links.map((link, index) => (
                  <Button
                    key={index}
                    onClick={() => window.open(link.href, "_blank")}
                    className="transition-transform transform hover:scale-110"
                  >
                    {link.label}
                  </Button>
                ))}
              </div>

              <div className="flex items-center justify-start gap-2 pr-3">
                <FaUsers scale={1.5} />
                {teamSize}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
