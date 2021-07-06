import styled from "styled-components";

export const BodyWrapper = styled.div`
  background-color: #ffffff;
  display: flex;
  justify-content: center;
`;

export const BodyBox = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  width: 70%;
  @media (max-width: 942px) {
    width: 90%;
  }
`;

export const TitleAndInstruction = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2em;
  @media (max-width: 942px) {
    margin-top: 1.3em;
  }
`;
export const Title = styled.div`
  font-family: "Noto Sans KR, sans-serif";
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 2em;
`;

export const Instruction = styled.div`
  font-family: "Noto Sans KR, sans-serif";
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5em;
`;
