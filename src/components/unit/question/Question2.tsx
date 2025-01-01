import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Question2() {
  const [answer4, setAnswer4] = useState<string>(""); // 질문 1
  const [answer5, setAnswer5] = useState<string>(""); // 질문 2
  const [answer6, setAnswer6] = useState<string>(""); // 질문 3
  const [answer7, setAnswer7] = useState<string>(""); // 질문 4
  const [answer8, setAnswer8] = useState<string>(""); // 질문 5
  const [answer9, setAnswer9] = useState<string[]>(["", "", "", "", ""]); // 질문 6 (TOP 5)
  const [step, setStep] = useState<number>(1);

  const router = useRouter();

  // 로컬 스토리지에서 복원
  useEffect(() => {
    const savedAnswer4 = localStorage.getItem("answer4");
    const savedAnswer5 = localStorage.getItem("answer5");
    const savedAnswer6 = localStorage.getItem("answer6");
    const savedAnswer7 = localStorage.getItem("answer7");
    const savedAnswer8 = localStorage.getItem("answer8");
    const savedAnswer9 = localStorage.getItem("answer9");

    if (savedAnswer4) setAnswer4(savedAnswer4);
    if (savedAnswer5) setAnswer5(savedAnswer5);
    if (savedAnswer6) setAnswer6(savedAnswer6);
    if (savedAnswer7) setAnswer7(savedAnswer7);
    if (savedAnswer8) setAnswer8(savedAnswer8);
    if (savedAnswer9) setAnswer9(JSON.parse(savedAnswer9));
  }, []);

  // 로컬 스토리지에 저장
  useEffect(() => {
    localStorage.setItem("answer4", answer4);
    localStorage.setItem("answer5", answer5);
    localStorage.setItem("answer6", answer6);
    localStorage.setItem("answer7", answer7);
    localStorage.setItem("answer8", answer8);
    if (answer9 && answer9.some((val) => val.trim() !== "")) {
      localStorage.setItem("answer9", JSON.stringify(answer9));
    }
  }, [answer4, answer5, answer6, answer7, answer8, answer9]);

  const handleNextStep = () => {
    setStep((prev) => prev + 1);
  };

  const handleAnswer9Change = (index: number, value: string) => {
    const updatedAnswers = [...answer9];
    updatedAnswers[index] = value;
    setAnswer9(updatedAnswers);
  };

  const handleNextPage = () => {
    router.push("/river/3"); // 다음 페이지로 이동
  };

  return (
    <div
      className="min-h-screen flex flex-col justify-start items-center bg-cover bg-center bg-fixed pt-20"
      style={{
        backgroundImage: 'url("/img/river_2.png")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* 첫 번째 질문 */}
      <div className="flex flex-col items-center text-center animate-fadeIn mb-20">
        <p className="  text-white font-bold mb-6">
          가장 자주 연락한 사람은 누구였을까?
          <br />
          통화 목록을 살펴보자.
        </p>
        <input
          type="text"
          value={answer4}
          onChange={(e) => setAnswer4(e.target.value)}
          className="text-center w-2/3 text-white p-2 border-b-2 border-white bg-transparent   focus:outline-none"
        />
        {step === 1 && answer4.trim() && (
          <button
            onClick={handleNextStep}
            className=" text-white mt-4 hover:scale-150 transition-transform duration-300"
          >
            이렇게 연락을 많이 했다니!
          </button>
        )}
      </div>

      {/* 두 번째 질문 */}
      {step >= 2 && (
        <div className="flex flex-col items-center text-center animate-fadeIn mb-20">
          <p className="  text-white font-bold mb-6">
            나에게 가장 큰 영향을 준 사람은?
          </p>
          <input
            type="text"
            value={answer5}
            onChange={(e) => setAnswer5(e.target.value)}
            className="text-center w-2/3 text-white p-2 border-b-2 border-white bg-transparent   focus:outline-none"
          />
          {step === 2 && answer5.trim() && (
            <button
              onClick={handleNextStep}
              className="  text-white mt-4 hover:scale-150 transition-transform duration-300"
            >
              어떤 영향을 받았는데?
            </button>
          )}
        </div>
      )}

      {/* 세 번째 질문 */}
      {step >= 3 && (
        <div className="flex flex-col items-center text-center animate-fadeIn mb-20">
          <p className="  text-white font-bold mb-6">
            올해 새로 친해진 사람이 있어, 그건 ...
          </p>
          <input
            type="text"
            value={answer6}
            onChange={(e) => setAnswer6(e.target.value)}
            className="text-center w-2/3 text-white p-2 border-b-2 border-white bg-transparent   focus:outline-none"
          />
          {step === 3 && answer6.trim() && (
            <button
              onClick={handleNextStep}
              className="  text-white mt-4 hover:scale-150 transition-transform duration-300"
            >
              올해도 누군가를 얻었지!
            </button>
          )}
        </div>
      )}
      {/* 네 번째 질문 */}
      {step >= 4 && (
        <div className="flex flex-col items-center text-center animate-fadeIn mb-20">
          <p className="  text-white font-bold mb-6">
            나에게 생각지도 못한 관심을 준 사람은,
          </p>
          <input
            type="text"
            value={answer7}
            onChange={(e) => setAnswer7(e.target.value)}
            className="text-center w-2/3 text-white p-2 border-b-2 border-white bg-transparent   focus:outline-none"
          />
          {step === 4 && answer7.trim() && (
            <button
              onClick={handleNextStep}
              className="  text-white mt-4 hover:scale-150 transition-transform duration-300"
            >
              고마운 사람이여!
            </button>
          )}
        </div>
      )}

      {/* 다섯 번째 질문 */}
      {step >= 5 && (
        <div className="flex flex-col items-center text-center animate-fadeIn mb-20">
          <p className="  text-white font-bold mb-6">
            연락하고 싶은데 못 한 사람, <br />
            아쉬움이 남는 사람이 있다면 이 사람이야.
          </p>
          <input
            type="text"
            value={answer8}
            onChange={(e) => setAnswer8(e.target.value)}
            className="text-center w-2/3 text-white p-2 border-b-2 border-white bg-transparent   focus:outline-none"
          />
          {step === 5 && answer8.trim() && (
            <button
              onClick={handleNextStep}
              className="  text-white mt-4 hover:scale-150 transition-transform duration-300"
            >
              왜 아쉬움이 남아?
            </button>
          )}
        </div>
      )}

      {/* 여섯 번째 질문 */}
      {step >= 6 && (
        <div className="flex flex-col items-center text-center animate-fadeIn mb-20">
          <p className="  text-white font-bold mb-6">고마운 사람 TOP 5</p>
          <div className="flex flex-col gap-4">
            {answer9.map((answer, index) => (
              <input
                key={index}
                type="text"
                value={answer}
                onChange={(e) => handleAnswer9Change(index, e.target.value)}
                className="text-center w-2/3 text-white p-2 border-b-2 border-white bg-transparent   focus:outline-none placeholder-white placeholder-opacity-50"
                placeholder={`${index + 1}위`}
              />
            ))}
            {answer9.every((ans) => ans.trim() !== "") && (
              <button
                onClick={handleNextPage}
                className="  text-white mt-4 hover:scale-150 transition-transform duration-300"
              >
                나도 있어?!
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
