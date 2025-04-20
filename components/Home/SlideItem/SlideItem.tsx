import SectionHeading from "@/components/Helper/SectionHeading";
import React from "react";
import Slide from "./Slide";
import { serviceDataProps,sectionHeadingProps,serviceItem } from "@/data/data";

type HomeProps = {
  serviceData: serviceItem[];
  section: sectionHeadingProps;
}


const Destination:React.FC<HomeProps> = ({serviceData,section}) => {
  return (
    <div className="pt-20 pb-20">
      {/* Section Heading */}
      <SectionHeading section={section} />
      {/* Section Content */}
      <div className="mt-14 w-[80%] mx-auto">
        {/* Slider */}
        <Slide serviceData={serviceData} />
      </div>
    </div>
  );
};

export default Destination;
