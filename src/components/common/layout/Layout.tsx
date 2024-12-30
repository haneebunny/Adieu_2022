import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface ProgressLayoutProps {
  totalSteps: number; // 전체 단계
  children: React.ReactNode; // 페이지 콘텐츠
}

const ProgressLayout: React.FC<ProgressLayoutProps> = ({
  totalSteps,
  children,
}) => {
  const router = useRouter();

  // 현재 단계 계산
  const currentStep =
    router.pathname === "/river"
      ? 1 // 첫 페이지는 1
      : parseInt(router.pathname.split("/")[2], 10) + 1; // 나머지는 +1

  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* 단계 표시 헤더 */}
      <header className="fixed w-full backdrop-blur text-white py-2 md:py-4">
        <div className="w-full flex items-center justify-between px-4 md:px-6">
          <h1 className="text-sm md:text-lg font-bold whitespace-nowrap">
            ☀️🌙 과 함께하는 시간
          </h1>
          <Link href="/" className="text-xs md:text-sm whitespace-nowrap">
            홈으로
          </Link>
          <div className="flex gap-1 md:gap-2">
            {[...Array(totalSteps)].map((_, index) => (
              <Link
                href={index === 0 ? `/river` : `/river/${index}`}
                key={index}
                className={`w-6 h-6 md:w-8 md:h-8 flex items-center justify-center rounded-full text-xs md:text-sm ${
                  index + 1 < currentStep
                    ? "bg-green-400"
                    : index + 1 === currentStep
                    ? "bg-yellow-400"
                    : "bg-gray-300"
                }`}
              >
                {index + 1}
              </Link>
            ))}
          </div>
        </div>
      </header>

      {/* 페이지 콘텐츠 */}
      <main className="w-full items-center justify-center max-w-none bg-cover bg-center">
        {children}
      </main>
    </div>
  );
};

export default ProgressLayout;
