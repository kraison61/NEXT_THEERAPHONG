import Home from "@/components/Home/Home";
import { prisma } from "@/lib/prisma";

const HomePage = async () => {

  const rawData = await prisma.service.findMany({
    include: {
      serviceName: true,
      ImageUpload: { orderBy: { id: "asc" } },
    },
  });

  const rawBlogs = await prisma.blog.findMany({
    select: {
      id: true,
      title: true,
      description: true,
      content: true,
      image: true,
      servicename_id: true, // ✅ ดึง servicename_id มาให้ครบ
      updated_at: true,
      serviceName: true,
    },
  });

  // const rawImages = await prisma.imageUpload.findMany();
  const rawImages = rawData.flatMap((service) => service.ImageUpload); // 🟢 ดึงออกมาทั้งหมด

  // console.log(rawBlogs)

  // const safeData = mapServiceData(rawData);

  return (
    <div className="overflow-hidden ">
      <Home services={rawData} images={rawImages} blogs={rawBlogs} />
    </div>
  );
};

export default HomePage;
