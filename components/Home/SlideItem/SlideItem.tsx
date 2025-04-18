import SectionHeading from "@/components/Helper/SectionHeading";
import React from "react";
import Slide from "./Slide";

const Destination = () => {
  return (
    <div className="pt-20 pb-20">
      {/* Section Heading */}
      <SectionHeading heading="Exploring Popular Destination" />
      {/* Section Content */}
      <div className="mt-14 w-[80%] mx-auto">
        {/* Slider */}
        <Slide />
      </div>
    </div>
  );
};

export default Destination;
