import Image from "next/image";
import { prisma } from "@/lib/prisma";

interface PageProps {
  params: {
    slug: string;
  };
}

const pageBlog = async ({ params }: PageProps) => {
  const slug = params.slug; // รับ slug มาจาก URL param

  const serviceName = await prisma.serviceName.findUnique({
    where: {
      service_link: slug,
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

      {serviceName.Service.map((service) => (
        <section key={service.id} className="grid md:grid-cols-2 gap-10 items-center mb-20">
          <div className="rounded-xl overflow-hidden shadow-md">
            <Image
              src={service.kw_img1 || "/images/n1.jpg"}
              alt="ภาพประกอบบริการ"
              width={800}
              height={500}
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {service.kw_h1}
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              {service.kw_con1}
            </p>
          </div>
        </section>
      ))}
    </main>
  );
};

export default pageBlog;
