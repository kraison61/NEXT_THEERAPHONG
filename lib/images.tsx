import { put, list, del } from '@vercel/blob';

const BLOB_TOKEN = process.env.BLOB_READ_WRITE_TOKEN!;

// อัปโหลด 1 ไฟล์พร้อม path
export async function uploadFileToBlob(file: File, folder = ''): Promise<string> {
  const fullName = `${folder}${file.name}`;
  const blob = await put(fullName, file, {
    access: 'public',
    token: BLOB_TOKEN,
  });
  return blob.url;
}

// อัปโหลดหลายไฟล์พร้อม path
export async function uploadMultipleFilesToBlob(files: File[], folder = ''): Promise<string[]> {
  const uploadedUrls: string[] = [];

  for (const file of files) {
    const fullName = `${folder}${file.name}`;
    const blob = await put(fullName, file, {
      access: 'public',
      token: BLOB_TOKEN,
    });
    uploadedUrls.push(blob.url);
  }

  return uploadedUrls;
}

export async function listBlobFiles(prefix?: string): Promise<string[]> {
  const { blobs } = await list({
    prefix,
    token: BLOB_TOKEN,
  });
  return blobs.map(blob => blob.url);
}

export async function deleteBlobFile(url: string): Promise<void> {
  await del(url, {
    token: BLOB_TOKEN,
  });
}
