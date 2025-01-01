import "../styles/globals.css";
import type { AppProps } from "next/app";

import ProgressLayout from "../src/components/common/layout/Layout";

declare global {
  // Kakao 함수를 전역에서 사용할 수 있도록 선언
  interface Window {
    Kakao: any;
  }
}

export default function App({ Component, pageProps }: AppProps) {
  const totalSteps = 7; // 전체 단계 수

  function kakaoInit() {
    window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JS_KEY);
    console.log(window.Kakao.isInitialized());
  }

  return (
    <>
      <ProgressLayout totalSteps={totalSteps}>
        <Component {...pageProps} />
      </ProgressLayout>
      {/* <Script
        src="https://developers.kakao.com/sdk/js/kakao.js"
        onLoad={kakaoInit}
      /> */}
    </>
  );
}
