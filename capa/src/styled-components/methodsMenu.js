import styled from "styled-components";

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #939fa5;
  border-radius: 4px;
  position: absolute;
  background-color: #ffffff;
  top: 1.7em;
  left: -35px;
  padding: 12px 5px;
  justify-content: space-between;
  width: 7em;
  @media (max-width: 942px) {
    z-index: 3;
    width: 5em;
    left: -4.3px;
  }
`;

export const CheckboxAndText = styled.label`
  display: flex;
  align-items: center;
  margin: 3px 0;
`;

export const Checkbox = styled.input`
  margin-right: 5px;
  zoom: 1.4;
`;

export const Text = styled.div`
  font-family: "Noto Sans KR, sans-serif";
  font-size: 0.875rem;
  line-height: 20px;
  font-weight: 500;
  display: flex;
  margin: 0;
`;
