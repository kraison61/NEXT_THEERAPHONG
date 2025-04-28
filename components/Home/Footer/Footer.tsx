import Link from "next/link";
import React from "react";
import { FaFacebook, FaTiktok } from "react-icons/fa";

const Footer = ({targetId}:{targetId:string}) => {
  return (
    <div id={targetId} className="pt-16 pb-16">
      <div className="w-[80%] mx-auto items-start grid-cols-1 sm:grid-cols-2 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* 1st part */}
        <div className="space-y-5">
          <h1 className="text-lg font-bold">Company</h1>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            <Link href="/about">เกี่ยวกับเรา</Link>
          </p>
        </div>
        {/* 2nd part */}
        <div className="space-y-5">
          <h1 className="text-lg font-bold">Support</h1>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
          <Link href="/#servicesId">บริการต่าง ๆ</Link>
          </p>
                  </div>
        {/* 3rd part */}
        <div className="space-y-5">
          <h1 className="text-lg font-bold">Other Services</h1>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
          <Link href="/#blogsId">ข่าวสาร และบทความ</Link>
          </p>
          
        </div>
        {/* 4th part */}
        <div>
          <h2 className="text-lg font-bold">ติดต่อเรา</h2>
          <div className="mt-6">
            <h3 className="text-sm text-gray-600">โทร | tel</h3>
            <h4 className="text-base font-bold text-blue-950 mt-1">
              062-718-8847, 087-700-74563
            </h4>
          </div>
          <div className="mt-6">
            <h3 className="text-sm text-gray-600">ไลน์ไอดี | Line ID </h3>
            <h4 className="text-base font-bold text-blue-950 mt-1">
              0627188847
            </h4>
          </div>
          <div className="mt-6">
            <h2 className="text-sm text-gray-600">อีเมลล์ | Email</h2>
            <h3 className="text-base font-bold text-blue-950 mt-1">
              theeraphong.services@gmail.com
            </h3>
          </div>
          <div className="mt-6">
            <h2 className="text-sm text-gray-600">ที่อยู่ | Address</h2>
            <h3 className="text-base font-bold text-blue-950 mt-1">
              14 หมู่ 5 ต.บางกร่าง อ.เมืองนนทบุรี จ.นนทบุรี 11000
            </h3>
          </div>
        </div>
      </div>
      {/* Bottom section */}
      <div className="mt-8 w-[80%] mx-auto border-t pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
        <p className="text-center md:text-left">
          © 2025 บริษัท ธีรพงษ์เซอร์วิส จำกัด | Theeraphong Co., Ltd. | โทร.
          062-718-8847 | Line: @theeraphongservice. All rights reserved
        </p>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <span>Social : </span>
          <Link
            href="https://www.facebook.com/TheeraphongRetainingwall"
            className="text-gray-500 hover:text-gray-800"
          >
            <FaFacebook />
          </Link>
          <Link
            href="https://www.tiktok.com/@dy36mb8vjzm3?is_from_webapp=1&sender_device=pc"
            target="_blank"
            className="text-gray-500 hover:text-gray-800"
          >
            <FaTiktok />
          </Link>
          {/* <Link href="#" className="text-gray-500 hover:text-gray-800">
            <FaTwitter />
          </Link>
          <Link href="#" className="text-gray-500 hover:text-gray-800">
            <FaDribbble />
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
