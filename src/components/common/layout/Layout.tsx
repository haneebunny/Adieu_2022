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
    <div className="min-h-screen flex flex-col w-full bg-gray-900 text-white">
      {/* 단계 표시 헤더 */}
      {!router.pathname.includes("ending_credit") && (
        <header className="fixed w-full backdrop-blur bg-opacity-80 py-2 md:py-4">
          <div className="flex items-center justify-between px-4 md:px-6">
            <h1 className="text-xs sm:text-sm md:text-lg font-bold whitespace-nowrap">
              ☀️🌙 과 함께하는 시간
            </h1>

            <div className="flex gap-1 md:gap-2">
              {[...Array(totalSteps)].map((_, index) => (
                <Link
                  href={index === 0 ? `/river` : `/river/${index}`}
                  key={index}
                  className={`w-5 h-5 sm:w-4 sm:h-4 md:w-8 md:h-8 flex items-center justify-center rounded-full text-xs sm:text-sm ${
                    index + 1 < currentStep
                      ? "bg-customGreen"
                      : index + 1 === currentStep
                      ? "bg-customDGreen"
                      : "bg-gray-400"
                  }`}
                >
                  {index + 1}
                </Link>
              ))}
            </div>
          </div>
        </header>
      )}

      {/* 페이지 콘텐츠 */}
      <main className="">{children}</main>
    </div>
  );
};

export default ProgressLayout;
