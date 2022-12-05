import {
  Dispatch,
  FormEventHandler,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { MyDropzone } from "../../common/dropzone/DropZone";
import DefaultInput from "../../common/input/DefaultInput";
import MultipleInput from "../../common/input/MultipleInput";
import Tag from "../../common/tag/Tag";
import { questions_2022 } from "./data/Questions_2022";
import { questions_happiness } from "./data/Question_book&happiness";
import { questions_contents } from "./data/Question_contents";
import { questions_people } from "./data/Question_people";
import { questions_photo } from "./data/Question_photo";
import * as S from "./Question.styles";

interface IQuestionProps {
  setInputs: any;
  inputs: any;
  onSubmit: FormEventHandler<HTMLFormElement> | undefined;
  onChangeInput: any;
  tagItem?: string;
  tagList?: string[];
  setTagItem?: Dispatch<SetStateAction<string>>;
  setTagList?: Dispatch<SetStateAction<never[]>>;
  editData?: any;
}
export default function QuestionUI(props: IQuestionProps) {
  const [imageUrl, setImageUrl] = useState(""); //썸네일 미리보기 url
  const [fileUrl, setFileUrl] = useState(""); //사진등록 url

  const [value, setValue] = useState();
  const [answers, setAnswers] = useState();
  const questions = [
    questions_2022,
    questions_people,
    questions_photo,
    questions_contents,
    questions_happiness,
  ];
  const [questionArr, setQuestionArr] = useState<any>(questions[0]);
  const [currentPage, setCurrentPage] = useState(1);

  const onClickNext = () => {
    setCurrentPage((prev) => prev + 1);
    setQuestionArr(questions[currentPage]);
  };
  return (
    <S.Wrapper>
      <form onSubmit={props.onSubmit}>
        <MyDropzone setImageUrl={setImageUrl} setFileUrl={setFileUrl} />
        <img src={imageUrl} />
        {questionArr.map((question: any, i: number) => (
          <div key={i}>
            <S.Question>
              <p>{question.question}</p>
              {question.answer === "single" && (
                <DefaultInput
                  value={props.inputs[question.idx]}
                  setValue={props.setInputs}
                  name={question.idx}
                  onChange={props.onChangeInput}
                />
              )}
              {question.answer === "multiple" && (
                <MultipleInput
                  placeholder={question?.placeholder}
                  value={value}
                  setValue={setValue}
                />
              )}
              {question.answer === "image" && (
                <MyDropzone setImageUrl={setImageUrl} setFileUrl={setFileUrl} />
              )}
            </S.Question>
          </div>
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

        <S.Question>2022년을 대표하는 키워드</S.Question>
        <Tag
          tagItem={props.tagItem}
          setTagItem={props.setTagItem}
          tagList={props.tagList}
          setTagList={props.setTagList}
          editData={props.editData}
        />
      </form>
    </S.Wrapper>
  );
}
