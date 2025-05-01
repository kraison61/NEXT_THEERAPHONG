"use client";
import React, { useState } from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BlogProps, FullServiceProps, ImageUploadProps } from "@/data/data";
import Link from "next/link";

const imgUrl = process.env.NEXT_PUBLIC_IMAGE_URL;

type SlideProps = {
  data: FullServiceProps[] | ImageUploadProps[] | BlogProps[];
  dataType: "service" | "image" | "blog";
};

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1324 }, items: 5, slidesToSlide: 1 },
  tablet: { breakpoint: { max: 1324, min: 764 }, items: 2, slidesToSlide: 1 },
  mobile: { breakpoint: { max: 764, min: 0 }, items: 1, slidesToSlide: 1 },
};

const Slide: React.FC<SlideProps> = ({ data, dataType }) => {
  const fallbackImage = "/images/n1.jpg";
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold text-center my-6">
        {dataType === "service"
          ? "บริการของเรา"
          : dataType === "image"
          ? "รูปภาพผลงานล่าสุด"
          : dataType === "blog"
          ? "บทความ และข่าวสาร"
          : ""}
      </h2>
      <div style={{zIndex:0}}>
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          keyBoardControl={true}
        >
          {dataType === "service" &&
            (data as FullServiceProps[]).map((service) => {
              const firstImage = service.kw_img1
                ? `${imgUrl}/${service.kw_img1}`
                : service.ImageUpload?.[0]?.img_url
                ? `${imgUrl}/${service.ImageUpload[0].img_url}`
                : fallbackImage;

              return (
                <Link
                  href={`/${service.serviceName?.service_link || "#"}`}
                  key={`service-${service.id}`}
                >
                  <div className="m-3">
                    <div className="relative h-[400px]">
                      <div className="absolute inset-0 bg-black opacity-25 rounded-lg"></div>
                      <Image
                        src={firstImage}
                        alt={
                          service.kw_title ||
                          service.serviceName?.service_name ||
                          "No title"
                        }
                        width={500}
                        height={500}
                        className="h-full w-full object-cover rounded-lg"
                        loading="lazy"
                      />
                    </div>
                    <div className="text-lg font-semibold mt-4 line-clamp-1">
                      {service.serviceName?.service_name || "No Service Name"}
                    </div>
                    <p className="text-sm text-gray-600 line-clamp-2 truncate">
                      {service.kw_h1}
                    </p>
                  </div>
                </Link>
              );
            })}

          {dataType === "image" &&
            (data as ImageUploadProps[]).map((image) => (
              <div
                key={`image-${image.id}`}
                className="m-3 cursor-pointer"
                onClick={() => setSelectedImage(`/${image.img_url}`)}
              >
                <div className="relative h-[400px]">
                  <div className="absolute inset-0 bg-black opacity-25 rounded-lg"></div>
                  <Image
                    src={`${imgUrl}/${image.img_url}`}
                    alt={image.location}
                    width={500}
                    height={500}
                    className="h-full w-full object-cover rounded-lg"
                    loading="lazy"
                  />
                </div>
                <div className="text-lg font-semibold mt-4 line-clamp-1">
                  {image.location}
                </div>
                <p className="text-sm text-gray-600 line-clamp-2 truncate">
                  {image.worked_date
                    ? image.worked_date.toString().slice(0, 10)
                    : "-"}
                </p>
              </div>
            ))}

          {dataType === "blog" &&
            (data as BlogProps[]).map((blog) => {
              const blogImage =
                blog.image &&
                typeof blog.image === "string" &&
                blog.image.trim() !== ""
                  ? `${imgUrl}/${blog.image}`
                  : fallbackImage;
              return (
                <Link
                  href={`/blog/${blog.title || "#"}`}
                  key={`service-${blog.id}`}
                >
                  <div key={`image-${blog.id}`} className="m-3 cursor-pointer">
                    <div className="relative h-[400px]">
                      <div className="absolute inset-0 bg-black opacity-25 rounded-lg"></div>
                      <Image
                        src={blogImage}
                        alt={blog.title || "No title"}
                        width={500}
                        height={500}
                        className="h-full w-full object-cover rounded-lg"
                        loading="lazy"
                      />
                    </div>
                    <div className="text-lg font-semibold mt-4 line-clamp-1">
                      {blog.title || "No Title"}
                    </div>
                    <p className="text-sm text-gray-600 line-clamp-2 truncate">
                      {blog.updated_at
                        ? blog.updated_at.toString().slice(0, 10)
                        : "-"}
                    </p>
                  </div>
                </Link>
              );
            })}
        </Carousel>
      </div>
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedImage}
              alt="Full View"
              width={800}
              height={800}
              className="object-contain rounded-lg"
              loading="lazy"
            />
            <button
              className="absolute top-2 right-2 bg-white rounded-full p-2"
              onClick={() => setSelectedImage(null)}
            >
              ❌
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Slide;
