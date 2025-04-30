'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function UploadServicesPage() {
  const [urls, setUrls] = useState<string[]>([]);

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();

    const input = document.getElementById('file-input') as HTMLInputElement;
    if (!input.files) return;

    const files = Array.from(input.files);
    const formData = new FormData();
    files.forEach((file) => formData.append('files', file));

    const res = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    const data = await res.json();
    setUrls(data.urls);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 pt-[15vh] pb-20">
      <h2>Upload images to <code>images/services/</code></h2>
      <form onSubmit={handleUpload}>
        <input id="file-input" type="file" multiple />
        <button type="submit">Upload</button>
      </form>

      <div style={{ marginTop: '20px' }}>
        {urls.map((url) => (
          <div key={url}>
            <a href={url} target="_blank">{url}</a>
            <Image src={url} width={500} height={500} alt='test' />
          </div>
        ))}
      </div>
    </div>
  );
}
