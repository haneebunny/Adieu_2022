import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../../firebase";

interface AnswerData {
  name: string;
  [key: string]: any; // 모든 답변 데이터
}

export default function EndingPage() {
  const router = useRouter();
  const { name } = router.query;

  const [data, setData] = useState<AnswerData | null>(null);
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  useEffect(() => {
    if (name) {
      fetchFirebaseData(String(name));
      fetchImages(String(name));
    }
  }, [name]);

  const fetchFirebaseData = async (userName: string) => {
    try {
      const q = query(
        collection(db, "responses"),
        where("name", "==", userName)
      );
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        const docData = querySnapshot.docs[0].data();
        setData(docData as AnswerData);
      } else {
        alert("Firebase 데이터가 없습니다.");
      }
    } catch (error) {
      console.error("Error fetching Firebase data:", error);
      alert("Firebase 데이터 로드 중 오류가 발생했습니다.");
    }
  };

  const fetchImages = (userName: string) => {
    const urls = [];
    for (let i = 1; i <= 10; i++) {
      urls.push(`/img/${userName}/${userName}_answer24_${i}.png`);
    }
    setImageUrls(urls);
  };

  const getDisplayText = (text: any) => {
    if (typeof text === "string") {
      return text.trim() && text.length > 1 ? text : "이건 없었어.";
    }
    if (Array.isArray(text)) {
      return text.map((t, index) =>
        t.trim() && t.length > 1 ? (
          <p key={index}>{`${index + 1}위: ${t}`}</p>
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
    "올해는 한 마디로",
    "이런 순간, 나는 행운이라고 느꼈어.",
    "올해 최고의 순간 Top 3를 꼽자면...",
    "가장 자주 연락한 사람은 누구였을까? 통화 목록을 살펴보자.",
    "나에게 가장 큰 영향을 준 사람은?",
    "올해 새로 친해진 사람이 있어, 그건 ...",
    "나에게 생각지도 못한 관심을 준 사람은,",
    "연락하고 싶었지만 못 한 사람, 아쉬움이 남는 사람이 있다면 이 사람이야.",
    "고마운 사람 Top 5",
    "올해의 소울푸드 소개 좀 시켜줘",
    "칭찬받았던 좋은 이야기는",
    "올해의 취미는 뭐였어?",
    "새로 생긴 취미가 있어?",
    "내년에 도전하고 싶은 건",
    "가장 많이 들었던 노래는?",
    "올해의 노래 Top 3만 꼽자면?",
    "가장 좋았던 영상은? (아예 링크를 써줘도 좋아!)",
    "가장 큰 영향을 미친 영상이 있나?",
    "내년에 들을 첫 곡",
    "올해 읽었던 책 중 가장 기억에 남는 책은?",
    "내년에 읽을 책 하나만 써보자!",
    "올해의 영화 하나만!",
    "보고싶은 영화 있어?",
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
          <p key={index} className="mb-10 leading-relaxed">
            {question}: {getDisplayText(data[`answer${index + 1}`])}
          </p>
        ))}
      </div>

      {/* 이미지 갤러리 */}
      <div className="mt-20 grid grid-cols-2 gap-4">
        {imageUrls.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`추가 이미지 ${index + 1}`}
            className="w-64 h-64 object-cover rounded-lg"
          />
        ))}
      </div>
    </div>
  );
}
