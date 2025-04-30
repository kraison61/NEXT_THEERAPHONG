// app/upload/page.tsx
"use client";

import { useState } from "react";
import { uploadFile } from "./actions";
import Image from "next/image";

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
    <Image src="http://kraison.thddns.net:3314/theeraphong/image/services/1701791058183067.webp" width={700} height={700} alt="MinIO" />
    </div>
    </div>
  );
}
