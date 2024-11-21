/* eslint-disable @next/next/no-img-element */
"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FaUsers, FaCalendarCheck } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

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
  const [isMore, setIsMore] = useState(false);
  const shortContent = content.substring(0, 110);
  return (
    <motion.div
      className="w-full m-4 p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1, ease: "easeInOut" }}
    >
      <div
        className={`
          w-full
          flex flex-col xl:flex-row
          shadow-[0_0_15px_5px_rgba(0,0,0,0.3)]
          hover:shadow-[0_0_20px_10px_rgba(0,0,0,0.4)]
          rounded-xl
          overflow-hidden
          bg-opacity-90
          transform transition-all duration-300 ease-in-out 
          hover:scale-105
          ${isRight ? "xl:flex-row-reverse" : ""}
        `}
      >
        {/* Image Section */}
        {imgSrc && (
          <div className="flex items-center justify-center p-4 sm:p-8 xl:w-1/2 bg-white opacity-4 ">
            <img
              src={imgSrc}
              alt={imgAlt || title}
              className="h-48 sm:h-64 xl:h-96 w-full object-contain 
                        opacity-90 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        )}

        {/* Content Section */}
        <div className="w-full p-4 sm:p-6 flex flex-col justify-center xl:w-1/2">
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
            <div className="w-full sm:w-2/3">
              <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-white">
                {title}
              </h2>
              {tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <Badge
                      key={index}
                      className="bg-gray-500 text-white px-2 py-1 text-sm rounded-full 
                               shadow-lg hover:shadow-xl
                               hover:bg-slate-700 transition-all cursor-pointer"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
            <div className="flex items-center whitespace-nowrap gap-2 text-sm sm:text-base">
              <FaCalendarCheck className="w-4 h-4" />
              <span>{date}</span>
            </div>
          </div>

          {/* Content */}
          <p className="text-base sm:text-lg text-gray-100 mb-4 leading-relaxed">
            {isMore ? (
              <>
                {content}{" "}
                <button
                  onClick={() => setIsMore(false)}
                  className="text-accent font-medium hover:underline "
                >
                  Read Less
                </button>
              </>
            ) : (
              <>
                {shortContent}...{" "}
                <button
                  onClick={() => setIsMore(true)}
                  className="text-accent font-medium hover:underline"
                >
                  Read More
                </button>
              </>
            )}
          </p>

          {/* Footer Section */}
          {links.length > 0 && (
            <div
              className={`flex justify-between ${
                isRight ? "flex-row" : "xl:flex-row-reverse "
              } gap-4`}
            >
              <div className="flex flex-wrap gap-2">
                {links.map((link, index) => (
                  <Button
                    key={index}
                    onClick={() => window.open(link.href, "_blank")}
                    className="text-sm sm:text-base shadow-lg hover:shadow-xl
                             transition-all transform hover:scale-110"
                  >
                    {link.label}
                  </Button>
                ))}
              </div>
              <div className="flex items-center gap-2 sm:">
                <FaUsers className="w-4 h-4" />
                <span className="text-sm sm:text-base">{teamSize}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
