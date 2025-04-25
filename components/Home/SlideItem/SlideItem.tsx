import React from "react";
import { sectionHeadingProps,serviceItem } from "@/data/data";
import Slide from "./Slide";


type SlideItemProps = {
  serviceData: serviceItem[];
  section: sectionHeadingProps;
};

const SectionHeading:React.FC<SlideItemProps> = ({ serviceData,section }) => {
  return (
    <div className="w-[80%] mx-auto pt-[10vh]">
      <h1 className="text-xl sm:text-3xl text-blue-950 font-bold">{section.sectionHeading}</h1>
      <p className="mt-2 text-gray-700 sm:text-base text-sm font-medium">
        {section.sectionTitle}
      </p>
      <Slide serviceData={serviceData} />
    </div>
  );
};

export default SectionHeading;
