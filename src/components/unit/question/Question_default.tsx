import { useRef, useEffect, useState } from "react";
import { MyDropzone } from "../../common/dropzone/DropZone";
import Uploads01 from "../../common/uploads/01/Uploads01.container";
import Tag from "../../common/tag/Tag";
import * as S from "./Question.styles";

import { questions_2022 } from "./data/Questions_2022";
import { questions_happiness } from "./data/Question_book&happiness";
import { questions_contents } from "./data/Question_contents";
import { questions_people } from "./data/Question_people";
import { questions_photo } from "./data/Question_photo";

function usePrevState(state: any) {
  const ref = useRef<any>();
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

  const [tagItem, setTagItem] = useState("");
  const [tagList, setTagList] = useState<string[]>([]);
  const [imageUrl, setImageUrl] = useState(""); // 썸네일 미리보기 URL
  const [fileUrls, setFileUrls] = useState<string[]>([]); // 사진 등록 URL
  const [inputs, setInputs] = useState<Record<number, string>>({});
  const [adieu2022, set2022] = useState<any>();
  const [questionArr, setQuestionArr] = useState<any>(questions[0]);
  const [currentPage, setCurrentPage] = useState(0);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const onClickNext = () => {
    if (currentPage < questions.length - 1) {
      setCurrentPage((prev) => prev + 1);
      setQuestionArr(questions[currentPage + 1]);
    }
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    set2022(inputs);
    console.log("Submitted Data:", adieu2022);
  };

  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  return (
    <S.Wrapper>
      <form onSubmit={onSubmit}>
        <MyDropzone setImageUrl={setImageUrl} setFileUrl={onChangeFileUrls} />
        <S.Thumbnail src={imageUrl || "img/[maple]wind-spirit-1.webp"} />
        {questionArr?.map((question: any, i: number) => (
          <div key={i}>
            <S.Question>
              <p>{question.question}</p>
              {question.answer === "single" && (
                <S.OneInput
                  value={inputs[question.idx] || ""}
                  name={question.idx.toString()}
                  onChange={onChangeInput}
                />
              )}
              {question.answer === "multiple" && (
                <S.MulInput
                  placeholder={question.placeholder}
                  value={inputs[question.idx] || ""}
                  name={question.idx.toString()}
                  onChange={onChangeInput}
                />
              )}
              {question.answer === "image" && (
                <div>
                  <MyDropzone
                    setImageUrl={setImageUrl}
                    setFileUrl={onChangeFileUrls}
                  />
                  <S.Thumbnail src={imageUrl} />
                </div>
              )}
            </S.Question>
          </div>
        ))}
        {fileUrls?.map((el, i) => (
          <Uploads01
            key={i}
            index={i}
            fileUrl={el}
            onChangeFileUrls={onChangeFileUrls}
          />
        ))}

        <S.ButtonWrapper>
          <S.ArrowButton
            onClick={() => alert("앞만 보고 나아가라고 이전 버튼을 없앰")}
            type="button"
          >
            이전은 없어
          </S.ArrowButton>
          <S.ArrowButton onClick={onClickNext} type="button">
            다음
          </S.ArrowButton>
        </S.ButtonWrapper>

        <Tag
          tagItem={tagItem}
          setTagItem={setTagItem}
          tagList={tagList}
          setTagList={setTagList}
        />
      </form>
    </S.Wrapper>
  );
}
