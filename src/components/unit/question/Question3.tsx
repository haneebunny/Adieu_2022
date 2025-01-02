import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Question3() {
  const [answer10, setAnswer10] = useState<string>(""); // 질문 1
  const [answer11, setAnswer11] = useState<string[]>(["", "", ""]); // 질문 2 (TOP 3)
  const [answer12, setAnswer12] = useState<string>(""); // 질문 3
  const [answer13, setAnswer13] = useState<string>(""); // 질문 4
  const [answer14, setAnswer14] = useState<string>(""); // 질문 5
  const [step, setStep] = useState<number>(1);

  const router = useRouter();

  // 로컬 스토리지에서 복원
  useEffect(() => {
    const savedAnswer10 = localStorage.getItem("answer10");
    const savedAnswer11 = localStorage.getItem("answer11");
    const savedAnswer12 = localStorage.getItem("answer12");
    const savedAnswer13 = localStorage.getItem("answer13");
    const savedAnswer14 = localStorage.getItem("answer14");

    if (savedAnswer10) setAnswer10(savedAnswer10);
    if (savedAnswer11) setAnswer11(JSON.parse(savedAnswer11));
    if (savedAnswer12) setAnswer12(savedAnswer12);
    if (savedAnswer13) setAnswer13(savedAnswer13);
    if (savedAnswer14) setAnswer14(savedAnswer14);
  }, []);

  // 로컬 스토리지에 저장
  useEffect(() => {
    localStorage.setItem("answer10", answer10);
    if (answer11 && answer11.some((val) => val.trim() !== "")) {
      localStorage.setItem("answer11", JSON.stringify(answer11));
    }
    localStorage.setItem("answer12", answer12);
    localStorage.setItem("answer13", answer13);
    localStorage.setItem("answer14", answer14);
  }, [answer10, answer11, answer12, answer13, answer14]);

  const handleNextStep = () => {
    setStep((prev) => prev + 1);
  };

  const handleAnswer11Change = (index: number, value: string) => {
    const updatedAnswers = [...answer11];
    updatedAnswers[index] = value;
    setAnswer11(updatedAnswers);
  };

  const handleNextPage = () => {
    router.push("/river/4"); // 다음 페이지로 이동
  };

  return (
    <div
      className="min-h-screen flex flex-col justify-start items-center bg-cover bg-center bg-fixed pt-20"
      style={{
        backgroundImage: 'url("/img/river_3.png")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* 첫 번째 질문 */}
      <div className="flex flex-col items-center text-center animate-fadeIn mb-20">
        <p className="  text-white font-bold mb-6">
          가장 많이 들었던 노래는 뭐야? <br /> (YouTube Music Recap 등
          활용해봐!)
        </p>
        <input
          type="text"
          value={answer10}
          onChange={(e) => setAnswer10(e.target.value)}
          className="text-center min-w-2/3 max-w-[800px] w-3/4 text-white p-2 border-b-2 border-white bg-transparent   focus:outline-none"
        />
        {step === 1 && answer10.trim() && (
          <button
            onClick={handleNextStep}
            className="  text-white mt-4 hover:scale-150 transition-transform duration-300"
          >
            어떤 가수의 노래를 제일 많이 들었을까?
          </button>
        )}
      </div>

      {/* 두 번째 질문 */}
      {step >= 2 && (
        <div className="flex flex-col items-center text-center animate-fadeIn mb-20">
          <p className="  text-white font-bold mb-6">
            올해의 노래 TOP 3만 꼽자면?
          </p>
          <div className="flex flex-col w-full items-center gap-4">
            {answer11.map((answer, index) => (
              <input
                key={index}
                type="text"
                value={answer}
                onChange={(e) => handleAnswer11Change(index, e.target.value)}
                className="text-center w-full text-white p-2 border-b-2 border-white bg-transparent   focus:outline-none placeholder-white placeholder-opacity-50"
                placeholder={`${index + 1}위`}
              />
            ))}
          </div>
          {step === 2 && answer11.every((ans) => ans.trim() !== "") && (
            <button
              onClick={handleNextStep}
              className="  text-white mt-4 hover:scale-150 transition-transform duration-300"
            >
              흠 이 세 개에서 어떤 향이 나는 것 같아?
            </button>
          )}
        </div>
      )}

      {/* 세 번째 질문 */}
      {step >= 3 && (
        <div className="flex flex-col items-center text-center animate-fadeIn mb-20">
          <p className="  text-white font-bold mb-6">
            가장 좋았던 영상은? (아예 링크를 써줘도 좋아!)
          </p>
          <input
            type="text"
            value={answer12}
            onChange={(e) => setAnswer12(e.target.value)}
            className="text-center min-w-2/3 max-w-[800px] w-3/4 text-white p-2 border-b-2 border-white bg-transparent   focus:outline-none"
          />
          {step === 3 && answer12.trim() && (
            <button
              onClick={handleNextStep}
              className="  text-white mt-4 hover:scale-150 transition-transform duration-300"
            >
              어떤 사람한텐 youtube 기록이 완전 비밀이기도 하대
            </button>
          )}
        </div>
      )}

      {/* 네 번째 질문 */}
      {step >= 4 && (
        <div className="flex flex-col items-center text-center animate-fadeIn mb-20">
          <p className="  text-white font-bold mb-6">
            가장 큰 영향을 미친 영상이 있어?
          </p>
          <input
            type="text"
            value={answer13}
            onChange={(e) => setAnswer13(e.target.value)}
            className="text-center min-w-2/3 max-w-[800px] w-3/4 text-white p-2 border-b-2 border-white bg-transparent   focus:outline-none"
          />
          {step === 4 && answer13.trim() && (
            <button
              onClick={handleNextStep}
              className="  text-white mt-4 hover:scale-150 transition-transform duration-300"
            >
              없을 수도 있지...
            </button>
          )}
        </div>
      )}

      {/* 다섯 번째 질문 */}
      {step >= 5 && (
        <div className="flex flex-col items-center text-center animate-fadeIn mb-20">
          <p className="  text-white font-bold mb-6">내년에 들을 첫 곡</p>
          <input
            type="text"
            value={answer14}
            onChange={(e) => setAnswer14(e.target.value)}
            className="text-center min-w-2/3 max-w-[800px] w-3/4 text-white p-2 border-b-2 border-white bg-transparent   focus:outline-none"
          />
          {step === 5 && answer14.trim() && (
            <button
              onClick={handleNextPage}
              className="  text-white mt-4 hover:scale-150 transition-transform duration-300"
            >
              가취 들어요~~~ <br /> 코딩을 미루다가 2025년이 와버렸어;;
            </button>
          )}
        </div>
      )}
    </div>
  );
}
