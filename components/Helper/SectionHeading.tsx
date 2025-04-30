import React from "react";

type Props = {
  sectionHeading: string;
  sectionTitle:string
};

const SectionHeading = ({ sectionHeading,sectionTitle }: Props) => {

  return (
    <div className="w-[80%] mx-auto">
      <h2 className="text-xl sm:text-3xl text-blue-950 font-bold">{sectionHeading}</h2>
      <p className="mt-2 text-gray-700 sm:text-base text-sm font-medium">
        {sectionTitle}
      </p>
    </div>
  );
};

export default SectionHeading;
