import React from "react";

import * as S from "./Home.styles";

export default function HomeUI() {
  return (
    <S.Wrapper>
      <S.Modal>
        <S.MyForm>
          <S.NameInput autoComplete="false" name="name" required></S.NameInput>
          <S.InputLabel htmlFor="name">
            <S.InputText>NAME!</S.InputText>
          </S.InputLabel>
        </S.MyForm>
        <S.MyForm>
          <S.NameInput
            autoComplete="false"
            name="password"
            type="password"
            required
          ></S.NameInput>
          <S.InputLabel htmlFor="password">
            <S.InputText>비밀번호</S.InputText>
          </S.InputLabel>
        </S.MyForm>
      </S.Modal>
      <a href="tel:010********">맹근 사람</a>
      <a href="mailto:re____@naver.com">이메일</a>
    </S.Wrapper>
  );
}
