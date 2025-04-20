import Image from "next/image";
import { prisma } from "@/lib/prisma";

const pageBlog = async () => {
  const services = await prisma.service.findMany({ 
    include : {
      serviceName:true
    }
  });
  // const services = await prisma.service.findMany({ 
  //   include : {
  //     servicename:true
  //   }
  // });
  console.log(services);

  return (
    <main className="max-w-3xl mx-auto px-4 pt-[15vh] pb-20">
      {/* หัวข้อหลัก */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
        ชื่อบริการ (Service Title)
      </h1>

      {/* Section 1: รูปภาพ + เนื้อหา */}
      <section className="grid md:grid-cols-2 gap-10 items-center mb-20">
        {/* รูปภาพ */}
        <div className="rounded-xl overflow-hidden shadow-md">
          <Image
            src="/images/n1.jpg"
            alt="ภาพประกอบบริการ"
            width={800}
            height={500}
            className="object-cover w-full h-full"
          />
        </div>

        {/* เนื้อหา */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            หัวข้อเนื้อหาส่วนที่ 1
          </h2>
          <p className="text-base leading-relaxed text-gray-700">
            อธิบายเกี่ยวกับบริการ เช่น รายละเอียด ขั้นตอน
            หรือประโยชน์ที่ลูกค้าจะได้รับในส่วนแรกนี้
          </p>
        </div>
      </section>

      {/* Section 2: เนื้อหา + รูปภาพ (กลับด้านกัน) */}
      <section className="grid md:grid-cols-2 gap-10 items-center">
        {/* เนื้อหา */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            หัวข้อเนื้อหาส่วนที่ 2
          </h2>
          <p className="text-base leading-relaxed text-gray-700">
            ข้อมูลเพิ่มเติมหรือคำอธิบายเกี่ยวกับบริการ เช่น ประสบการณ์ของลูกค้า
            วิธีติดต่อ หรือจุดแข็งของทีม
          </p>
        </div>

        {/* รูปภาพ */}
        <div className="rounded-xl overflow-hidden shadow-md">
          <Image
            src="/images/n2.jpg"
            alt="ภาพประกอบบริการ"
            width={800}
            height={500}
            className="object-cover w-full h-full"
          />
        </div>
      </section>
    </main>
  );
};
export default pageBlog;
