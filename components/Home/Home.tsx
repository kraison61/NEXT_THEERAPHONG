"use client";
import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import SlideItem from "./SlideItem/SlideItem";
import WhyChoose from "./WhyChoose/WhyChoose";
import Review from "./Reviews/Review";
import News from "./News/News";
import Newsletter from "./Newsletter/Newsletter";
import AOS from "aos";
import "aos/dist/aos.css";
import { ImageUploadProps, FullServiceProps,BlogProps } from "@/data/data"; // 🟢 เปลี่ยนจาก ServiceProps → FullServiceProps

type HomeProps = {
  services: FullServiceProps[]; // ข้อมูล Services พร้อม ServiceName และ ImageUpload
  blogs: BlogProps[];         // ข้อมูล Blogs พร้อม ServiceName
  images?: ImageUploadProps[];     // ข้อมูล ImageUpload ทั้งหมด
  targetId?: string
};

const Home: React.FC<HomeProps> = ({ services,images,blogs }) => {
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
      {/* ✅ ตรงนี้ serviceData ใช้กับ SlideItem */}
      <SlideItem targetId="servicesId" data={services} heading="รับเหมาครบวงจร" title={`<ul>
        <li><strong>ก่อสร้างกำแพงกันดิน (Retaining Wall)</strong> - ป้องกันดินไหล ลดความเสี่ยงจากการพังทลาย เพิ่มความแข็งแรงให้พื้นที่ก่อสร้าง</li>
        <li><strong>งานถมดิน ปรับพื้นที่</strong> - เตรียมพื้นฐานสำหรับงานก่อสร้างทุกประเภท ถมดินเพื่อความมั่นคงและระบายน้ำได้ดี</li>
        <li><strong>เทพื้นคอนกรีต</strong> - พื้นโรงงาน พื้นโกดัง พื้นลานจอดรถ พร้อมเหล็กเสริมและระบบ Drainage</li>
        <li><strong>ก่อสร้างรั้วคอนกรีต, รั้วลวดหนาม, รั้วตาข่าย</strong> - งานรั้วทุกรูปแบบ เพื่อความปลอดภัยและความเป็นส่วนตัว</li>
        <li><strong>งานโครงสร้างคอนกรีตเสริมเหล็ก</strong> - เสา, คาน, พื้น ฐานราก งานคุณภาพได้มาตรฐานวิศวกรรม</li>
        <li><strong>รับออกแบบและให้คำปรึกษาด้านงานก่อสร้าง</strong> - ประเมินหน้างาน ฟรี ไม่มีค่าใช้จ่ายเบื้องต้น</li>
    </ul>`} dataType="service" />
      {/* ✅ ตรงนี้ imageData ใช้กับ SlideItem */}
      <SlideItem targetId="imagesId" data={images || []} heading="ภาพตัวอย่างงานจริง" title="รวมภาพผลงานบางส่วนจากโปรเจกต์จริง ที่เรามีโอกาสดูแลและส่งมอบให้กับลูกค้า ด้วยความตั้งใจในทุกรายละเอียด เพื่อให้ทุกชิ้นงานออกมาตรงตามความต้องการและมาตรฐานที่วางไว้" dataType="image"/>
      <SlideItem targetId="blogsId" data={blogs || []} heading="อัปเดตข่าวสารและบทความล่าสุด" title="แบ่งปันข่าวสารและบทความดี ๆ เกี่ยวกับงานของเรา ทั้งเรื่องน่ารู้ เทคนิคการทำงาน และกิจกรรมต่าง ๆ ที่เราอยากส่งต่อถึงคุณ" dataType="blog"/>

      {/* <Hotel /> */}
      <WhyChoose />
      <Review />
      <News />
      <Newsletter />
    </div>
  );
};

export default Home;
