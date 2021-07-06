import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
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
const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #e5e5e5;
`;

const CardTitle = styled.div`
  font-size: 1rem;
  font-weight: 700;
  line-height: 24px;
  font-family: "Noto Sans KR, sans-serif";
`;

const CardClient = styled.div`
  font-family: "Noto Sans KR, sans-serif";
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 20px;
`;

const DueDate = styled.div`
  font-size: 0.875rem;
  font-family: "Noto Sans KR, sans-serif";
  font-weight: 400;
  color: #939fa5;
  margin-top: 1.3em;
  margin-bottom: 1em;
`;
const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1em;
`;

const CardDetail = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardContent = styled.div`
  display: flex;
  margin-bottom: 0.5em;
`;

const ContentAttribute = styled.div`
  font-size: 0.875rem;
  font-weight: 400;
  font-family: "Noto Sans KR, sans-serif";
  line-height: 20px;
  width: 7.1em;
`;

const ContentValue = styled.div`
  font-size: 0.875rem;
  font-weight: 700;
  font-family: "Noto Sans KR, sans-serif";
  line-height: 20px;
`;

const BtnsWrapper = styled.div`
  display: flex;
  margin-top: 1.5em;
`;

const ReadDetailBtn = styled.button`
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
const ChatBtn = styled.button`
  padding: 6px 12px;
  border: 1px solid #2196f3;
  border-radius: 4px;
  color: #2196f3;
  background-color: #ffffff;
  cursor: pointer;
`;

const TitleAndStatus = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.3em;
`;
const Status = styled.div`
  border: 1px solid #ffa000;
  border-radius: 12px;
  color: #ffa000;
  font-size: 0.75rem;
  padding: 2px 8px;
  display: flex;
  align-items: center;
`;

export default function RequestCard({ item }) {
  return (
    <CardWrapper>
      <CardHeader>
        <TitleAndStatus>
          <CardTitle>{item.title}</CardTitle>
          {item.status === "상담중" && <Status>{item.status}</Status>}
        </TitleAndStatus>
        <CardClient>{item.client}</CardClient>
        <DueDate>{item.due}까지 납기</DueDate>
      </CardHeader>
      <CardBody>
        <CardContent>
          <ContentAttribute>도면개수</ContentAttribute>
          <ContentValue>{item.count}개</ContentValue>
        </CardContent>
        <CardContent>
          <ContentAttribute>총 수량</ContentAttribute>
          <ContentValue>{item.amount}개</ContentValue>
        </CardContent>
        <CardContent>
          <ContentAttribute>가공방식</ContentAttribute>
          {item.method.length > 1 ? (
            <ContentValue>
              {item.method[0]}, {item.method[1]}
            </ContentValue>
          ) : (
            <ContentValue>{item.method[0]}</ContentValue>
          )}
        </CardContent>
        <CardContent>
          <ContentAttribute>재료</ContentAttribute>
          {item.material.length > 1 ? (
            <ContentValue>
              {item.material[0]}, {item.material[1]}
            </ContentValue>
          ) : (
            <ContentValue>{item.material[0]}</ContentValue>
          )}
        </CardContent>
        <BtnsWrapper>
          <ReadDetailBtn>요청 내역 보기</ReadDetailBtn>
          <ChatBtn>채팅하기</ChatBtn>
        </BtnsWrapper>
      </CardBody>
    </CardWrapper>
  );
}
