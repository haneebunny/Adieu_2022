import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../../firebase";
import axios from "axios";

interface AnswerData {
  name: string;
  [key: string]: any; // 모든 답변 데이터
}

export default function EndingPage() {
  const router = useRouter();
  const { name } = router.query;

  const [data, setData] = useState<AnswerData | null>(null);
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    if (name) {
      fetchFirebaseData(String(name));
      // fetchImages(String(name));
    }
  }, [name]);

  useEffect(() => {
    const fetchImages = async () => {
      if (!name) return;
      try {
        const response = await axios.post("/api/cloudinary", { name });
        const imageUrls = response.data.map((img: any) => img.url);
        setImages(imageUrls);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    console.log("image::", images);
    fetchImages();
  }, [name]);

  // 데이터 정규화 함수
  const normalizeData = (data: Record<string, any>): AnswerData => {
    const normalized: AnswerData = { name: "" }; // 기본 구조

    for (const key in data) {
      if (
        typeof data[key] === "string" &&
        data[key].startsWith("[") &&
        data[key].endsWith("]")
      ) {
        try {
          normalized[key] = JSON.parse(data[key]) as string[]; // JSON 배열로 변환
        } catch {
          normalized[key] = data[key]; // 변환 실패 시 문자열 그대로
        }
      } else {
        normalized[key] = data[key];
      }
    }

    return normalized;
  };

  const fetchFirebaseData = async (userName: string) => {
    try {
      const q = query(
        collection(db, "responses"),
        where("name", "==", userName)
      );
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        const docData = querySnapshot.docs[0].data();
        setData(normalizeData(docData));
        console.log(data);
      } else {
        alert("Firebase 데이터가 없습니다.");
      }
    } catch (error) {
      console.error("Error fetching Firebase data:", error);
      alert("Firebase 데이터 로드 중 오류가 발생했습니다.");
    }
  };

  // const fetchImages = (userName: string) => {
  //   const urls = [];
  //   for (let i = 1; i <= 10; i++) {
  //     urls.push(`/img/${userName}/${userName}_answer24_${i}.png`);
  //   }
  // };

  const getDisplayText = (text: any) => {
    if (typeof text === "string") {
      return text.trim() && text.length > 1 ? <p>{text}</p> : "이건 없었어.";
    }
    if (Array.isArray(text)) {
      return text.map((t, index) =>
        t.trim() && t.length > 1 ? (
          <p key={index}>{`⭐️${index + 1}위⭐️ ${t}`}</p>
        ) : (
          <p key={index}>이건 없었어.</p>
        )
      );
    }
    return "이건 없었어.";
  };

  if (!data) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        로딩 중...
      </div>
    );
  }

  const questions = [
    "올해는 한 마디로,",
    `${name}의  🍀`,
    `${name} 2024 최고의 순간`,
    "가장 자주 연락한 사람은... 두구두구~! 바로바로!",
    `${name}에게 가장 큰 영향을 준 사람은 `,
    "2024년에도 누군가를 알게 되었어.",
    "생각지도 못한 관심을 준 사람,",
    "연락해볼까?♤",
    "† 대박적 고마운 사람 Top 5 †",
    `${name} 2024년의 노래 🎵`,
    "2024년의 노래들을 소개합니다 ^^",
    "2024년의 동영상🥸",
    "영향을 미친 영상은 🥴",
    "2025년에 처음으로 듣고 싶던 노래, 들었어?",
    "📖2024 대표 책📖",
    "2025년에 이 책을 꼭 읽도록!",
    "2024, 나를 감동시킨 영화",
    "2025년에 보고 싶은 영화는,",
    "SOUL FOOD of 2024 is ",
    "조금이라도 행복에 기여한 말😗",
    "🎀취미로는 이런 걸 했지,🎀",
    "새로운 취미도 생겼어!!",
    "what will you do for fun in 2025?",
    "올해의 대표 사진",
    "올해의 사진 10장만 뽑아서 보여줘!",
  ];

  return (
    <div
      className="min-h-screen flex flex-col items-center bg-gray-900 text-white overflow-auto relative bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(/img/${name}/${name}.png)`,
      }}
    >
      <div className="text-center mt-10">
        {questions.map((question, index) => (
          <p key={index} className="p-16 leading-relaxed">
            {question} {getDisplayText(data[`answer${index + 1}`])}
          </p>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4">
        {images.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Image ${index + 1}`}
            className="w-32 h-32 object-cover"
          />
        ))}
      </div>
    </div>
  );
}
