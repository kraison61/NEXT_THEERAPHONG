"use client";
import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import SlideItem from "./SlideItem/SlideItem";
import WhyChoose from "./WhyChoose/WhyChoose";
import Review from "./Reviews/Review";
import AOS from "aos";
import "aos/dist/aos.css";
import { ImageUploadProps, FullServiceProps, BlogProps } from "@/data/data"; // 🟢 เปลี่ยนจาก ServiceProps → FullServiceProps

type HomeProps = {
  services: FullServiceProps[]; // ข้อมูล Services พร้อม ServiceName และ ImageUpload
  blogs: BlogProps[]; // ข้อมูล Blogs พร้อม ServiceName
  images?: ImageUploadProps[]; // ข้อมูล ImageUpload ทั้งหมด
  targetId?: string;
};

const Home: React.FC<HomeProps> = ({ services, images, blogs }) => {
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
      <SlideItem
        targetId="servicesId"
        data={services}
        heading="รับเหมาครบวงจร"
        title={`<ul>
  <li><h2><strong>ก่อสร้างกำแพงกันดิน (Retaining Wall)</strong></h2><h3>ป้องกันดินไหล ลดความเสี่ยงจากการพังทลาย เพิ่มความแข็งแรงให้พื้นที่ก่อสร้าง</h3></li>
  <li><h2><strong>งานถมดิน ปรับพื้นที่</strong></h2><h3>เตรียมพื้นฐานสำหรับงานก่อสร้างทุกประเภท ถมดินเพื่อความมั่นคงและระบายน้ำได้ดี</h3></li>
  <li><h2><strong>เทพื้นคอนกรีต</strong></h2><h3>พื้นโรงงาน พื้นโกดัง พื้นลานจอดรถ พร้อมเหล็กเสริมและระบบ Drainage</h3></li>
  <li><h2><strong>ก่อสร้างรั้วคอนกรีต, รั้วลวดหนาม, รั้วตาข่าย</strong></h2><h3>งานรั้วทุกรูปแบบ เพื่อความปลอดภัยและความเป็นส่วนตัว</h3></li>
  <li><h2><strong>งานโครงสร้างคอนกรีตเสริมเหล็ก</strong></h2><h3>เสา, คาน, พื้น ฐานราก งานคุณภาพได้มาตรฐานวิศวกรรม</h3></li>
  <li><h2><strong>รับออกแบบและให้คำปรึกษาด้านงานก่อสร้าง</strong></h2><h3>ประเมินหน้างาน ฟรี ไม่มีค่าใช้จ่ายเบื้องต้น</h3></li>
</ul>
`}
        dataType="service"
      />
      {/* ✅ ตรงนี้ imageData ใช้กับ SlideItem */}
      <SlideItem
        targetId="imagesId"
        data={images || []}
        heading="ภาพตัวอย่างงานจริง"
        title="รวมภาพผลงานบางส่วนจากโปรเจกต์จริง ที่เรามีโอกาสดูแลและส่งมอบให้กับลูกค้า ด้วยความตั้งใจในทุกรายละเอียด เพื่อให้ทุกชิ้นงานออกมาตรงตามความต้องการและมาตรฐานที่วางไว้"
        dataType="image"
      />
      <SlideItem
        targetId="blogsId"
        data={blogs || []}
        heading="อัปเดตข่าวสารและบทความล่าสุด"
        title="แบ่งปันข่าวสารและบทความดี ๆ เกี่ยวกับงานของเรา ทั้งเรื่องน่ารู้ เทคนิคการทำงาน และกิจกรรมต่าง ๆ ที่เราอยากส่งต่อถึงคุณ"
        dataType="blog"
      />

      <WhyChoose />
      <Review />
    </div>
  );
};

export default Home;
