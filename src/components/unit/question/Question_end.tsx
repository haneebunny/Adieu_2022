import React, { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../../../firebase";

export default function QuestionEnd() {
  const CURRENT_YEAR = 2025;

  const [isUploading, setIsUploading] = useState(false);
  const [showIdPage, setShowIdPage] = useState(false);
  const [generatedId, setGeneratedId] = useState<string | null>(null);

  const handleSubmit = async () => {
    setIsUploading(true);

    try {
      // 1) AI 기반 publicId 생성
      const idResponse = await fetch("/api/generate-id", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: localStorage.getItem("name"),
          soulFood: localStorage.getItem("answer3"),
          otherAnswers: [
            localStorage.getItem("answer1"),
            localStorage.getItem("answer2"),
            localStorage.getItem("answer4"),
            localStorage.getItem("answer5"),
          ],
        }),
      });

      const { id: publicId } = await idResponse.json();
      console.log("AI 생성한 ID:", publicId);

      setGeneratedId(publicId);

      // 2) Firestore 저장
      const allAnswers = {
        publicId,
        name: localStorage.getItem("name"),
        answer1: localStorage.getItem("answer1"),
        answer2: localStorage.getItem("answer2"),
        answer3: parseJSON(localStorage.getItem("answer3")),
        answer4: localStorage.getItem("answer4"),
        answer5: localStorage.getItem("answer5"),
        answer6: localStorage.getItem("answer6"),
        answer7: localStorage.getItem("answer7"),
        answer8: localStorage.getItem("answer8"),
        answer9: localStorage.getItem("answer9"),
        answer10: localStorage.getItem("answer10"),
        answer11: localStorage.getItem("answer11"),
        answer12: localStorage.getItem("answer12"),
        answer13: localStorage.getItem("answer13"),
        answer14: localStorage.getItem("answer14"),
        answer15: localStorage.getItem("answer15"),
        answer16: localStorage.getItem("answer16"),
        answer17: localStorage.getItem("answer17"),
        answer18: localStorage.getItem("answer18"),
        answer19: localStorage.getItem("answer19"),
        answer20: localStorage.getItem("answer20"),
        answer21: localStorage.getItem("answer21"),
        answer22: localStorage.getItem("answer22"),
        answer23: localStorage.getItem("answer23"),
        answer24: parseJSON(localStorage.getItem("answer24")),
        answer25: parseJSON(localStorage.getItem("answer25")),
        createdAt: serverTimestamp(),
      };

      await addDoc(collection(db, "responses"), allAnswers);

      // 3) 제출 완료 → 아이디 안내 화면으로 전환
      setShowIdPage(true);
    } catch (error) {
      console.error("업로드 에러:", error);
      alert("오류가 발생했어요 ㅠㅠ");
    }

    setIsUploading(false);
  };

  // 유효한 JSON인지 확인하고 파싱하는 함수
  const parseJSON = (value: string | null): any => {
    if (!value) return [];
    try {
      return JSON.parse(value);
    } catch {
      return [];
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white overflow-hidden relative">
      {showIdPage && generatedId && (
        <div className="min-h-screen flex flex-col justify-center items-center text-white">
          <h1 className="text-2xl font-bold mb-4">🎉 제출이 완료되었습니다!</h1>
          <p className="text-lg mb-4">
            아래는 당신의 회고 아이디입니다.
            <br /> (이 아이디로 나중에 다시 조회할 수 있어요)
          </p>

          <div className="bg-white text-black px-4 py-2 rounded-lg text-xl font-mono mb-6">
            {generatedId}
          </div>

          <p className="text-sm opacity-70 mb-10">꼭 스크린샷 찍어두세요!</p>

          <button
            onClick={() =>
              (window.location.href = `/river/ending_credit/${generatedId}`)
            }
            className="bg-customGreen py-2 px-6 rounded-lg"
          >
            회고록 보러가기
          </button>
        </div>
      )}
      {/* 크레딧 텍스트 */}
      <div className="absolute top-[40%] animate-credits text-center">
        <p className="text-lg leading-relaxed">
          와우 수고하셨습니다! 더 수정하다간 2025년도 가버릴 것 같아요... <br />
          분명 2022년부터 만들던 건데 ^ㅁ^😞; <br /> 올해가 올해가 아니게
          되어버렸지만 올해 회고록 작성이 끝났습니다.
          <br /> ↓ 지금까지 쓴 것을 꼭 꼭 제출해주세요~~~ ↓
        </p>
      </div>

      {/* 버튼 */}
      <button
        onClick={handleSubmit}
        className="bg-customGreen text-white py-2 px-6 rounded-lg hover:bg-customDGreen absolute top-[55%] opacity-0 animate-button"
        disabled={isUploading}
      >
        {isUploading ? "보내는 중..." : "보내기"}
      </button>
    </div>
  );
}
