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
      setAnswer25(files);
      setPreview25(files.map((file) => URL.createObjectURL(file))); // 각 파일의 미리보기 URL 생성
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
    alert("사진 업로드 완료!");
  };

  return (
    <div
      className="flex flex-col justify-center items-center"
      style={{
        backgroundImage: 'url("/img/river_6.png")',
        backgroundSize: "cover", // 배경을 콘텐츠 크기에 맞게 확장
        backgroundRepeat: "no-repeat", // 반복 방지
        backgroundAttachment: "fixed", // 고정 배경
        minHeight: "100vh", // 콘텐츠가 많아도 최소 높이 화면 전체
      }}
    >
      {step === 1 && (
        <div className="w-full flex flex-col items-center text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            올해를 대표하는 사진 한 장
          </h1>
          <input
            type="file"
            accept="image/*"
            onChange={handleRepresentativePhotoChange}
            className="mb-4 text-white"
          />
          {answer24 !== null && answer25.length === 0 && (
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

              <h2 className="text-2xl font-bold text-white">
                올해의 사진 10장 뽑아줘!
              </h2>
              <p className="text-white mb-6">
                앨범에서 즐겨찾기한 사진을 참고해봐~
              </p>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handlePhotoCollectionChange}
                className="mb-4 text-white"
              />
              {preview25.length > 0 && (
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {preview25.map((src, index) => (
                    <img
                      key={index}
                      src={src}
                      alt={`사진 ${index + 1} 미리보기`}
                      className="w-32 h-32 object-cover rounded-lg"
                    />
                  ))}
                </div>
              )}
            </div>
          )}

          {answer24 && answer25.length === 10 && (
            <button
              onClick={handleUpload}
              className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600"
              disabled={isUploading}
            >
              {isUploading ? "업로드 중..." : "사진 업로드"}
            </button>
          )}
        </div>
      )}

      {step === 2 && (
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            다음 질문으로 넘어갈 준비가 되었어요!
          </h1>
        </div>
      )}
    </div>
  );
}
