import React from "react";

const Timeline = ({ year, title, company, description }) => {
  const timelineData = [{ year, title, company, description }];

  return (
    <div className=" w-full text-white">
      {timelineData.map((item, index) => (
        <div key={index} className="flex flex-col xl:flex-row items-start mb-2">
          {/* Year Badge */}
          <div className="flex flex-row-reverse items-center xl:flex-row ">
            <div className="flex flex-col items-center">
              <div className=" text-white p-2 text-center">{item.year}</div>
            </div>
            <div className="flex flex-col items-center min-h-full justify-center gap-3 xl:mx-4 m-auto relative xl:mt-4">
              <div className="bg-[#FFD700] w-4 h-4 rounded-full shadow-lg"></div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 mt-2">
            <h3 className="text-xl font-extrabold">{item.title}</h3>
            <p className="text-lg font-semibold text-gray-400 mb-2">
              {item.company}
            </p>
            <p className="text-base">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
