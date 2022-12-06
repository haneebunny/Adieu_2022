import {
  UploadButton,
  UploadFileHidden,
  UploadImage,
} from "./Uploads01.styles";
import { IUploads01UIProps } from "./Uploads01.types";

export default function Uploads01UI(props: IUploads01UIProps) {
  return (
    <>
      {props.fileUrl || props.boardData?.fetchBoard.images ? (
        <UploadImage
          onClick={props.onClickUpload}
          src={
            `https://storage.googleapis.com/${props.fileUrl}` ||
            `http://storage.googleapis.com/${props.boardData?.fetchBoard.images}`
          }
        />
      ) : (
        <UploadButton
          type="button"
          onClick={props.onClickUpload}
        ></UploadButton>
      )}
      <UploadFileHidden
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFile}
      />
    </>
  );
}
