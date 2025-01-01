import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Question4() {
  const [answer15, setAnswer15] = useState<string>(""); // 질문 1
  const [answer16, setAnswer16] = useState<string>(""); // 질문 2
  const [answer17, setAnswer17] = useState<string>(""); // 질문 3
  const [answer18, setAnswer18] = useState<string>(""); // 질문 4
  const [step, setStep] = useState<number>(1);

  const router = useRouter();

  // 로컬 스토리지에서 복원
  useEffect(() => {
    const savedAnswer15 = localStorage.getItem("answer15");
    const savedAnswer16 = localStorage.getItem("answer16");
    const savedAnswer17 = localStorage.getItem("answer17");
    const savedAnswer18 = localStorage.getItem("answer18");

    if (savedAnswer15) setAnswer15(savedAnswer15);
    if (savedAnswer16) setAnswer16(savedAnswer16);
    if (savedAnswer17) setAnswer17(savedAnswer17);
    if (savedAnswer18) setAnswer18(savedAnswer18);
  }, []);

  // 로컬 스토리지에 저장
  useEffect(() => {
    localStorage.setItem("answer15", answer15);
    localStorage.setItem("answer16", answer16);
    localStorage.setItem("answer17", answer17);
    localStorage.setItem("answer18", answer18);
  }, [answer15, answer16, answer17, answer18]);

  const handleNextStep = () => {
    setStep((prev) => prev + 1);
  };

  const handleNextPage = () => {
    router.push("/river/5"); // 다음 페이지로 이동
  };

  return (
    <div
      className="min-h-screen flex flex-col justify-start items-center bg-cover bg-center bg-fixed pt-20"
      style={{
        backgroundImage: 'url("/img/river_4.png")',
        backgroundSize: "screen",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* 첫 번째 질문 */}
      <div className="flex flex-col items-center text-center animate-fadeIn mb-20">
        <p className="  text-white font-bold mb-6">
          올해 책 읽었어? 어떤 책을 올해의 책으로 꼽을 수 있을까?
        </p>
        <input
          type="text"
          value={answer15}
          onChange={(e) => setAnswer15(e.target.value)}
          className="text-center min-w-2/3 max-w-[800px] w-3/4 text-white p-2 border-b-2 border-white bg-transparent   focus:outline-none"
        />
        {step === 1 && answer15.trim() && (
          <button
            onClick={handleNextStep}
            className="  text-white mt-4 hover:scale-150 transition-transform duration-300"
          >
            올해의 책이구나!
          </button>
        )}
      </div>

      {/* 두 번째 질문 */}
      {step >= 2 && (
        <div className="flex flex-col items-center text-center animate-fadeIn mb-20">
          <p className="  text-white font-bold mb-6">
            내년에 읽을 책 하나만 써보자! <br /> 내년에 꼭 읽어야해.
          </p>
          <input
            type="text"
            value={answer16}
            onChange={(e) => setAnswer16(e.target.value)}
            className="text-center min-w-2/3 max-w-[800px] w-3/4 text-white p-2 border-b-2 border-white bg-transparent   focus:outline-none"
          />
          {step === 2 && answer16.trim() && (
            <button
              onClick={handleNextStep}
              className="  text-white mt-4 hover:scale-150 transition-transform duration-300"
            >
              꼭 읽어야지!
            </button>
          )}
        </div>
      )}

      {/* 세 번째 질문 */}
      {step >= 3 && (
        <div className="flex flex-col items-center text-center animate-fadeIn mb-20">
          <p className="  text-white font-bold mb-6">
            올해의 영화 하나만! 딱 떠오르는 것, <br />
            아니면 너를 울렸던 것 ~
          </p>
          <input
            type="text"
            value={answer17}
            onChange={(e) => setAnswer17(e.target.value)}
            className="text-center min-w-2/3 max-w-[800px] w-3/4 text-white p-2 border-b-2 border-white bg-transparent   focus:outline-none"
          />
          {step === 3 && answer17.trim() && (
            <button
              onClick={handleNextStep}
              className="  text-white mt-4 hover:scale-150 transition-transform duration-300"
            >
              없다고 하지마
            </button>
          )}
        </div>
      )}

      {/* 네 번째 질문 */}
      {step >= 4 && (
        <div className="flex flex-col items-center text-center animate-fadeIn mb-20">
          <p className="  text-white font-bold mb-6">
            보고싶은 영화 있어? 아니면 기다리는 영화?
          </p>
          <input
            type="text"
            value={answer18}
            onChange={(e) => setAnswer18(e.target.value)}
            className="text-center min-w-2/3 max-w-[800px] w-3/4 text-white p-2 border-b-2 border-white bg-transparent   focus:outline-none"
          />
          {step === 4 && answer18.trim() && (
            <button
              onClick={handleNextPage}
              className="  text-white mt-4 hover:scale-150 transition-transform duration-300"
            >
              가치볼래?우하하
            </button>
          )}
        </div>
      )}
    </div>
  );
}
