// lib/s3.ts
import { S3Client } from "@aws-sdk/client-s3";

export const s3 = new S3Client({
  region: "us-east-1",
  // endpoint: "http://159.223.203.178:9000", // เปลี่ยนตาม MinIO
  endpoint: "http://kraison.thddns.net:3314", // เปลี่ยนตาม MinIO
  credentials: {
    accessKeyId: process.env.MINIO_ACCESS_KEY!,
    secretAccessKey: process.env.MINIO_SECRET_KEY!,
  },
  forcePathStyle: true, // ต้องใช้กับ MinIO
});
