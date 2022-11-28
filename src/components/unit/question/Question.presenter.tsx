import { Dispatch, SetStateAction, useState } from "react";
import { MyDropzone } from "../../common/dropzone/DropZone";
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
  const [imageUrl, setImageUrl] = useState(""); //썸네일 미리보기 url
  const [fileUrl, setFileUrl] = useState(""); //사진등록 url

  return (
    <S.Wrapper>
      <form>
        <MyDropzone setImageUrl={setImageUrl} setFileUrl={setFileUrl} />
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
