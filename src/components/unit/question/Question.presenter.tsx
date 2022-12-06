import {
  Dispatch,
  FormEventHandler,
  MouseEventHandler,
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
  imageUrl: string;
  setImageUrl: (arg0: string) => void;
  setFileUrl: (arg0: any) => any;
  onClickNext: MouseEventHandler<HTMLButtonElement>;
  setInputs: any;
  inputs: any;
  onSubmit: any;
  onChangeInput: any;
  tagItem?: string;
  tagList?: string[];
  setTagItem?: Dispatch<SetStateAction<string>>;
  setTagList?: Dispatch<SetStateAction<never[]>>;
  editData?: any;
  questionArr?: string[];
}
export default function QuestionUI(props: IQuestionProps) {
  const [value, setValue] = useState();
  const [answers, setAnswers] = useState();

  return (
    <S.Wrapper>
      <form onSubmit={props.onSubmit}>
        <MyDropzone
          setImageUrl={props.setImageUrl}
          setFileUrl={props.setFileUrl}
        />
        <img src={props.imageUrl} />
        {props.questionArr?.map((question: any, i: number) => (
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
                  value={props.inputs[question.idx]}
                  name={question.idx}
                  setValue={props.setInputs}
                  onChange={props.onChangeInput}
                />
              )}
              {question.answer === "image" && (
                <MyDropzone
                  setImageUrl={props.setImageUrl}
                  setFileUrl={props.setFileUrl}
                />
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
          <S.ArrowButton onClick={props.onSubmit} type="button">
            다음
          </S.ArrowButton>
        </S.ButtonWrapper>

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
