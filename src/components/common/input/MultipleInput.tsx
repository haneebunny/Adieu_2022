import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";

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

  const [list, setList] = useState([]);

  const onChangeInput = (event: any) => {
    setValue(event.target.value);
  };

  const onSubmit = () => {
    if (list.length > 2) return;
    const addValue: any = props.value;

    setList([
      ...list,
      {
        id: Date.now(),
        text: addValue,
      },
    ]);

    // const tempArr = list;

    // tempArr.push(addValue);

    // setList([...tempArr]);

    inputRef.current.value = "";
  };

  const onClickDelete = (event: any) => {
    const tempArr = list.filter(
      (el) =>
        // if (el?.id !== Number(event?.target.id)) return el;
        el?.id !== Number(event?.target.id)
    );
    console.log(tempArr);
    setList([...tempArr]);
  };
  const onKeyPress = (event: any) => {
    if (event.key === "Enter") {
      onSubmit();
    }
  };

  return (
    <div>
      <ol id="answer">
        {list?.map((el: any, i: number) => (
          <li key={i}>
            <span>{el?.text}</span>
            <XButton type="button" id={el?.id} onClick={onClickDelete}>
              X
            </XButton>
          </li>
        ))}
      </ol>
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

const XButton = styled.button`
  border: none;
  background: transparent;
  font-size: 0.4em;
  padding: 3px;
  margin-left: 5px;
`;
