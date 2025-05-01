// app/upload/page.tsx
"use client";

import { useState } from "react";
import { uploadFile } from "./actions";
import Image from "next/image";

const imgUrl = process.env.NEXT_PUBLIC_IMAGE_URL

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);

  return (
    <div className="max-w-4xl mx-auto px-19 py-[20vh]">
    <form
      action={async (formData) => {
        await uploadFile(formData);
      }}
    >
      <input
        type="file"
        name="file"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />
      <button type="submit">Upload</button>
    </form>
    <div>
    <Image src={`${imgUrl}/services/1701791058183067.webp`} width={700} height={700} alt="MinIO" />
    {/* <Image src={`http://159.223.203.178:9000/theeraphong/services/1701791058183067.webp`} width={700} height={700} alt="MinIO" /> */}
    {imgUrl}
    </div>
    </div>
  );
}
