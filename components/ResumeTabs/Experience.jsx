import React from "react";
import PersonalData from "../SeedData";
import Timeline from "../Timeline";
import TypingText from "../TypingText";
const Experience = () => {
  return (
    <div className="flex flex-col gap-4 w-full text-white">
      <h1 className="p-2 text-3xl font-bold">Experience</h1>
      <TypingText text="This is the experience section , here you can see my experience" />
      <Timeline
        year={"2023"}
        title={PersonalData.Experience[0].Company}
        company={PersonalData.Experience[0].Title}
        description={PersonalData.Experience[0].Achievements}
      />
      <Timeline
        year={"2024"}
        title={PersonalData.Experience[1].Company}
        company={PersonalData.Experience[1].Title}
        description={PersonalData.Experience[1].Achievements}
      />
    </div>
  );
};

export default Experience;
