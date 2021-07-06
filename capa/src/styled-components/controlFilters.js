import styled from "styled-components";

export const FiltersWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2em;
  margin-bottom: 1.5em;
  @media (max-width: 942px) {
    position: relative;
  }
`;

export const DropdownBtns = styled.div`
  display: flex;
  width: auto;
  position: relative;
`;

export const DropdownBtn1 = styled.div`
  display: flex;
  width: auto;
  border: 1px solid #939fa5;
  padding: 4px 12px;
  border-radius: 4px;
  margin-right: 10px;
  display: flex;
  cursor: pointer;
  position: relative;
  background-color: ${(props) => {
    if (props.methods && props.methods.length > 0) {
      return "#1565C0";
    } else return "#FFFFFF";
  }};
  &:hover {
    border: 1px solid #2196f3;
  }
`;
export const DropdownBtn2 = styled.div`
  display: flex;
  width: auto;

  border: 1px solid #939fa5;
  padding: 4px 12px;
  border-radius: 4px;
  margin-right: 10px;

  cursor: pointer;
  position: relative;
  background-color: ${(props) => {
    if (props.materials && props.materials.length > 0) {
      return "#1565C0";
    } else return "#FFFFFF";
  }};
  &:hover {
    border: 1px solid #2196f3;
  }
`;
export const DropdownText = styled.div`
  font-size: 0.75rem;
  font-weight: 500;
  font-family: "Roboto, sans-serif";

  color: ${(props) => {
    if (props.methods && props.methods.length > 0) {
      return "#FFFFFF";
    } else return "#323D45";
  }};
  margin-right: 10px;
  width: auto;
  display: flex;
  justify-content: stretch;
`;

export const DropdownImg = styled.img``;

export const ToggleBox = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1em;
  position: relative;
  cursor: pointer;
`;
export const ToggleBar = styled.div`
  position: relative;
  background-color: ${(props) => {
    if (props.status === false) return "#c2c2c2";
    else return "#BBDEFB";
  }};

  border-radius: 10px;
  width: 34px;
  height: 14px;
`;

export const ToggleCircle = styled.div`
  position: absolute;
  right: ${(props) => {
    if (props.status === false) return "15px";
    else return "-2px";
  }};

  border-radius: 15px;
  background-color: ${(props) => {
    if (props.status === false) return "#f5f5f5";
    else return "#2196F3";
  }};

  width: 20px;
  height: 20px;
  border-width: 0;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
`;
export const ToggleAndText = styled.div`
  display: flex;
  justify-content: flex-end;
  @media (max-width: 942px) {
    position: absolute;
    top: 2.8em;
  }
`;
export const Text = styled.div`
  font-family: "Noto Sans KR, sans-serif";
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 20px;
  color: #323d45;
  display: flex;
  align-items: center;
`;

export const MaterialText = styled.div`
  font-size: 0.75rem;
  font-weight: 500;
  font-family: "Roboto, sans-serif";
  color: #323d45;
  margin-right: 10px;
  width: auto;
  display: flex;
  justify-content: stretch;
  color: ${(props) => {
    if (props.materials && props.materials.length > 0) {
      return "#FFFFFF";
    } else return "#323D45";
  }};
`;

export const ResetImgAndText = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-left: 10px;
  cursor: pointer;
`;

export const ResetImg = styled.img`
  margin-right: 10px;
  @media (max-width: 942px) {
    block-size: 12px;
  }
`;

export const ResetText = styled.div`
  color: #2196f3;
  font-family: "Noto Sans KR, sans-serif";
  font-size: 0.75rem;
  line-height: 20px;
  width: auto;
  display: flex;
  justify-content: stretch;
  @media (max-width: 942px) {
    font-size: 0.5rem;
    font-weight: bold;
  }
`;
