import styled from "@emotion/styled";

export const Wrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;
`;

export const Modal = styled.div`
  width: 500px;
  height: 100vh;
  background-color: #ba9ceb;
  font-weight: 500;
  color: #fff;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Login = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NameInput = styled.input`
  width: 100%;
  height: 100%;
  color: #fff;
  padding-top: 18px;
  border: none;
  background-color: #ba9ceb;
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
  width: 80%;
  position: relative;
  height: 60px;
  overflow: hidden;
  display: flex;
  flex-direction: column;

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

export const StartButton = styled.div`
  /* padding: 10px; */
  border: 1px solid white;
  padding: 4px 5px;
  border-radius: 4px;
`;
