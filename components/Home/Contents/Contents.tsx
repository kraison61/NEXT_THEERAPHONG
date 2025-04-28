"use client";

import React from "react";
import Image from "next/image";
import DOMPurify from "dompurify";

// Create a safe DOMPurify instance for client-side use

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
  const sanitizeConfig = {
    ALLOWED_TAGS: [
      "b",
      "i",
      "em",
      "strong",
      "a",
      "ul",
      "ol",
      "li",
      "p",
      "br",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "span"
    ],
    ALLOWED_ATTR: ["href", "target", "rel", "class"],
    FORCE_BODY: true, // Preserves list structure
    ADD_TAGS: ["ol", "ul", "li"], // Explicitly allow these tags
  };

  const cleanHeading1 = DOMPurify.sanitize(service.kw_h1 ?? "", sanitizeConfig);
  const cleanCon1 = DOMPurify.sanitize(service.kw_con1 ?? "", sanitizeConfig);
  const cleanCon2 = DOMPurify.sanitize(service.kw_con2 ?? "", sanitizeConfig);
  const cleanTop1 = DOMPurify.sanitize(service.kw_top1 ?? "", sanitizeConfig);
  const cleanTop2 = DOMPurify.sanitize(service.kw_top2 ?? "", sanitizeConfig);

  console.log("Original kw_con1:", service.kw_con1);
  console.log("Sanitized cleanCon1:", cleanCon1);

  return (
    <div className="p-4">
      <div
        className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
        dangerouslySetInnerHTML={{ __html: cleanHeading1 }}
      />
      {/* Section 1 */}
      <section className="mb-20">
        <div className="overflow-hidden shadow-md rounded-xl md:float-left md:mr-6 md:mb-4 md:w-1/3 w-full mb-4">
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
            dangerouslySetInnerHTML={{ __html: cleanTop1 }}
          />
          <div
            className="text-base leading-relaxed text-gray-700"
            dangerouslySetInnerHTML={{ __html: cleanCon1 }}
          />
        </div>
        <div className="clear-both"></div>
      </section>

      {/* Section 2 */}
      <section className="mb-20">
        <div className="overflow-hidden shadow-md rounded-xl md:float-left md:mr-6 md:mb-4 md:w-1/3 w-full mb-4">
          <Image
            src={`/${service.kw_img2 || "images/n1.jpg"}`}
            alt="ภาพประกอบบริการ"
            width={800}
            height={500}
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <h2
            className="text-2xl font-semibold text-gray-800 mb-4"
            dangerouslySetInnerHTML={{ __html: cleanTop2 }}
          />
          <div
            className="text-base leading-relaxed text-gray-700"
            dangerouslySetInnerHTML={{ __html: cleanCon2 }}
          />
        </div>
        <div className="clear-both"></div>
      </section>
    </div>
  );
};

export default ContentsPage;
