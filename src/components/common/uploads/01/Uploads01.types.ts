import { ChangeEvent, RefObject } from "react";

export interface IUploads01Props {
  index: number;
  fileUrl: string;
  defaultFileUrl?: string;
  onChangeFileUrls: (fileUrl: string, index: number) => void;
  boardData?: any;
}

export interface IUploads01UIProps {
  fileRef: RefObject<HTMLInputElement>;
  fileUrl: string;
  defaultFileUrl?: string;
  boardData: any;
  onClickUpload: () => void;
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
}
