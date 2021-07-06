import styled from "styled-components";

export const CardWrapper = styled.div`
  width: 29.5%;
  display: flex;
  flex-direction: column;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  padding: 24px 16px;
  margin-bottom: 0.8em;
  &:hover {
    border: 2px solid #2196f3;
  }
  @media (max-width: 942px) {
    width: 90%;
  }
`;
export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #e5e5e5;
`;

export const CardTitle = styled.div`
  font-size: 1rem;
  font-weight: 700;
  line-height: 24px;
  font-family: "Noto Sans KR, sans-serif";
`;

export const CardClient = styled.div`
  font-family: "Noto Sans KR, sans-serif";
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 20px;
`;

export const DueDate = styled.div`
  font-size: 0.875rem;
  font-family: "Noto Sans KR, sans-serif";
  font-weight: 400;
  color: #939fa5;
  margin-top: 1.3em;
  margin-bottom: 1em;
`;
export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1em;
`;

export const CardDetail = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardContent = styled.div`
  display: flex;
  margin-bottom: 0.5em;
`;

export const ContentAttribute = styled.div`
  font-size: 0.875rem;
  font-weight: 400;
  font-family: "Noto Sans KR, sans-serif";
  line-height: 20px;
  width: 7.1em;
`;

export const ContentValue = styled.div`
  font-size: 0.875rem;
  font-weight: 700;
  font-family: "Noto Sans KR, sans-serif";
  line-height: 20px;
`;

export const BtnsWrapper = styled.div`
  display: flex;
  margin-top: 1.5em;
`;

export const ReadDetailBtn = styled.button`
  background-color: #2196f3;
  color: #ffffff;
  padding: 6px 12px;
  font-size: 0.875rem;
  font-weight: 500;
  font-family: "Noto Sans KR, sans-serif";
  border-radius: 4px;
  margin-right: 10px;
  border-width: 0;
  cursor: pointer;
`;
export const ChatBtn = styled.button`
  padding: 6px 12px;
  border: 1px solid #2196f3;
  border-radius: 4px;
  color: #2196f3;
  background-color: #ffffff;
  cursor: pointer;
`;

export const TitleAndStatus = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.3em;
`;
export const Status = styled.div`
  border: 1px solid #ffa000;
  border-radius: 12px;
  color: #ffa000;
  font-size: 0.75rem;
  padding: 2px 8px;
  display: flex;
  align-items: center;
`;
