import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function Question6() {
  const [userName, setUserName] = useState<string | null>(null); // 사용자 이름
  const [answer24, setAnswer24] = useState<File | null>(null); // 대표 사진
  const [answer25, setAnswer25] = useState<File[]>([]); // 10장 사진
  const [preview24, setPreview24] = useState<string | null>(null); // 대표 사진 미리보기
  const [preview25, setPreview25] = useState<string[]>([]); // 10장 사진 미리보기
  const [step, setStep] = useState<number>(1); // 단계 관리
  const [isUploading, setIsUploading] = useState(false);

  // 로컬스토리지에서 사용자 이름 복원
  useEffect(() => {
    const savedName = localStorage.getItem("name");
    if (savedName) {
      setUserName(savedName);
    }
  }, []);

  // Cloudinary 업로드 함수
  const uploadToCloudinary = async (file: File, identifier: string) => {
    const formData = new FormData();
    const timestamp = Date.now(); // 업로드 시간
    const fileName = `${userName}_${identifier}_${timestamp}`; // 파일 이름 형식

    formData.append("file", file);
    formData.append("upload_preset", "adieu2024"); // Cloudinary에서 설정한 Upload Preset 이름
    formData.append("public_id", fileName); // Cloudinary 파일 이름 설정
    formData.append("tags", fileName); // 사용자 이름을 태그로 추가

    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dhui5qhc7/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();
      if (response.ok) {
        return result.secure_url; // 업로드된 이미지의 URL 반환
      } else {
        console.error("Cloudinary upload failed:", result);
        return null;
      }
    } catch (error) {
      console.error("Error uploading to Cloudinary:", error);
      return null;
    }
  };

  // 대표 사진 파일 선택 핸들러
  const handleRepresentativePhotoChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setAnswer24(file);
      setPreview24(URL.createObjectURL(file)); // 미리보기 URL 생성
    }
  };

  // 10장 사진 파일 선택 핸들러
  const handlePhotoCollectionChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      const validFiles = files.slice(0, 10); // 최대 10개까지만 허용
      setAnswer25(validFiles);
      setPreview25(validFiles.map((file) => URL.createObjectURL(file))); // 각 파일의 미리보기 URL 생성
    }
  };

  // 업로드 버튼 클릭 핸들러
  const handleUpload = async () => {
    if (!answer24 || answer25.length === 0) {
      alert("모든 사진을 선택해주세요!");
      return;
    }

    setIsUploading(true);

    // 대표 사진 업로드
    await uploadToCloudinary(answer24, "answer24");

    // 10장 사진 업로드
    for (const [index, file] of answer25.entries()) {
      await uploadToCloudinary(file, `answer25_${index + 1}`);
    }

    setIsUploading(false);
    setStep(2); // 다음 단계로 이동
    alert("사진 업로드 완료!(아마도)");
  };

  return (
    <div
      className="min-h-screen flex flex-col justify-start items-center bg-cover bg-center bg-fixed pt-20"
      style={{
        backgroundImage: 'url("/img/river_6.png")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {step === 1 && (
        <div className="flex flex-col items-center text-center animate-fadeIn mb-20">
          <h1 className="font-bold text-white mb-6">
            올해의 대표 사진을 정하자면? <br /> ㅎㅎ...2024년 얘기하는 거 알지?
          </h1>
          <input
            type="file"
            accept="image/*"
            onChange={handleRepresentativePhotoChange}
            className="w-2/3 mb-4 text-white"
          />
          {answer24 && (
            <div>
              <div className="mb-6 flex flex-col justify-center items-center">
                <p className="text-white">✨{userName}의 2024년✨</p>
                <img
                  src={preview24}
                  alt="대표 사진 미리보기"
                  className="w-64 h-64 object-cover rounded-lg"
                />
                <p className="text-white">↑당신 멋져↑</p>
              </div>

              <h2 className="font-bold text-white">올해의 사진 10장 뽑아줘!</h2>
              <p className="text-white mb-6">
                앨범에서 즐겨찾기한 사진을 참고해조... ❤︎ <br />난 너무 많아서
                고르기 힘들어
              </p>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handlePhotoCollectionChange}
                className="w-2/3 mb-4 text-white"
              />
              {preview25.length > 0 && (
                <div className="flex justify-center">
                  <div className="w-3/4 grid grid-cols-3 gap-4 mb-6">
                    {preview25.map((src, index) => (
                      <img
                        key={index}
                        src={src}
                        alt={`사진 ${index + 1} 미리보기`}
                        className="w-32 h-32 object-cover rounded-lg"
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {answer24 && answer25.length === 10 && (
            <button
              onClick={handleUpload}
              className="bg-customGreen text-white py-2 px-6 rounded-lg hover:bg-customDGreen"
              disabled={isUploading}
            >
              {isUploading ? "업로드 중...(기다려줘요)" : "업로드 하기"}
            </button>
          )}
        </div>
      )}

      {step === 2 && (
        <div className="flex flex-col items-center text-center">
          <Link href="/river/end">
            <h1 className="font-bold text-white mb-6">눌러줘!</h1>
          </Link>
        </div>
      )}
    </div>
  );
}
