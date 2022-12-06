import styled from "@emotion/styled";

export const Wrapper = styled.div`
  max-width: 500px;
  height: 100vh;
  margin: 0 auto;
  padding: 10px;
  border: 1px solid #c5b2cf;

  background-color: #ffffff;
  font-family: "NanumSquareNeo-Variable", "Noto Sans KR";
  color: #26282c;
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

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const ArrowButton = styled.button`
  /* border: 1px solid #c5b2cf; */
  background-color: #c5b2cf;
  padding: 5px 8px;
  cursor: pointer;
`;
