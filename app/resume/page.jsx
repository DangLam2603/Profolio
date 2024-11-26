"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import PersonalData from "@/components/SeedData";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Timeline from "@/components/Timeline";
import Experience from "@/components/ResumeTabs/Experience";
import Achievement from "@/components/ResumeTabs/Achievement";
import Skills from "@/components/ResumeTabs/Skills";
import Education from "@/components/ResumeTabs/Education";
const Resume = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 1, delay: 1, ease: "easeInOut" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col justify-center xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col justify-center w-full xl:w-1/3">
            <TabsTrigger
              value="experience"
              className="px-4 py-2 rounded-lg text-lg font-medium transition-all ease-in-out hover:bg-[#ffd700] hover:text-black"
            >
              Experience
            </TabsTrigger>
            <TabsTrigger
              value="achievements"
              className="px-4 py-2 rounded-lg text-lg font-medium transition-all ease-in-out hover:bg-[#ffd700] hover:text-black"
            >
              Achievements
            </TabsTrigger>
            <TabsTrigger
              value="education"
              className="px-4 py-2 rounded-lg text-lg font-medium transition-all ease-in-out hover:bg-[#ffd700] hover:text-black"
            >
              Education
            </TabsTrigger>
            <TabsTrigger
              value="skills"
              className="px-4 py-2 rounded-lg text-lg font-medium transition-all ease-in-out hover:bg-[#ffd700] hover:text-black"
            >
              Skills
            </TabsTrigger>
          </TabsList>

          <div
            className="min-h-[70vh] w-full transform transition-all duration-300 ease-in-out 
          hover:scale-105"
          >
            <TabsContent value="experience" className="w-full">
              <Experience />
            </TabsContent>
            <TabsContent value="achievements" className="w-full">
              <Achievement />
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <Education />
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              <Skills />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
