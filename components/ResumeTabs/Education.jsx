import React from "react";
import PersonalData from "../SeedData";
import Timeline from "../Timeline";
import TypingText from "../TypingText";

const Educatiuon = () => {
  return (
    <div className="flex flex-col w-full text-white">
      <h1 className="p-2 text-3xl font-bold">Educatiuon</h1>
      <TypingText text="The Journey i have passed, and the Knowledge i have acquired" />
      <Timeline
        year={"2021-2024"}
        title={PersonalData.Education[1].Institution}
        company={PersonalData.Education[1].Degree}
        description={PersonalData.Education[1].Details}
      />
      <Timeline
        year={"2019-2021"}
        title={PersonalData.Education[0].Institution}
        company={PersonalData.Education[0].Degree}
        description={PersonalData.Education[0].Details}
      />
    </div>
  );
};

export default Educatiuon;
