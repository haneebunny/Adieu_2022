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
  const [inputs, setInputs] = useState({
    1: "",
    2: "",
  });
  const [adieu2022, set2022] = useState<any>();

  const onChangeInput = (e: any) => {
    console.log(e);
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
    console.log(inputs);
  };

  const onSubmit = (e: any) => {
    e.preventDefault();

    set2022(inputs);
    console.log(adieu2022);
  };
  return (
    <>
      mandu : {mandu}
      prevMandu : {prevMandu};<button onClick={onClickButton}>데펴</button>
      <QuestionUI
        tagItem={tagItem}
        tagList={tagList}
        setTagItem={setTagItem}
        setTagList={setTagList}
        onSubmit={onSubmit}
        onChangeInput={onChangeInput}
        inputs={inputs}
        setInputs={setInputs}
      />
    </>
  );
}
