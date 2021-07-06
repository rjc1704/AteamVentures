import {
  CardWrapper,
  CardHeader,
  CardTitle,
  CardClient,
  DueDate,
  CardBody,
  CardDetail,
  CardContent,
  ContentAttribute,
  ContentValue,
  BtnsWrapper,
  ReadDetailBtn,
  ChatBtn,
  TitleAndStatus,
  Status,
} from "../styled-components/requestCard";

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
