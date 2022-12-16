import { useEffect, useState } from "react";
import YouTube, { YouTubePlayer, YouTubeProps } from "react-youtube";
import {
  collection,
  getFirestore,
  getDocs,
  DocumentData,
} from "firebase/firestore/lite";
import { firebaseApp } from "../../../../pages/_app";

// let randomMusic = musicList[Math.floor(Math.random() * musicList.length)];

export default function Music() {
  const [musicTitle, setMusicTitle] = useState("");
  const [dataMusics, setDataMusics] = useState<any>();
  const [playList, setPlayList] = useState([]);

  useEffect(() => {
    async function fetchMusics() {
      const music = collection(getFirestore(firebaseApp), "music");
      const result = await getDocs(music);
      console.log(result);
      const musics = result.docs.map((el) => el.data());
      console.log(musics);
      setDataMusics(musics);
    }
    fetchMusics();
  }, []);

  useEffect(() => {
    const tempList = dataMusics?.map((el: any) =>
      youtube_parser(el.url).toString()
    );
    setPlayList(tempList);

    // 파이어베이스에서 받아온 데이터로 랜덤 목록 생성
  }, [dataMusics]);

  function youtube_parser(url: string) {
    var regExp =
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return match && match[7].length == 11 ? match[7] : false;
  }

  console.log(dataMusics);
  const options: YouTubeProps["opts"] = {
    width: "1280",
    height: "720",
    playerVars: {
      autoplay: 1,
      modestbranding: 1, // Youtube 로고 컨트롤바에서 표시 X
      rel: 0, // 재생 종료 시 플레이어에서 관련 동영상 표시 X
      loop: 1, // 동영상 반복 재생 O(목록은 목록을 순회함)
      // list: "PLC77007E23FF423C6",
      playlist: playList, // musicList에서 id만 뽑아서? 안되나
      shuffle: 1,
    },
  };

  // 링크들을 받아와서, 아이디를 추출해서
  // 재생목록에 추가한 뒤, 목록에서 랜덤 추천

  // 제목은 그냥 내가 제목 목록을 만들어둘까,, 아이디랑 매칭해서
  // 노래 재생목록 재생은 되는데 셔플이 안되고 randomMusic도 바뀌지 않으니까...
  useEffect(() => {
    console.log(YouTube.name);

    // const embedCode = YouTubePlayer.getVideoEmbedCode();
    // console.log(embedCode);
  }, []);

  const getPlayerCode = (event: any) => {
    console.log(
      event.target.getVideoEmbedCode().split("title")[1].split('"')[1]
    );
    setMusicTitle(
      event.target.getVideoEmbedCode().split("title")[1].split('"')[1]
    );
    event.target.setShuffle(true);
  };
  return (
    <div>
      <YouTube
        // videoId={randomMusic.id}
        opts={options}
        onReady={getPlayerCode}
      />
      지금, {musicTitle} 어때?
    </div>
  );
}
