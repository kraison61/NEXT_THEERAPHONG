"use client";

import React from "react";
import Image from "next/image";

interface ContentsPageProps {
  service: {
    kw_img1: string | null;
    kw_h1: string;
    kw_top1: string;
    kw_con1: string;
    kw_top2: string;
    kw_con2: string;
    kw_img2: string | null;
  };
}

const ContentsPage = ({ service }: ContentsPageProps) => {
  return (
    <div className="p-4">
      {/* Main Heading */}
      <h1
        className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
        dangerouslySetInnerHTML={{ __html: service.kw_h1 }}
      />

      {/* Section 1 */}
      <section className="mb-20">
        <div className="overflow-hidden shadow-md rounded-xl md:float-left md:mr-6 md:mb-4 md:w-1/3 w-full">
          <Image
            src={`http://kraison.thddns.net:3314/theeraphong/${service.kw_img1 || "images/n1.jpg"}`}
            alt="ภาพประกอบบริการ"
            width={800}
            height={500}
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <div
            className="prose prose-sm sm:prose lg:prose-lg  text-2xl font-semibold text-gray-800 mb-4"
            dangerouslySetInnerHTML={{ __html: service.kw_top1 }}
          />
          <div
            className="prose prose-sm sm:prose lg:prose-lg  text-base leading-relaxed text-gray-700"
            dangerouslySetInnerHTML={{ __html: service.kw_con1 }}
          />
        </div>
        <div className="clear-both"></div>
      </section>

      {/* Section 2 */}
      <section className="mb-20">
        <div className="overflow-hidden shadow-md rounded-xl md:float-left md:mr-6 md:mb-4 md:w-1/3 w-full">
          <Image
            src={`http://kraison.thddns.net:3314/theeraphong/${service.kw_img2 || "images/n1.jpg"}`}
            alt="ภาพประกอบบริการ"
            width={800}
            height={500}
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <div
            className="prose prose-sm sm:prose lg:prose-lg  text-2xl font-semibold text-gray-800 mb-4"
            dangerouslySetInnerHTML={{ __html: service.kw_top2 }}
          />
          <div
            className="prose prose-sm sm:prose lg:prose-lg text-base leading-relaxed text-gray-700"
            dangerouslySetInnerHTML={{ __html: service.kw_con2 }}
          />
        </div>
        <div className="clear-both"></div>
      </section>
    </div>
  );
};

export default ContentsPage;
