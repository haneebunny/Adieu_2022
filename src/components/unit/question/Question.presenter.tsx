import { Dispatch, SetStateAction } from "react";
import DefaultInput from "../../common/input/DefaultInput";
import Tag from "../../common/tag/Tag";
import * as S from "./Question.styles";

interface IQuestionProps {
  tagItem?: string;
  tagList?: string[];
  setTagItem?: Dispatch<SetStateAction<string>>;
  setTagList?: Dispatch<SetStateAction<never[]>>;
  editData?: any;
}
export default function QuestionUI(props: IQuestionProps) {
  return (
    <S.Wrapper>
      <form>
        <S.Question>2022년 세웠던 목표</S.Question>
        <input />
        <DefaultInput />
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
