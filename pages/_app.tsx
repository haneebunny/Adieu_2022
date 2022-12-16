import "../styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";

// firebase
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

declare global {
  // Kakao 함수를 전역에서 사용할 수 있도록 선언
  interface Window {
    Kakao: any;
  }
}
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_KEY,
  authDomain: "adieu-2022.firebaseapp.com",
  projectId: "adieu-2022",
  storageBucket: "adieu-2022.appspot.com",
  messagingSenderId: "899892134820",
  appId: "1:899892134820:web:affedc92d952225d7a7731",
  measurementId: "G-SGFQZ8WSNM",
};

export const firebaseApp = initializeApp(firebaseConfig);

// const analytics = getAnalytics(app);

export default function App({ Component, pageProps }: AppProps) {
  function kakaoInit() {
    window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JS_KEY);
    console.log(window.Kakao.isInitialized());
  }

  return (
    <>
      <Component {...pageProps} />
      <Script
        src="https://developers.kakao.com/sdk/js/kakao.js"
        onLoad={kakaoInit}
      />
    </>
  );
}
