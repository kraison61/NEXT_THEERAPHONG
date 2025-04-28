import { prisma } from "@/lib/prisma";
import ContentsPage from "@/components/Home/Contents/Contents";
import { Metadata } from "next";
import DOMPurify from "dompurify";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  try {
    const slug = decodeURIComponent((await params).slug);

    const data = await prisma.service.findFirst({
      where: { serviceName: { service_link: slug } },
      select: {
        kw_title: true,
        kw_des: true,
        // Add other fields you need for metadata
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
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Error",
      description: "An error occurred while loading this page.",
    };
  }
}

export async function generateStaticParams() {
  try {
    const services = await prisma.service.findMany();

    return services.map((service) => ({
      slug: service.kw_title, // or service.service_id, if that's what you need
    }));
  } catch (error) {
    console.error("Error fetching services:", error);
    return [];
  }
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
      <ContentsPage service={serviceName.Service[0]} />
    </main>
  );
};

export default pageBlog;
