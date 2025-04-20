"use client";
import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import SlideItem from "./SlideItem/SlideItem";
import Hotel from "./Hotel/Hotel";
import WhyChoose from "./WhyChoose/WhyChoose";
import Review from "./Reviews/Review";
import News from "./News/News";
import Newsletter from "./Newsletter/Newsletter";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { sectionHeadingProps, serviceItem } from "@/data/data";

type HomeProps = {
  serviceData: serviceItem[];
  section: sectionHeadingProps;
}

const Home:React.FC<HomeProps> = ({serviceData,section}) => {

  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };
    initAOS();
  }, []);

  return (
    <div className="overflow-hidden ">
      <Hero />
      <SlideItem serviceData={serviceData} section={section} />
      <Hotel />
      <WhyChoose />
      <Review />
      <News />
      <Newsletter />
    </div>
  );
};

export default Home;
