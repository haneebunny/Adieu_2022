import React, { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../../../firebase";

export default function QuestionEnd() {
  const [isUploading, setIsUploading] = useState(false);

  const handleSubmit = async () => {
    setIsUploading(true);

    try {
      // 로컬 스토리지에서 모든 데이터 읽기
      const allAnswers = {
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
        createAt: serverTimestamp(),
      };

      console.log("Uploading all answers:", allAnswers);

      // Firestore 업로드
      const docRef = await addDoc(collection(db, "responses"), allAnswers);

      console.log("Document written with ID:", docRef.id);
      alert("잘 보낸 것 같아요, 아마도!");

      // // 저장 후 로컬 스토리지 초기화 (선택 사항)
      // localStorage.clear();
    } catch (error) {
      console.error("Error uploading data to Firebase:", error);
      alert("오류가 발생하면 난 어떡하지...");
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
