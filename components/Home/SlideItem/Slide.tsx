"use client";
// import { destinationData } from "@/data/data";
import Image from "next/image";
import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { serviceDataProps } from "@/data/data";
import Link from "next/link";

import DOMPurify from "dompurify";



const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 5,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const Slide = ({ serviceData }: serviceDataProps) => {
   
  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      keyBoardControl={true}
    >
      {serviceData.map((data) => {
        return (
          <Link href={`${data.serviceName?.service_link}`} key={data.id} >
          <div  className="m-3">
           
            {/* Image Div */}
            <div className="relative h-[400px]">
              {/* Overlay */}
              <div className="absolute inset-0 bg-black opacity-25 rounded-lg"></div>
              {/* Image */}
              <Image
                src={`/${data.kw_img1}`}
                alt={data.kw_title}
                width={500}
                height={500}
                className="h-full w-full object-cover rounded-lg"
              />
              {/* Text Content */}
            </div>
            <h1 className="text-lg font-semibold mt-4 line-clamp-1 ">
              {data.serviceName?.service_name}
            </h1>
            <p className="text-sm text-gray-600 line-clamp-2 truncate">
              {data.kw_h1}
            </p>
          </div>
          </Link>
        );
      })}
    </Carousel>
  );
};

export default Slide;
