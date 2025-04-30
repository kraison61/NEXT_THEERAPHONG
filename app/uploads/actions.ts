// app/upload/actions.ts
"use server";

import { PutObjectCommand } from "@aws-sdk/client-s3";
import { s3 } from "@/lib/s3";
// import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { v4 as uuidv4 } from "uuid";

export async function uploadFile(formData: FormData) {
  const file = formData.get("file") as File;
  if (!file) throw new Error("No file uploaded");

  const buffer = Buffer.from(await file.arrayBuffer());
  const filename = `${uuidv4()}-${file.name}`;

  await s3.send(new PutObjectCommand({
    Bucket: "theeraphong",
    Key: filename,
    Body: buffer,
    ContentType: file.type,
  }));

  // const url = `http://159.223.203.178:9000/theeraphong/${filename}`;
  // const url = `http://192.168.220.253:9000/theeraphong/${filename}`;

  // await prisma.file.create({
  //   data: {
  //     filename,
  //     url,
  //   },
  // });

  revalidatePath("/upload");
}
