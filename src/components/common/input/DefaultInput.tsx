import styled from "styled-components";

interface IInputTypes {
  placeholder?: string;
  value?: string;
  setValue?: any;
}

export default function DefaultInput({
  placeholder = "써주세요.",
  value,
  setValue,
}: IInputTypes) {
  const onChangeInput = (event: any) => {
    setValue(event.target.value);
  };
  return <Input placeholder={placeholder} onChange={onChangeInput} />;
}

const Input = styled.input`
  border: none;
  border-bottom: 1px solid gray;
  padding: 5px;
  &:focus {
    outline: none;
  }
`;
