
import React from "react";
import { HeroProps,defaultHeroProps } from "@/data/data"; 
import DOMPurify from "dompurify";



const Hero = ({title = defaultHeroProps.title,subtitle=defaultHeroProps.subtitle, videoSrc=defaultHeroProps.videoSrc}:HeroProps) => {

  const cleanTitle = DOMPurify.sanitize(title ?? '');
  const cleanSubtitle = DOMPurify.sanitize(subtitle ?? '', {
    ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a'],
    ALLOWED_ATTR: ['href', 'target', 'rel']
  });
  return (
    <div className="relative w-full h-[120vh] sm:h-[100vh]">
      {/* overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gray-800 opacity-70"></div>
      {/* Video */}
      <video
        src={videoSrc}
        autoPlay
        muted
        loop
        preload="metadata"
        className="w-full h-full object-cover"
      />
      {/* Text content */}
      <div className="absolute z-[100] w-full h-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div className="flex items-center justify-center flex-col w-[80%] h-full mx-auto">
          <div data-aos="fade-up">
            <h1 className="text-[25px] mb-4 md:mb-0 text-center md:text-[40px] lg:text-[45px] text-white font-bold uppercase tracking-widest" dangerouslySetInnerHTML={{ __html: cleanTitle }}>
            
            </h1>
            <p className="md:text-base  text-white font-normal [word-spacing:5px] text-center" dangerouslySetInnerHTML={{ __html: cleanSubtitle }}>
              {/* {subtitle} */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
