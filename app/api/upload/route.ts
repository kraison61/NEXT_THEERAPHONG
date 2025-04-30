import { uploadMultipleFilesToBlob } from "@/lib/images";
import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const files = formData.getAll('files') as File[];

  // กำหนด path: images/services/
  const folder = 'images/services/';
  const urls = await uploadMultipleFilesToBlob(files, folder);

  return Response.json({ urls });
}
