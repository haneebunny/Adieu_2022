import styled from "@emotion/styled";

export const Wrapper = styled.div`
  font-family: "Chosunilbo_myungjo";
`;

export const NewsPaperLayout = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto auto; /* 자동 행 높이 */
  grid-auto-flow: dense; /* 빈 공간을 자동으로 채우도록 설정 */

  margin: 0;
  padding: 10px;
  gap: 5px;

  border-collapse: collapse;

  font-size: small;
  /* @media (max-width: 768px) {
    grid-template-columns: 1fr; /* 모바일에서는 한 줄로 */
`;

export const ArticleStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  padding: 0;
  margin: 0;
  border: 1px solid #ddd; /* 칸 구분을 위한 최소한의 테두리 */
  background-color: #f8f8f8;
`;
