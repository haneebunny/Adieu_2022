import { useRef, useEffect, useState } from "react";
import { questions_2022 } from "./data/Questions_2022";
import { questions_happiness } from "./data/Question_book&happiness";
import { questions_contents } from "./data/Question_contents";
import { questions_people } from "./data/Question_people";
import { questions_photo } from "./data/Question_photo";
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

  const questions = [
    questions_2022,
    questions_people,
    questions_photo,
    questions_contents,
    questions_happiness,
  ];

  const onClickButton = () => {
    setMandu((prev) => "뜨거운" + prev);
  };

  const [tagItem, setTagItem] = useState("");
  const [tagList, setTagList] = useState([]);
  const [imageUrl, setImageUrl] = useState(""); //썸네일 미리보기 url
  const [fileUrls, setFileUrls] = useState([]); //사진등록 url
  const [inputs, setInputs] = useState({
    1: "",
    2: "",
  });
  const [adieu2022, set2022] = useState<any>();
  const [questionArr, setQuestionArr] = useState<any>(questions[0]);
  const [currentPage, setCurrentPage] = useState(1);

  const onChangeInput = (e: any) => {
    console.log(e);
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
    console.log(inputs);
  };

  const onClickNext = () => {
    setCurrentPage((prev) => prev + 1);
    setQuestionArr(questions[currentPage]);
  };

  const onSubmit = (e: any) => {
    e.preventDefault();

    set2022(inputs);
    console.log(adieu2022);
  };

  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  return (
    <>
      {/* mandu : {mandu}
      prevMandu : {prevMandu};<button onClick={onClickButton}>데펴</button> */}
      <QuestionUI
        tagItem={tagItem}
        tagList={tagList}
        inputs={inputs}
        questionArr={questionArr}
        imageUrl={imageUrl}
        fileUrls={fileUrls}
        setInputs={setInputs}
        setImageUrl={setImageUrl}
        setFileUrls={setFileUrls}
        setTagItem={setTagItem}
        setTagList={setTagList}
        onSubmit={onSubmit}
        onChangeInput={onChangeInput}
        onClickNext={onClickNext}
      />
    </>
  );
}
