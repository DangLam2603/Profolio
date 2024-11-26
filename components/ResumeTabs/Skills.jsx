import React from "react";
import PersonalData from "../SeedData";
import Timeline from "../Timeline";
import TypingText from "../TypingText";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
const Skills = () => {
  return (
    <div className="flex flex-col gap-4 w-full text-white">
      <h1 className="p-2 text-3xl font-bold">Skills</h1>
      <TypingText
        text={
          "'Skill is the unified force of experience, intellect, and passion in their operation' – John Ruskin"
        }
      />
      <ul className="grid grid-cols-2 sm:grid-col-3 md:grid-cols-4 gap-[30px]">
        {PersonalData.Skills.map((skill, index) => {
          return (
            <li key={index}>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger className="w-full h-[130px] bg-[#232329] rounded-xl flex items-center justify-center group">
                    <div className="text-5xl group-hover:text-accent transition-all duration-300">
                      {skill.icon}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>{skill.name}</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Skills;
