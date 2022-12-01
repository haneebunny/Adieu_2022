import * as S from "./Result.styles";
import Fade from "react-awesome-reveal";
import { useEffect, useState } from "react";
import { keyword } from "./data/Keyword_2023";

export default function ResultUI() {
  const [randomNum, setRandomNum] = useState<any>([]);

  useEffect(() => {
    getRandomNumber(keyword);
  }, []);

  const getRandomNumber = (key: any) => {
    const array = new Array(keyword.length)
      .fill(1)
      .map((el, i) => (el = i + 1));

    array.sort(() => Math.random() - 0.5);

    setRandomNum([array[0], array[1], array[2]]);
  };
  console.log(randomNum);
  console.log(keyword[randomNum]);
  return (
    <S.Wrapper>
      <Fade>
        <h1>당신은 2022년에</h1>
        <h2>빵먹기란 목표를 세웠고</h2>
        <S.ThemeCard>
          <S.ThemeImg src="https://www.xphobia.net/data/item/illustration_%EB%8C%80%ED%98%B8%EC%8B%9C%EC%9E%A5%20%EC%82%B4%EC%9D%B8%EC%82%AC%EA%B1%B4.jpg" />
          <S.InfoBox>
            <S.ThemeName>대호시장 살인사건</S.ThemeName>
          </S.InfoBox>
        </S.ThemeCard>
        <S.ThemeComment>Y H S </S.ThemeComment>
        <S.ThemeComment>
          {keyword[Math.floor(Math.random() * keyword.length)]}
        </S.ThemeComment>
        <S.ThemeComment>{keyword[randomNum[0]]} </S.ThemeComment>
        <S.ThemeComment>{keyword[randomNum[1]]} </S.ThemeComment>
        <S.ThemeComment>{keyword[randomNum[2]]} </S.ThemeComment>
      </Fade>
    </S.Wrapper>
  );
}
