import Image from "next/image";
import React from "react";

type Props = {
  image: string;
  title: string;
  description: string;
};

const WhyChooseCard = ({ image, title, description }: Props) => {
  return (
    <div>
      {/* Image */}
      <Image
        src={image}
        width={70}
        height={70}
        alt="image"
        className="mx-auto"
      />
      {/* Content */}
      <h2 className="mt-6 text-center text-gray-900 font-medium text-lg">
        {title}
      </h2>
      <h3 className="mt-2 text-center text-xs font-medium text-gray-700">
        {description}
      </h3>
    </div>
  );
};

export default WhyChooseCard;
