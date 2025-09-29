import axios from "axios";
import React, { useState } from "react";

interface UploadedImage {
  url: string;
  publicId: string;
}

export default function MultiUpload() {
  const [files, setFiles] = useState<File[]>([]);
  const [images, setImages] = useState<UploadedImage[]>([]);
  const [isUploading, setIsUploading] = useState(false);

  const handleChangeFiles = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files ? Array.from(event.target.files) : [];
    setFiles(selectedFiles);
  };

  const handleUpload = async () => {
    if (files.length === 0) {
      alert("Vui lòng chọn ít nhất một file");
      return;
    }

    setIsUploading(true);
    const uploadedImages: UploadedImage[] = [];

    try {
      for (const file of files) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "upload");
        formData.append("cloud_name", "dvgebil0r");

        const res = await axios.post(
          "https://api.cloudinary.com/v1_1/dvgebil0r/image/upload",
          formData
        );

        if (res.status === 200) {
          uploadedImages.push({
            url: res.data.secure_url,
            publicId: res.data.public_id,
          });
        }
      }

      setImages([...images, ...uploadedImages]);
      setFiles([]);
    } catch (error) {
      console.error("Upload lỗi:", error);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div>
      <h2>Upload Nhiều Ảnh</h2>

      <input type="file" multiple onChange={handleChangeFiles} />
      <br />
      <button onClick={handleUpload}>Upload</button>
      {isUploading && <p>Đang upload...</p>}

      <div style={{ marginTop: 20 }}>
        {images.map((img) => (
          <div key={img.publicId} style={{ marginBottom: 20 }}>
            <img src={img.url} alt="" height={200} />
          </div>
        ))}
      </div>
    </div>
  );
}
