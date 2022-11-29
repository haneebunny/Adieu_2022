import * as S from "./Result.styles";
import Fade from "react-awesome-reveal";
import { useEffect, useState } from "react";
import { keyword } from "./data/Keyword_2023";

export default function ResultUI() {
  const [randomNum, setRandomNum] = useState<any>();

  useEffect(() => {
    const temp = getRandomNumber(keyword);
    console.log(temp);
    setRandomNum(temp);
  }, []);

  const getRandomNumber = (key: any) => {
    const randomNumber = Math.floor(Math.random() * key.length);
    return randomNumber;
  };
  console.log(randomNum);
  console.log(keyword[randomNum]);
  return (
    <S.Wrapper>
      <Fade>
        <S.ThemeCard>
          <S.ThemeImg src="https://www.xphobia.net/data/item/illustration_%EB%8C%80%ED%98%B8%EC%8B%9C%EC%9E%A5%20%EC%82%B4%EC%9D%B8%EC%82%AC%EA%B1%B4.jpg" />
          <S.InfoBox>
            <S.ThemeName>대호시장 살인사건</S.ThemeName>
          </S.InfoBox>
        </S.ThemeCard>
        <S.ThemeComment>Y H S </S.ThemeComment>
        <S.ThemeComment>{keyword[randomNum]} </S.ThemeComment>
      </Fade>
    </S.Wrapper>
  );
}
