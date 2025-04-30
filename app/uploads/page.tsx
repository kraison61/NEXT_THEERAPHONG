// app/upload/page.tsx
"use client";

import { useState } from "react";
import { uploadFile } from "./actions";

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
    </div>
  );
}
