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
import Uploads01 from "../../common/uploads/01/Uploads01.container";
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
  onChangeFileUrls: (fileUrl: string, index: number) => void;
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
  fileUrls?: [];
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
        <S.Thumbnail src={props.imageUrl || "img/[maple]wind-spirit-1.webp"} />
        {props.questionArr?.map((question: any, i: number) => (
          <div key={i}>
            <S.Question>
              <p>{question.question}</p>
              {question.answer === "single" && (
                <S.OneInput
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
                <div>
                  <MyDropzone
                    setImageUrl={props.setImageUrl}
                    setFileUrl={props.setFileUrl}
                  />
                  <S.Thumbnail src={props.imageUrl} />
                </div>
              )}
            </S.Question>
          </div>
        ))}
        {props.fileUrls?.map((el: any, i: number) => (
          <Uploads01
            key={i}
            index={i}
            fileUrl={el}
            onChangeFileUrls={props.onChangeFileUrls}
          />
        ))}

        <S.ButtonWrapper>
          <S.ArrowButton
            onClick={() => alert("앞만 보고 나아가라고 이전 버튼을 없앰")}
            type="button"
          >
            이전은 없어
          </S.ArrowButton>
          <S.ArrowButton onClick={props.onClickNext} type="button">
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
