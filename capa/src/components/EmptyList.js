import styled from "styled-components";

const EmptyWrapper = styled.div`
  width: 100%;
  height: 6.25em;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 20px;
  font-family: "Noto Sans KR, sans-serif";
  color: #939fa5;
  border: 1px solid #c2c2c2;

  border-radius: 4px;
  @media (max-width: 942px) {
    margin-top: 3em;
  }
`;

export default function EmptyList() {
  return <EmptyWrapper>조건에 맞는 견적 요청이 없습니다.</EmptyWrapper>;
}
