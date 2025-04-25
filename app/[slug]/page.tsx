
import Image from "next/image";
import { prisma } from "@/lib/prisma";
import DOMPurify from "dompurify";
import ContentsPage from "@/components/Home/Contents/Contents";

interface ContentsPageProps {
  servicename: {
    service_name: string;
    Service: {
      kw_img1: string | null;
      kw_top1: string;
      kw_con1: string;
    }[];
  };
}

const pageBlog = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params; // ✅ ต้อง await params ทั้ง object
  // ✅ ใช้ params.slug ตรงนี้

  const serviceName = await prisma.serviceName.findFirst({
    where: {
      service_link: slug, // ✅ slug เป็น string แล้ว OK!
    },
    include: {
      Service: true,
    },
  });

  if (!serviceName) {
    return <div>Service not found</div>;
  }


  return (
    <main className="max-w-3xl mx-auto px-4 pt-[15vh] pb-20">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
        {serviceName.service_name}
      </h1>

     <ContentsPage  service={serviceName.Service[0]} />
      
    </main>
  );
};

export default pageBlog;
