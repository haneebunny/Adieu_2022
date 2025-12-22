import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../../firebase";
import axios from "axios";
import { GetServerSideProps } from "next";

// styles
import * as S from "./Ending.styles";

interface AnswerData {
  name: string;
  [key: string]: any; // 모든 답변 데이터
}

export default function EndingPage({ name }: { name: string }) {
  const [data, setData] = useState<AnswerData | null>(null);
  const [images, setImages] = useState<string[]>([]);
  const [videoId, setVideoId] = useState<string | null>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (name) {
      fetchFirebaseData(String(name));
      fetchImages();
    }
  }, [name]);

  useEffect(() => {
    if (data?.answer10) {
      fetchYouTubeVideo();
    }
  }, [data?.answer10]);

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

  // mute 토글
  const toggleMute = () => setIsMuted(!isMuted);

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

  const fetchYouTubeVideo = async () => {
    if (!data?.answer10) return;
    try {
      const apiKey = "AIzaSyCwmlYLtWaTvaFMAsDsNia6PioZanwZpxU"; // 🔥 여기에 YouTube API 키 입력
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
          data?.answer10
        )}&type=video&key=${apiKey}`
      );
      console.log("YouTube API 응답:", response.data); // ✅ API 응답 확인

      if (response.data.items.length > 0) {
        setVideoId(response.data.items[0].id.videoId);
      } else {
        console.warn("YouTube API에서 검색된 영상이 없음.");
      }
    } catch (error) {
      console.error("YouTube API 요청 실패:", error);
    }
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
        console.log("받은 데이터::", data);
        if (data?.answer10) fetchYouTubeVideo();
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
          <p key={index}>{`${index + 1}위 ${t}`}</p>
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
    `${name} 2025 최고의 순간`,
    "가장 자주 연락한 사람은... 두구두구~! 바로바로!",
    `${name}에게 가장 큰 영향을 준 사람은 `,
    "2025년에도 누군가를 알게 되었어.",
    "생각지도 못한 관심을 준 사람,",
    "연락해볼까?♤",
    "† 대박적 고마운 사람 Top 5 †",
    `${name} 2025년의 노래 🎵`,
    "2025년의 노래들을 소개합니다 ^^",
    "2025년의 동영상🥸",
    "영향을 미친 영상은 🥴",
    "2025년에 처음으로 듣고 싶던 노래, 들었어?",
    "📖2025 대표 책📖",
    "2025년에 이 책을 꼭 읽도록!",
    "2025, 나를 감동시킨 영화",
    "2025년에 보고 싶은 영화는,",
    "SOUL FOOD of 2025 is ",
    "조금이라도 행복에 기여한 말😗",
    "🎀취미로는 이런 걸 했지,🎀",
    "새로운 취미도 생겼어!!",
    "what will you do for fun in 2025?",
    "올해의 대표 사진",
    "올해의 사진 10장만 뽑아서 보여줘!",
  ];

  return (
    <S.Wrapper className="w-full min-h-screen flex flex-col items-center bg-gray-100 text-black">
      <h1>{name}의 2025 ?</h1>
      <h1>"{data?.answer1}"</h1>
      <div className="w-full border border-b" />
      <S.NewsPaperLayout>
        <S.ArticleStyle className="flex flex-col">
          <h3 className="text-center">LUCKY-POINT</h3>
          <p className=" text-5xl font-bold">{data?.answer2}</p>
          <div className="border border-b-gray100"></div>
          <h1 className=" text-gray-500">
            신기자는 취재한 결과를 모조리 공개했다. 이번 호는 {name}에 대한 모든
            것을 파헤친다! 는 일념으로.
          </h1>
          <h1 className=" text-red-500">
            이 신문에는 광고가 포함되어 있을 수 있습니다.
          </h1>
        </S.ArticleStyle>

        <S.ArticleStyle className="w-full">
          <img
            className="object-cover"
            src={images?.filter((img) => img.includes("answer24"))}
          />
          <span>▲ {name}의 2025년을 대표하는 사진이다. </span>
        </S.ArticleStyle>

        <S.ArticleStyle className="col-span-2">
          <h2 className="text-center">그가 뽑은 최고의 순간들</h2>
          <div className="border p-2">
            <p>{getDisplayText(data["answer3"])} </p>
          </div>

          <p>{name} : "이런 순간들이 있었죠..." </p>
        </S.ArticleStyle>
        <S.ArticleStyle className="col-span-1">
          <h2 className="text-center">사생활을 캐보다</h2>
          <div className="border p-2">
            <p className="italic">가장 자주 연락한 사람은 누군가요?</p>
            <p>
              {name} : "(멋쩍게 웃으며){data?.answer4}""
            </p>
            <p className="italic">새로 친해진 사람은?</p>
            <p>
              {name} : "{data?.answer6}"
            </p>
            <p className="italic">기대 안 했는데 관심을 준 사람도 있나요?</p>
            <p>
              {name} : "그건 {data?.answer7}
              이죠."
            </p>
            <p className="italic">
              그는 묻지도 않은 것에 대답을 하기 시작했다.
            </p>
            <span>
              "흠, 올해 저에게 가장 많은 영향을 미친 사람은... 아무래도{" "}
              {data?.answer5}...?
            </span>
            <span>아쉬운 사람은 {data?.answer8}..."</span>
          </div>

          <p>충격 소신 발언에 기자는 정신을 차릴 수 없었다.</p>
        </S.ArticleStyle>
        <S.ArticleStyle className="col-span-1">
          <h2 className="text-center">고마워요!</h2>
          <div className="border p-2">
            <p>{getDisplayText(data["answer9"])} </p>
          </div>

          <p>{name} : "정말 감사합니다. Merci beaucoup. " </p>
        </S.ArticleStyle>
        <S.ArticleStyle className="col-span-2">
          <h2 className="text-center">책책책, 책을 읽읍시다.</h2>
          <div className="border p-2">
            <p>
              {name} : "{data?.answer15}, 이 책이 좋았어요.{data?.answer16}은
              2025년에 읽어보려 해요."
            </p>
            <p className="italic">
              그는 잠시 고개를 갸웃하더니 영화도 말해도 되냐며 말을 이어갔다.
              ... (화제 전환)
            </p>

            <p>
              {name} : "{data?.answer17} 이 영화를 보고 살짝 감정이...
              북받쳤죠."
            </p>
            <p className="italic">
              book받쳤다는 점에서 책과 연결성이 있다고 판단한 기자는 그의 말을
              계속 받아적었다.
            </p>
            <p>
              {name} : "{data?.answer18} 이건 2025년에 보려고 해요."
            </p>
          </div>

          <p>책과 영화는 우리 삶에 꼭 필요한 양식(not form yes bread)이다.</p>
        </S.ArticleStyle>

        <S.ArticleStyle className="w-full">
          <img
            className="object-cover"
            src={images?.filter((img) => img.includes("answer25"))[0]}
          />
          <span>▲ (광고) </span>
        </S.ArticleStyle>
        <S.ArticleStyle className="col-span-1">
          <h2 className="text-center">what do you do for fun?</h2>
          <div className="border p-2">
            <p className="italic">취미는 어떤 걸 즐기셨습니까?</p>

            <p>
              {name} : "{data?.answer19}, 이게 진짜 맛있었죠."
            </p>
            <p className="italic">아뇨. 전 취미를 여쭤봤는데요.</p>

            <p>
              {name} : "{data?.answer21} 이런 걸 주로 했어요."
            </p>
            <p className="italic">그는 멋쩍게 웃으며 대답을 이어나갔다.</p>
            <p>
              {name} : "새로 생긴 취미는, 아마도 {data?.answer22}... 도전해보고
              싶은 건 {data?.answer23}고요."
            </p>
          </div>

          <p>A passing pig : "맛있는 음식은 좋은 취미와 같다."</p>
        </S.ArticleStyle>
        <div className="col-span-2 relative w-full overflow-hidden bg-black text-white">
          <h1 className="animate-marquee">{data?.answer20}</h1>
        </div>
        <S.ArticleStyle className="col-span-1">
          <img
            className="object-cover"
            src={images?.filter((img) => img.includes("answer25"))[1]}
          />
          <span>▲ (광고) </span>
        </S.ArticleStyle>
        <S.ArticleStyle className="col-span-1">
          <img
            className="object-cover"
            src={images?.filter((img) => img.includes("answer25"))[3]}
          />
          <span>▲ (광고) </span>
        </S.ArticleStyle>
        <S.ArticleStyle className="col-span-2">
          <h2 className="text-center">그의 왓츠인마이엠피쓰리</h2>
          <div className="border p-2">
            <p className="italic">2025년의 MUSIC,,, is</p>
            <p className="text-center text-pink-500">{data?.answer10}</p>
            <p>"들어볼래요?"</p>
            {isMuted ? (
              <button onClick={toggleMute}>💛(왠지 누르고 싶게 생겼다.)</button>
            ) : (
              <button onClick={toggleMute}>
                🖤(누르면 노래가 멈출 것 같다.)
              </button>
            )}
            <p className="italic">하나는 아쉬우니까 세 개 더...</p>
            <div className="border p-2">
              <p>{getDisplayText(data["answer11"])} </p>
            </div>
            <p>
              {name} : "{data?.answer12}, 이 영상이 mp3에 있어요.""
            </p>
            <p className="italic">
              그럼, 없을 수도 있지만, 당신에게 영향을 미친 영상이 있나요?
            </p>
            <p>
              {name} : "아마도 {data?.answer13}..."
            </p>
          </div>

          <p>
            새해 첫 곡대로 한 해가 흘러간다는데,
            <span className="text-red-500"> {data?.answer14}</span>이 노래는
            어떠신지?
          </p>
        </S.ArticleStyle>
        {/* {videoId && ( */}
        <iframe
          width="0"
          height="0"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}&mute=${
            isMuted ? "1" : "0"
          }`}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          referrerPolicy="no-referrer-when-downgrade"
        />
        {/* )} */}

        {/* <div className="text-center mt-10">
          {questions.map((question, index) => (
            <p key={index} className="p-16 leading-relaxed">
              {question} {getDisplayText(data[`answer${index + 1}`])}
            </p>
          ))}
        </div> */}
      </S.NewsPaperLayout>

      <S.ArticleStyle className="col-span-2">
        <h1 className="text-center">그의 보물상자...</h1>
        <div className="grid grid-cols-3 gap-4">
          {images.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`Image ${index + 1}`}
              className="w-full h-full max-w-64 max-h-64 object-cover"
            />
          ))}
        </div>
      </S.ArticleStyle>
    </S.Wrapper>
  );
}
