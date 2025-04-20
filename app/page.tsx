
import Home from "@/components/Home/Home";
import { prisma } from "@/lib/prisma";
import { sectionHeadingProps, serviceDataProps, serviceItem } from "@/data/data";
import { mapServiceData } from "@/lib/mapServiceData";

const HomePage = async () => {
  const rawData = await prisma.service.findMany({
    include: { serviceName: true },
  })
const safeData = mapServiceData(rawData);

const section:sectionHeadingProps = {
  sectionHeading : "บริการ",
  sectionTitle : "รายละเอียดงานบริการ"
}

  return (
    <div className="overflow-hidden ">
      <Home serviceData={safeData} section={section} />
    </div>
  );
};

export default HomePage;
