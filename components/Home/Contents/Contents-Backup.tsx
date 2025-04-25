"use client";

import React from "react";
import Image from "next/image";
import DOMPurify from "dompurify";

interface ContentsPageProps {
  service: {
    kw_img1: string | null;
    kw_top1: string;
    kw_con1: string;
    kw_top2: string;
    kw_con2: string;
    kw_img2: string | null;
  };
}

const ContentsPage = ({ service }: ContentsPageProps) => {
  return (
    <div>
      <section className="grid md:grid-cols-2 gap-10 items-center mb-20">
        <div className="rounded-xl overflow-hidden shadow-md">
          <Image
            src={`/${service.kw_img1 || "images/n1.jpg"}`}
            alt="ภาพประกอบบริการ"
            width={800}
            height={500}
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <h2
            className="text-2xl font-semibold text-gray-800 mb-4"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(service.kw_top1 || ""),
            }}
          ></h2>
          <p
            className="text-base leading-relaxed text-gray-700"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(service.kw_con1 || ""),
            }}
          ></p>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-10 items-center mb-20">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {service.kw_top2}
          </h2>
          <p
            className="text-base leading-relaxed text-gray-700"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(service.kw_con2 || ""),
            }}
          ></p>
        </div>
        <div className="rounded-xl overflow-hidden shadow-md">
          <Image
            src={`/${service.kw_img2 || "images/n1.jpg"}`}
            alt="ภาพประกอบบริการ"
            width={800}
            height={500}
            className="object-cover w-full h-full"
          />
        </div>
      </section>
    </div>
  );
};

export default ContentsPage;
