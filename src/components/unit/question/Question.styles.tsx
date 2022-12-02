import styled from "@emotion/styled";

export const Wrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 10px;
  border: 1px solid #c5b2cf;
  border-radius: 8px;
  background-color: #c5b2cf;
  font-family: "NanumSquareNeo-Variable", "Noto Sans KR";

  @font-face {
    font-family: "NanumSquareNeo-Variable";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/NanumSquareNeo-Variable.woff2")
      format("woff2");
    font-weight: normal;
    font-style: normal;
  }
`;

export const Question = styled.div`
  margin-bottom: 30px;
  p {
    margin: 5px 0px;
  }
`;
