// 한 마디로 말하자면, 행운/최고의 순간 페이지

import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";

export default function Question1() {
  const [isFlipping, setIsFlipping] = useState(false);
  const [answer1, setAnswer1] = useState<string>("");
  const [answer2, setAnswer2] = useState<string>("");
  const [answer3, setAnswer3] = useState<string[]>(["", "", ""]);
  const [step, setStep] = useState<number>(1);

  const router = useRouter();

  const thirdQuestionRef = useRef<HTMLDivElement>(null); // 세 번째 질문에 ref 설정

  // 로컬 스토리지에서 복원
  useEffect(() => {
    const savedAnswer1 = localStorage.getItem("answer1");
    const savedAnswer2 = localStorage.getItem("answer2");
    const savedAnswer3 = localStorage.getItem("answer3");

    if (savedAnswer1) setAnswer1(savedAnswer1);
    if (savedAnswer2) setAnswer2(savedAnswer2);

    if (savedAnswer3) {
      const parsedAnswer3 = JSON.parse(savedAnswer3);
      setAnswer3(parsedAnswer3);
    } else {
      setAnswer3(["", "", ""]);
    }
  }, []);

  // 로컬 스토리지에 저장
  useEffect(() => {
    localStorage.setItem("answer1", answer1);
    localStorage.setItem("answer2", answer2);

    if (answer3 && answer3.some((val) => val.trim() !== "")) {
      localStorage.setItem("answer3", JSON.stringify(answer3));
    }
  }, [answer1, answer2, answer3]);

  // 세 번째 질문이 나타날 때 스크롤 이동
  useEffect(() => {
    if (step === 3 && thirdQuestionRef.current) {
      thirdQuestionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [step]);

  const handleNextStep = () => {
    setStep((prev) => prev + 1);
  };

  const handleAnswer3Change = (index: number, value: string) => {
    const updatedAnswers = [...answer3];
    updatedAnswers[index] = value;
    setAnswer3(updatedAnswers);
  };

  const handleNextPage = () => {
    setIsFlipping(true);
    setTimeout(() => {
      router.push("/river/2");
    }, 1000);
  };

  return (
    <div
      className={`min-h-[200vh] flex flex-col justify-start items-center bg-cover bg-center bg-fixed pt-20 ${
        isFlipping ? "page-enter" : ""
      }`}
      style={{
        backgroundImage: 'url("/img/river_0.png")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* 첫 번째 질문 */}
      <div className="text-center">
        <p className="text-white font-bold mb-6 animate-fadeIn">
          올해 2025년... 한 마디로 말하자면,
        </p>
        <textarea
          value={answer1}
          onChange={(e) => setAnswer1(e.target.value)}
          className="text-center w-2/3 text-white p-2 border-b-2 border-white bg-transparent   focus:outline-none resize-none"
          rows={1}
        />
        {answer1.trim() && step === 1 && (
          <button
            onClick={handleNextStep}
            className="  text-white hover:scale-150 transition-transform duration-300 mt-4"
          >
            여기서 말하는 올해는 2025년이야...^^
          </button>
        )}
      </div>

      {/* 두 번째 질문 */}
      {step >= 2 && (
        <div className="text-center mt-10 animate-fadeIn">
          <p className="text-white font-bold mb-6">
            이런 순간, 나는 행운이라고 느꼈어.
          </p>
          <textarea
            value={answer2}
            onChange={(e) => setAnswer2(e.target.value)}
            className="text-center w-full text-white p-2 border-b-2 border-white bg-transparent   focus:outline-none resize-none"
            rows={1}
          />
          {answer2.trim() && step === 2 && (
            <button
              onClick={handleNextStep}
              className="  text-white hover:scale-150 transition-transform duration-300 mt-4"
            >
              그리고,
            </button>
          )}
        </div>
      )}

      {/* 세 번째 질문 */}
      {step >= 3 && (
        <div
          ref={thirdQuestionRef}
          className="flex flex-col items-center text-center mt-10 animate-fadeIn"
        >
          <p className="text-white font-bold mb-6">
            올해 최고의 순간 TOP 3를 꼽자면...
          </p>
          <div className="flex flex-col gap-4">
            {answer3.map((answer, index) => (
              <textarea
                key={index}
                value={answer}
                onChange={(e) => handleAnswer3Change(index, e.target.value)}
                className="text-center w-full text-white p-2 border-b-2 border-white bg-transparent   focus:outline-none resize-none placeholder-white placeholder-opacity-50"
                rows={1}
                placeholder={`${index + 1}위`}
              />
            ))}
            {/* 세 개의 답변이 모두 입력되었을 때만 버튼 표시 */}
            {answer3.every((ans) => ans.trim() !== "") && (
              <button
                onClick={handleNextPage}
                className="  text-white hover:scale-150 transition-transform duration-300 mt-4"
              >
                이런 순간들이 행복했어.
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
