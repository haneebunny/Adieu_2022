import { useRef, useEffect, useState } from "react";
import QuestionUI from "./Question.presenter";

function usePrevState(state: any) {
  const ref = useRef();
  //rendering 후 실행됨
  useEffect(() => {
    ref.current = state;
  });
  return ref.current;
}

export default function Question() {
  const [mandu, setMandu] = useState("만두");
  const prevMandu = usePrevState(mandu);

  const onClickButton = () => {
    setMandu((prev) => "뜨거운" + prev);
  };

  const [tagItem, setTagItem] = useState("");
  const [tagList, setTagList] = useState([]);
  const [imageUrl, setImageUrl] = useState(""); //썸네일 미리보기 url
  const [fileUrl, setFileUrl] = useState(""); //사진등록 url

  return (
    <>
      mandu : {mandu}
      prevMandu : {prevMandu};<button onClick={onClickButton}>데펴</button>
      <QuestionUI
        tagItem={tagItem}
        tagList={tagList}
        setTagItem={setTagItem}
        setTagList={setTagList}
      />
    </>
  );
}
