"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative flex justify-center items-center">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1, ease: "easeIn" }}
      >
        <div className="relative w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten">
          <Image
            src="/assets/photo.jpg"
            priority
            quality={100}
            fill
            alt="photo"
            className="rounded-full object-cover object-center"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Photo;
