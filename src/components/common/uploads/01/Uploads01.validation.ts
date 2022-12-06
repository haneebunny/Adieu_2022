// import { Modal } from "antd";

export function checkValidationImage(file: File | undefined) {
  const FILETYPE = [
    "image/jpg",
    "image/jpeg",
    "image/png",
    "image/gif",
    "image/bmp",
  ];

  console.log(file);

  // if (!file?.size) {
  //   Modal.error({ content: "파일이 없습니다." });
  //   return false;
  // }
  // if (file.size > 5 * 1024 * 1024) {
  //   Modal.error({ content: "파일이 너무 큽니다.(제한: 5MB)" });
  //   return false;
  // }
  // if (!FILETYPE.includes(file.type)) {
  //   Modal.error({
  //     content:
  //       "파일 확장자가 올바르지 않습니다. jpg, jpeg, png, gif, bmp 형식만 가능합니다.",
  //   });
  //   return false;
  // }
  // if (!file.type.includes("png") && !file.type.includes("jpeg")) {
  //   Modal.error({
  //     content: "파일 확장자가 올바르지 않습니다.(png, jpeg만 가능)",
  //   });
  //   return false;
  // }
  return file;
}
