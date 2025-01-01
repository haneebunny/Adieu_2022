import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Question5() {
  const [answer19, setAnswer19] = useState<string>(""); // 질문 1
  const [answer20, setAnswer20] = useState<string>(""); // 질문 2
  const [answer21, setAnswer21] = useState<string>(""); // 질문 3
  const [answer22, setAnswer22] = useState<string>(""); // 질문 4
  const [answer23, setAnswer23] = useState<string>(""); // 질문 5
  const [step, setStep] = useState<number>(1);

  const router = useRouter();

  // 로컬 스토리지에서 복원
  useEffect(() => {
    const savedAnswer19 = localStorage.getItem("answer19");
    const savedAnswer20 = localStorage.getItem("answer20");
    const savedAnswer21 = localStorage.getItem("answer21");
    const savedAnswer22 = localStorage.getItem("answer22");
    const savedAnswer23 = localStorage.getItem("answer23");

    if (savedAnswer19) setAnswer19(savedAnswer19);
    if (savedAnswer20) setAnswer20(savedAnswer20);
    if (savedAnswer21) setAnswer21(savedAnswer21);
    if (savedAnswer22) setAnswer22(savedAnswer22);
    if (savedAnswer23) setAnswer23(savedAnswer23);
  }, []);

  // 로컬 스토리지에 저장
  useEffect(() => {
    localStorage.setItem("answer19", answer19);
    localStorage.setItem("answer20", answer20);
    localStorage.setItem("answer21", answer21);
    localStorage.setItem("answer22", answer22);
    localStorage.setItem("answer23", answer23);
  }, [answer19, answer20, answer21, answer22, answer23]);

  const handleNextStep = () => {
    setStep((prev) => prev + 1);
  };

  const handleNextPage = () => {
    router.push("/river/6"); // 다음 페이지로 이동
  };

  return (
    <div
      className="min-h-screen flex flex-col justify-start items-center bg-cover bg-center bg-fixed pt-20"
      style={{
        backgroundImage: 'url("/img/river_5.png")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* 첫 번째 질문 */}
      <div className="flex flex-col items-center text-center animate-fadeIn mb-20">
        <p className="  text-white font-bold mb-6">
          올해의 소울푸드 소개 좀 시켜줘
        </p>
        <input
          type="text"
          value={answer19}
          onChange={(e) => setAnswer19(e.target.value)}
          className="text-center min-w-2/3 max-w-[800px] w-3/4 text-white p-2 border-b-2 border-white bg-transparent   focus:outline-none"
        />
        {step === 1 && answer19.trim() && (
          <button
            onClick={handleNextStep}
            className="  text-white mt-4 hover:scale-150 transition-transform duration-300"
          >
            사줘
          </button>
        )}
      </div>

      {/* 두 번째 질문 */}
      {step >= 2 && (
        <div className="flex flex-col items-center text-center animate-fadeIn mb-20">
          <p className="  text-white font-bold mb-6">
            칭찬받았거나 들었던 얘기 중에 좋았던 거 있어?! <br />
            나만 있나? 난 캡쳐본도 있어
          </p>
          <input
            type="text"
            value={answer20}
            onChange={(e) => setAnswer20(e.target.value)}
            className="text-center min-w-2/3 max-w-[800px] w-3/4 text-white p-2 border-b-2 border-white bg-transparent   focus:outline-none"
          />
          {step === 2 && answer20.trim() && (
            <button
              onClick={handleNextStep}
              className="  text-white mt-4 hover:scale-150 transition-transform duration-300"
            >
              증빙자료 있지?!
            </button>
          )}
        </div>
      )}

      {/* 세 번째 질문 */}
      {step >= 3 && (
        <div className="flex flex-col items-center text-center animate-fadeIn mb-20">
          <p className="  text-white font-bold mb-6">올해의 취미는 뭐였어?</p>
          <input
            type="text"
            value={answer21}
            onChange={(e) => setAnswer21(e.target.value)}
            className="text-center min-w-2/3 max-w-[800px] w-3/4 text-white p-2 border-b-2 border-white bg-transparent   focus:outline-none"
          />
          {step === 3 && answer21.trim() && (
            <button
              onClick={handleNextStep}
              className="  text-white mt-4 hover:scale-150 transition-transform duration-300"
            >
              취미가 멋진데!
            </button>
          )}
        </div>
      )}

      {/* 네 번째 질문 */}
      {step >= 4 && (
        <div className="flex flex-col items-center text-center animate-fadeIn mb-20">
          <p className="  text-white font-bold mb-6">새로 생긴 취미가 있어?</p>
          <input
            type="text"
            value={answer22}
            onChange={(e) => setAnswer22(e.target.value)}
            className="text-center min-w-2/3 max-w-[800px] w-3/4 text-white p-2 border-b-2 border-white bg-transparent   focus:outline-none"
          />
          {step === 4 && answer22.trim() && (
            <button
              onClick={handleNextStep}
              className="  text-white mt-4 hover:scale-150 transition-transform duration-300"
            >
              취미가 생겼구나!
            </button>
          )}
        </div>
      )}

      {/* 다섯 번째 질문 */}
      {step >= 5 && (
        <div className="flex flex-col items-center text-center animate-fadeIn mb-20">
          <p className="  text-white font-bold mb-6">
            내년엔 어떤 걸 도전해보고 싶어? 커리어적으로 말고 just for fun~
          </p>
          <input
            type="text"
            value={answer23}
            onChange={(e) => setAnswer23(e.target.value)}
            className="text-center min-w-2/3 max-w-[800px] w-3/4 text-white p-2 border-b-2 border-white bg-transparent   focus:outline-none"
          />
          {step === 5 && answer23.trim() && (
            <button
              onClick={handleNextPage}
              className="  text-white mt-4 hover:scale-150 transition-transform duration-300"
            >
              나도 가취해
            </button>
          )}
        </div>
      )}
    </div>
  );
}
