import { notFound } from "next/navigation";
import BlogContent from "@/components/Home/Contents/BlogContent";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

interface Props {
  params: { slug: string };
}

interface BlogArticle {
  title: string;
  content: string;
  image: string | null;
  created_at: Date | null;
  serviceName: {
    service_name: string;
  } | null;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  // Await the params promise first
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);

  try {
    const articleData = await prisma.blog.findFirst({
      where: { 
        title: decodedSlug 
      },
      include: { 
        serviceName: true 
      },
    }) as BlogArticle | null;

    if (!articleData) {
      return {
        title: "บทความไม่พบ",
        description: "ไม่พบบทความที่คุณกำลังมองหา"
      };
    }

    return {
      title: articleData.title,
      description: articleData.content?.slice(0, 160) || "",
      alternates: {
        canonical: `/blog/${encodeURIComponent(decodedSlug)}`
      }
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "เกิดข้อผิดพลาด",
      description: "เกิดข้อผิดพลาดในการโหลดบทความ"
    };
  }
}

export default async function BlogDetailPage({ params }: Props) {
  const slug = await decodeURIComponent(params.slug.trim());

  try {
    const articleData = await prisma.blog.findFirst({
      where: { 
        title: slug 
      },
      include: { 
        serviceName: true 
      },
    }) as BlogArticle | null;

    if (!articleData) return notFound();

    const article = {
      title: articleData.title,
      content: articleData.content || "",
      image: articleData.image || "/images/n1.jpg",
      date: articleData.created_at
        ? articleData.created_at.toLocaleDateString('th-TH')
        : "ไม่ระบุวันที่",
      category: articleData.serviceName?.service_name || "ไม่ระบุหมวดหมู่",
    };

    return (
      <div className="max-w-4xl mx-auto px-4 py-16">
        <BlogContent article={article} />
      </div>
    );
  } catch (error) {
    console.error("Error loading blog post:", error);
    return notFound();
  }
}