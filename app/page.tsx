"use client";

import { useState } from "react";

export default function Home() {
  const [files, setFiles] = useState<any[]>([]);

  const handleUpload = (e: any) => {
    const file = e.target.files[0];
    if (!file) return;

    const url = URL.createObjectURL(file);

    setFiles([...files, { file, url }]);
  };

  return (
    <main style={{ padding: "20px", textAlign: "center" }}>
      <h1 style={{ fontSize: "28px", fontWeight: "bold" }}>
        My Life
      </h1>

      <p>Upload and preview your images/videos</p>

      <input
        type="file"
        onChange={handleUpload}
        style={{ marginTop: "20px" }}
      />

      <div style={{ marginTop: "30px" }}>
        {files.length === 0 && <p>No files uploaded yet</p>}

        {files.map((f, i) => (
          <div key={i} style={{ marginBottom: "15px" }}>
            {f.file.type.startsWith("image") ? (
              <img
                src={f.url}
                alt="preview"
                width={250}
                style={{ borderRadius: "10px" }}
              />
            ) : (
              <video
                src={f.url}
                width={250}
                controls
                style={{ borderRadius: "10px" }}
              />
            )}
          </div>
        ))}
      </div>
    </main>
  );
}