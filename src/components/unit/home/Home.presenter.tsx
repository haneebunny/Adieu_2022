import Link from "next/link";
import React from "react";

import * as S from "./Home.styles";

export default function HomeUI() {
  return (
    <S.Wrapper>
      <S.Modal>
        <S.Login>
          <S.FormWrapper>
            <S.MyForm>
              <S.NameInput
                autoComplete="false"
                name="name"
                required
              ></S.NameInput>
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
          </S.FormWrapper>
          <S.StartButton>
            <Link href="/river">시작</Link>
          </S.StartButton>
        </S.Login>
        <a href="tel:010********">맹근 사람한테 전화걸어 따지기</a>
        <a href="mailto:re____@naver.com">이메일 보내기</a>
      </S.Modal>
    </S.Wrapper>
  );
}
