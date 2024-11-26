/* eslint-disable @next/next/no-img-element */
"use client";
import { FaCalendarCheck } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"; // Assuming these are imported correctly from ShadCN

export default function BlogContent({
  date = "",
  title = "",
  children,
  imgSrc = [],
  imgAlt = "",
  ImgNote = [],
  tags = [],
}) {
  // Ensure imgSrc is treated as an array
  const images = Array.isArray(imgSrc) ? imgSrc : [imgSrc];
  const notes = Array.isArray(ImgNote) ? ImgNote : [ImgNote];

  return (
    <motion.div
      className="w-full container mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1, ease: "easeInOut" }}
    >
      <div className="w-full flex flex-col-reverse relative">
        {/* Image Section */}
        {images.length > 0 && (
          <div className="relative flex flex-col gap-4">
            <Carousel>
              <CarouselContent>
                {images.map((img, index) => (
                  <CarouselItem key={index}>
                    <img
                      src={img}
                      alt={imgAlt || title || `Image ${index + 1}`}
                      className="w-full h-[30rem] object-cover rounded-lg"
                    />
                    {notes[index] && (
                      <div className="flex justify-center items-center italic text-sm text-gray-500 mt-4">
                        <p>{notes[index]}</p>
                      </div>
                    )}
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        )}
        {/* Content Section */}
        <div className="w-full p-4 sm:p-6 flex flex-col justify-center">
          {/* Header Section */}
          <div className="flex flex-col xl:flex-row xl:items-center items-start justify-between gap-4 mb-4">
            <div className="w-full sm:w-2/3">
              <h2 className="text-3xl xl:text-5xl font-bold mb-2 sm:mb-4 text-white">
                {title}
              </h2>
            </div>
            {date && (
              <div className="flex items-center whitespace-nowrap gap-2 text-sm sm:text-base">
                <FaCalendarCheck className="w-4 h-4" />
                <span>{date}</span>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Content */}
      <p className="text-base sm:text-lg text-gray-200 my-8 leading-relaxed">
        {children}
      </p>
    </motion.div>
  );
}
