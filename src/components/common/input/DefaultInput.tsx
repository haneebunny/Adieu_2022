import styled from "@emotion/styled";

interface IInputTypes {
  placeholder?: string;
  value?: string;
  setValue?: any;
}

export default function DefaultInput({
  placeholder = "입력!💨",
  value,
  setValue,
}: IInputTypes) {
  const onChangeInput = (event: any) => {
    setValue(event.target.value);
  };
  return <Input placeholder={placeholder} onChange={onChangeInput} />;
}

const Input = styled.input`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  border-radius: 5px;
  background: transparent;
  border: 1px solid #c0b4c5;
  box-shadow: 0px 4px rgba(221, 214, 224, 0.25);
  margin-bottom: 1em;
  padding: 10px 5px;
  &:focus {
    outline: none;
  }
`;
