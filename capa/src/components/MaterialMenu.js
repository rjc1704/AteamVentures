import { useState } from "react";
import styled from "styled-components";

const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #939fa5;
  border-radius: 4px;
  position: absolute;
  background-color: #ffffff;
  top: 1.7em;
  left: 6.09em;
  padding: 12px 5px;
  justify-content: space-between;
  width: 7em;
  @media (max-width: 942px) {
    z-index: 3;
  }
`;

const CheckboxAndText = styled.label`
  display: flex;
  align-items: center;
  margin: 3px 0;
`;

const Checkbox = styled.input`
  margin-right: 5px;
  zoom: 1.4;
`;

const Text = styled.div`
  font-family: "Noto Sans KR, sans-serif";
  font-size: 0.875rem;
  line-height: 20px;
  font-weight: 500;
  display: flex;
  margin: 0;
`;

export default function MaterialMenu({ checkMaterials, materials }) {
  let isMaterial1 = false;
  let isMaterial2 = false;
  let isMaterial3 = false;
  let isMaterial4 = false;
  let isMaterial5 = false;
  if (materials && materials.length > 0) {
    materials.forEach((material) => {
      if (material === "알루미늄") isMaterial1 = true;
      if (material === "탄소강") isMaterial2 = true;
      if (material === "구리") isMaterial3 = true;
      if (material === "스테인리스강") isMaterial4 = true;
      if (material === "강철") isMaterial5 = true;
    });
  }
  return (
    <FilterWrapper>
      <CheckboxAndText htmlFor="one">
        <Checkbox
          id="one"
          type="checkbox"
          material={1}
          value={"알루미늄"}
          onClick={checkMaterials}
          defaultChecked={isMaterial1}
        />
        <Text>알루미늄</Text>
      </CheckboxAndText>
      <CheckboxAndText>
        <Checkbox
          type="checkbox"
          material={2}
          value={"탄소강"}
          onClick={checkMaterials}
          defaultChecked={isMaterial2}
        />
        <Text>탄소강</Text>
      </CheckboxAndText>
      <CheckboxAndText>
        <Checkbox
          type="checkbox"
          material={3}
          value={"구리"}
          onClick={checkMaterials}
          defaultChecked={isMaterial3}
        />
        <Text>구리</Text>
      </CheckboxAndText>
      <CheckboxAndText>
        <Checkbox
          type="checkbox"
          material={4}
          value={"스테인리스강"}
          onClick={checkMaterials}
          defaultChecked={isMaterial4}
        />
        <Text>스테인리스강</Text>
      </CheckboxAndText>
      <CheckboxAndText>
        <Checkbox
          type="checkbox"
          material={5}
          value={"강철"}
          onClick={checkMaterials}
          defaultChecked={isMaterial5}
        />
        <Text>강철</Text>
      </CheckboxAndText>
    </FilterWrapper>
  );
}
