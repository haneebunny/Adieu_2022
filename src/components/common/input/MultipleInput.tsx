import styled from "@emotion/styled";
import { useRef } from "react";

interface IInputTypes {
  placeholder?: string;
  value?: string;
  setValue?: any;
}

export default function MultipleInput({
  placeholder = "입력 후 엔터!💨",
  setValue = () => {},
  ...props
}: IInputTypes) {
  const inputRef = useRef<HTMLInputElement>(null);
  const onChangeInput = (event: any) => {
    setValue(event.target.value);
  };

  const onSubmit = () => {
    // input창의 값을 가져와서
    // li에 넣는다.
    const addValue: any = props.value;

    const li = document.createElement("li");

    li.setAttribute("id", addValue);

    const textNode = document.createTextNode(addValue);
    li.appendChild(textNode);

    document.getElementById("answer")?.appendChild(li);

    inputRef.current.value = "";
  };
  const onKeyPress = (event: any) => {
    if (event.key === "Enter") {
      onSubmit();
    }
  };
  return (
    <div>
      <ol id="answer"></ol>
      <Input
        placeholder={placeholder}
        onChange={onChangeInput}
        onKeyDown={onKeyPress}
        ref={inputRef}
      />
    </div>
  );
}

const Input = styled.input`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  border-radius: 5px;
  border: 1px solid #c0b4c5;
  box-shadow: 0px 4px rgba(221, 214, 224, 0.25);
  margin-bottom: 1em;
  padding: 10px 5px;
  &:focus {
    outline: none;
  }
`;
