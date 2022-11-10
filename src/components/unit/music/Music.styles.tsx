import styled from "@emotion/styled";

export const Wrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;
`;

export const Modal = styled.div`
  width: 300px;
  height: 300px;
  background-color: #f38181;
  font-family: "montserrat", sans-serif;
  font-weight: 500;
  color: #fff;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NameInput = styled.input`
  width: 100%;
  height: 100%;
  color: #fff;
  padding-top: 18px;
  border: none;
  background-color: #f38181;
  &:focus {
    outline: none;
  }
`;
export const InputLabel = styled.label`
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  pointer-events: none;
  border-bottom: 1px solid white;
  &::after {
    content: "";
    position: absolute;
    bottom: -1px;
    left: 0px;
    width: 100%;
    height: 100%;
    border-bottom: 3px solid #fce38a;
    transform: translateX(-100%);
    transition: all 0.3s ease;
  }
`;
export const InputText = styled.span`
  position: absolute;
  bottom: 0px;
  left: 0px;
  padding-bottom: 5px;
  transition: all 0.3s ease;
`;

export const MyForm = styled.form`
  width: 30%;
  position: relative;
  height: 60px;
  overflow: hidden;

  ${NameInput}:focus + ${InputLabel} ${InputText} {
    transform: translateY(-150%);
    font-size: 14px;
    left: 0px;
    color: #fce38a;
  }

  ${NameInput}:valid + ${InputLabel} ${InputText} {
    transform: translateY(-150%);
    font-size: 14px;
    left: 0px;
    color: #fce38a;
  }

  ${NameInput}:focus + ${InputLabel}::after {
    transform: translateX(0%);
  }

  ${NameInput}:valid + ${InputLabel}::after {
    transform: translateX(0%);
  }
`;
