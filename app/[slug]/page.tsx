import { prisma } from "@/lib/prisma";
import ContentsPage from "@/components/Home/Contents/Contents";
import { Metadata } from "next";
import DOMPurify from "isomorphic-dompurify"; // ✅ server-side safe
import Review from "@/components/Home/Reviews/Review";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const slug = decodeURIComponent(params.slug);

  const data = await prisma.service.findFirst({
    where: { serviceName: { service_link: slug } },
    select: {
      kw_title: true,
      kw_des: true,
    },
  });

  if (!data) {
    return {
      title: "Not Found",
      description: "The page you are looking for does not exist.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: data.kw_title || "Default Title",
    description: data.kw_des || "Default description",
    alternates: {
      canonical: `/services/${encodeURIComponent(slug)}`,
    },
  };
}

export async function generateStaticParams() {
  const services = await prisma.service.findMany();

  return services.map((service) => ({
    slug: service.kw_title,
  }));
}

const pageBlog = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  const serviceName = await prisma.serviceName.findFirst({
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

  // 🔥 Sanitize content here server-side
  const sanitizedService = {
    ...serviceName.Service[0],
    kw_h1: DOMPurify.sanitize(serviceName.Service[0].kw_h1 ?? ""),
    kw_top1: DOMPurify.sanitize(serviceName.Service[0].kw_top1 ?? ""),
    kw_con1: DOMPurify.sanitize(serviceName.Service[0].kw_con1 ?? ""),
    kw_top2: DOMPurify.sanitize(serviceName.Service[0].kw_top2 ?? ""),
    kw_con2: DOMPurify.sanitize(serviceName.Service[0].kw_con2 ?? ""),
  };

  return (
    <>
      <main className="max-w-3xl mx-auto px-4 pt-[15vh] pb-20">
        <ContentsPage service={sanitizedService} />
      </main>
      <Review />
    </>
  );
};

export default pageBlog;
