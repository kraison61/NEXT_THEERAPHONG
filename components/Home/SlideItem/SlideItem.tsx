import React from "react";
import { BlogProps, FullServiceProps, ImageUploadProps } from "@/data/data";
import Slide from "./Slide";

type SlideItemProps = {
  data: FullServiceProps[]  | ImageUploadProps[] | BlogProps[] ; // รับ Array ของประเภทใดประเภทหนึ่ง
  heading: string;
  title: string;
  dataType: "service"  | "image" | "blog"; // ระบุประเภทของข้อมูล
  targetId?:string
};



const SectionHeading:React.FC<SlideItemProps> = ({ targetId,data,heading,title,dataType }) => {
  console.log(data)
  
  return (
    <div id={targetId} className="w-[80%] mx-auto pt-[10vh]">
      <h1 className="text-xl sm:text-3xl text-blue-950 font-bold">{heading}</h1>
      <p className="mt-2 text-gray-700 sm:text-base text-sm font-medium" dangerouslySetInnerHTML={{ __html: title || ""}}>
       
      </p>
      {data && <Slide data={data} dataType={dataType} />}
    </div>
  );
};

export default SectionHeading;
