import { Dispatch, SetStateAction, useState } from "react";
import { MyDropzone } from "../../common/dropzone/DropZone";
import DefaultInput from "../../common/input/DefaultInput";
import MultipleInput from "../../common/input/MultipleInput";
import Tag from "../../common/tag/Tag";
import { questions_2022 } from "./data/Questions_2022";
import * as S from "./Question.styles";

interface IQuestionProps {
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
  return (
    <S.Wrapper>
      <form>
        <MyDropzone setImageUrl={setImageUrl} setFileUrl={setFileUrl} />
        {questions_2022.map((question: any, i: number) => (
          <div key={i}>
            <S.Question>
              <p>{question.question}</p>
              {question.answer === "single" && <DefaultInput />}
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
        <S.Question>2022년을 대표하는 키워드</S.Question>
        당신의 2023년 키워드는 ~~~ 랜덤으로 뽑기
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
