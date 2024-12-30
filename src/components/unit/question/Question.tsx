import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Question() {
  const [name, setName] = useState<string>("");
  const router = useRouter();

  // 로컬 스토리지에서 이름 복원
  useEffect(() => {
    const savedName = localStorage.getItem("name");
    if (savedName) setName(savedName);
  }, []);

  // 이름 입력 값 로컬 스토리지에 저장
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value);
    localStorage.setItem("name", value);
  };

  // 다음 페이지로 이동
  const handleNext = () => {
    router.push("/river/1");
  };

  return (
    <div
      className="h-screen flex flex-col justify-center items-center bg-cover bg-center"
      style={{
        backgroundImage: 'url("/img/river_0.png")',
      }}
    >
      <div className="flex flex-row items-baseline gap-4">
        {/* 나의 이름은 텍스트 */}
        <p className="text-4xl text-white font-bold animate-fadeIn">
          나의 이름은
        </p>

        {/* input 필드와 밑줄 */}
        <div className="relative w-64">
          <input
            type="text"
            value={name}
            onChange={handleChange}
            className="w-full text-center text-white p-2 bg-transparent text-4xl focus:outline-none z-10"
            style={{ animationDelay: "1.5s" }} // input 타이밍 맞추기
          />
          {/* 밑줄 애니메이션 */}
          <div className="absolute bottom-0 left-0 w-full h-0.5  opacity-0 bg-white animate-underline delay-1500"></div>
        </div>

        {/* 버튼 */}
        {name.trim() && (
          <button
            onClick={handleNext}
            className="text-3xl text-white hover:scale-150 transition-transform duration-300"
          >
            •
          </button>
        )}
      </div>
    </div>
  );
}
