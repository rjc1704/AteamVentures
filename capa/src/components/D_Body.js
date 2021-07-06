import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import axios from "axios";
import dropdownImg from "../usedSVG/dropdownImg.svg";
import toggleBar from "../usedSVG/toggleBar.svg";
import toggleCircle from "../usedSVG/toggleCircle.svg";
import RequestCardList from "./RequestCardList";
import MethodsMenu from "./MethodsMenu";
import MaterialMenu from "./MaterialMenu";
import reset from "../usedSVG/reset.svg";

const BodyWrapper = styled.div`
  background-color: #ffffff;
  display: flex;
  justify-content: center;
`;

const BodyBox = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  width: 70%;
  @media (max-width: 942px) {
    width: 90%;
  }
`;

const TitleAndInstruction = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2em;
  @media (max-width: 942px) {
    margin-top: 1.3em;
  }
`;
const Title = styled.div`
  font-family: "Noto Sans KR, sans-serif";
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 2em;
`;

const Instruction = styled.div`
  font-family: "Noto Sans KR, sans-serif";
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5em;
`;

const FiltersWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2em;
  margin-bottom: 1.5em;
  @media (max-width: 942px) {
    position: relative;
  }
`;

const DropdownBtns = styled.div`
  display: flex;
  width: auto;
  position: relative;
`;

const DropdownBtn1 = styled.div`
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
const DropdownBtn2 = styled.div`
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
const DropdownText = styled.div`
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

const DropdownImg = styled.img``;

const ToggleBox = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1em;
  position: relative;
  cursor: pointer;
`;
const ToggleBar = styled.div`
  position: relative;
  background-color: ${(props) => {
    if (props.status === false) return "#c2c2c2";
    else return "#BBDEFB";
  }};

  border-radius: 10px;
  width: 34px;
  height: 14px;
`;

const ToggleCircle = styled.div`
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
const ToggleAndText = styled.div`
  display: flex;
  justify-content: flex-end;
  @media (max-width: 942px) {
    position: absolute;
    top: 2.8em;
  }
`;
const Text = styled.div`
  font-family: "Noto Sans KR, sans-serif";
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 20px;
  color: #323d45;
  display: flex;
  align-items: center;
`;

const MaterialText = styled.div`
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

const ResetImgAndText = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-left: 10px;
  cursor: pointer;
`;

const ResetImg = styled.img`
  margin-right: 10px;
  @media (max-width: 942px) {
    block-size: 12px;
  }
`;

const ResetText = styled.div`
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

export default function D_Body() {
  const [options, setOptions] = useState([]);
  const [methods, setMethods] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [isConsulting, setIsConsulting] = useState(false);
  const [isOpenMethods, setIsOpenMethods] = useState(false);
  const [isOpenMaterials, setIsOpenMaterials] = useState(false);
  useEffect(() => {}, []);
  const checkMethods = (e) => {
    if (e.target.checked) setMethods([...methods, e.target.value]);
    else {
      const idx = methods.findIndex((method) => method === e.target.value);
      const newMethods = [...methods.slice(0, idx), ...methods.slice(idx + 1)];
      setMethods(newMethods);
    }
  };
  const checkMaterials = (e) => {
    if (e.target.checked) setMaterials([...materials, e.target.value]);
    else {
      const idx = materials.findIndex((method) => method === e.target.value);
      const newMaterials = [
        ...materials.slice(0, idx),
        ...materials.slice(idx + 1),
      ];
      setMaterials(newMaterials);
    }
  };
  const refresh = () => {
    setMethods([]);
    setMaterials([]);
    setIsOpenMethods(false);
    setIsOpenMaterials(false);
  };
  return (
    <BodyWrapper>
      <BodyBox>
        <TitleAndInstruction>
          <Title>들어온 요청</Title>
          <Instruction>파트너님에게 딱 맞는 요청서를 찾아보세요.</Instruction>
        </TitleAndInstruction>
        <FiltersWrapper>
          <DropdownBtns>
            <DropdownBtn1
              onClick={() => setIsOpenMethods(!isOpenMethods)}
              methods={methods}
            >
              <DropdownText methods={methods}>
                가공방식{methods.length > 0 && `(${methods.length})`}
              </DropdownText>
              <DropdownImg src={dropdownImg} />
            </DropdownBtn1>
            {isOpenMethods && (
              <MethodsMenu checkMethods={checkMethods} methods={methods} />
            )}
            <DropdownBtn2
              onClick={() => setIsOpenMaterials(!isOpenMaterials)}
              materials={materials}
            >
              <MaterialText materials={materials}>
                재료{materials.length > 0 && `(${materials.length})`}
              </MaterialText>
              <DropdownImg src={dropdownImg} />
            </DropdownBtn2>
            {isOpenMaterials && (
              <MaterialMenu
                checkMaterials={checkMaterials}
                materials={materials}
              />
            )}
            {methods.length > 0 || materials.length > 0 ? (
              <ResetImgAndText onClick={refresh}>
                <ResetImg src={reset} />
                <ResetText>필터링 리셋</ResetText>
              </ResetImgAndText>
            ) : null}
          </DropdownBtns>
          <ToggleAndText>
            <ToggleBox onClick={() => setIsConsulting(!isConsulting)}>
              <ToggleBar status={isConsulting} />
              <ToggleCircle status={isConsulting} />
            </ToggleBox>
            <Text>상담 중인 요청만 보기</Text>
          </ToggleAndText>
        </FiltersWrapper>
        <RequestCardList
          status={isConsulting}
          selectedMaterial={materials}
          selectedMethod={methods}
        />
      </BodyBox>
    </BodyWrapper>
  );
}
