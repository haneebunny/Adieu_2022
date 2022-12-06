import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

export function MyDropzone(props: {
  setImageUrl: (arg0: string) => void;
  setFileUrl: (arg0: any) => any;
}) {
  const onDrop = useCallback((acceptedFiles: any) => {
    const file = acceptedFiles[0];

    if (file) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file); //파일을 읽어서 바로 url로 바꿔주는 기능(readAsDataURL)
      fileReader.onload = (data) => {
        if (typeof data.target?.result === "string") {
          props.setImageUrl(data.target?.result);
        }
      };
    }

    upload(file).then((result) => props.setFileUrl(result.url));
  }, []);

  const upload = (file: string | Blob) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append(
      "upload_preset",
      process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
    );

    const result = fetch(
      "https://api.cloudinary.com/v1_1/hanisky/image/upload",
      {
        method: "POST",
        body: formData,
      }
    ).then((response) => {
      return response.json();
    });
    return result;
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <h4>파일을 올려주세요</h4>
      ) : (
        <img
          src="data:image/png;base64,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"
          alt="dropzone"
        />
      )}
    </div>
  );
}
