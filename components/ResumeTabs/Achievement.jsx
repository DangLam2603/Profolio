import React from "react";
import PersonalData from "../SeedData";
import Timeline from "../Timeline";
import TypingText from "../TypingText";
const Achievement = () => {
  return (
    <div className="flex flex-col w-full text-white">
      <h1 className="text-3xl p-2 font-bold">Achievement</h1>
      <TypingText text="Awards and Certifications: They may be few, but each is truly invaluable." />
      <Timeline
        year={PersonalData.Awards[0].Date}
        title={PersonalData.Awards[0].Title}
        company={PersonalData.Awards[0].Issuer}
        description={PersonalData.Awards[0].Description}
      />
      <Timeline
        year={PersonalData.Certifications[0].Date}
        title={PersonalData.Certifications[0].Title}
        company={PersonalData.Certifications[0].Issuer}
        description={PersonalData.Certifications[0].Description}
      />
    </div>
  );
};

export default Achievement;
