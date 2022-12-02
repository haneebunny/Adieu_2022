import styled from "@emotion/styled";

export const Wrapper = styled.div`
  padding: 50px;
  max-width: 500px;
  margin: 0 auto;
  background-color: white;
  font-family: "HBIOS-SYS";
  color: #26282c;

  @font-face {
    font-family: "HBIOS-SYS";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2207-01@1.0/HBIOS-SYS.woff2")
      format("woff2");
    font-weight: normal;
    font-style: normal;
  }
`;

export const ThemeCard = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff81;
  border: 1px solid gray;
  border-radius: 8px;
  box-shadow: 7px 7px 39px rgba(202, 136, 217, 0.25);
`;
export const ThemeImg = styled.img`
  width: 300px;
`;

export const InfoBox = styled.div`
  padding: 10px;
  width: 100%;
  height: 200px;
  /* background-color: white; */
`;

export const ThemeName = styled.div`
  color: #26282c;
`;

export const ThemeComment = styled.div`
  padding: 10px;
  display: flex;
  background-color: #ffffff81;
  border: 1px solid gray;
  border-radius: 8px;
`;
