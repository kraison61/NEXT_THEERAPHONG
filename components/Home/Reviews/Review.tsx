import React from "react";
import { FaStar } from "react-icons/fa";
import ReviewSlider from "./ReviewSlider";

const Review = () => {
  return (
    <div className="pt-20 pb-20 flex items-center justify-center flex-col bg-[#13357b]">
      <div className="w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Text Content */}
        <div>
          <h2 className="text-2xl font-semibold text-white">
          เสียงตอบรับจากลูกค้าของเรา
          </h2>
          <p className="mt-6 text-gray-200">
          ความไว้วางใจจากลูกค้าคือสิ่งที่บริษัท ธีรพงษ์เซอร์วิส จำกัด ให้ความสำคัญเป็นอันดับหนึ่ง เราเชื่อว่าผลงานที่ดีต้องสร้างจากความซื่อสัตย์ ใส่ใจ และคุณภาพที่จับต้องได้ ทุกคำชื่นชมและข้อเสนอแนะจากลูกค้าคือแรงผลักดันให้เราพัฒนาบริการให้ดียิ่งขึ้นเสมอ
นี่คือเสียงจริงจากลูกค้าที่เคยใช้บริการของเรา:
          </p>
          {/* Ratings */}
          <div className="mt-6 flex items-center space-x-6">
            <div>
              <p className="text-2xl font-bold text-white">4.88</p>
              <p className="text-white mb-2">Overall Rating</p>
              <div className="flex items-center">
                <FaStar className="text-white" />
                <FaStar className="text-white" />
                <FaStar className="text-white" />
                <FaStar className="text-white" />
                <FaStar className="text-white" />
              </div>
            </div>
          </div>
        </div>
        {/* Slider */}
        <div className="overflow-hidden">
          <ReviewSlider />
        </div>
      </div>
    </div>
  );
};

export default Review;
