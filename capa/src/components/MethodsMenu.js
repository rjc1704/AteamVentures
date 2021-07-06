import React from "react";
import styled from "styled-components";

const FilterWrapper = styled.div`
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

export default function MethodsMenu({ checkMethods, methods }) {
  let isMethod1 = false;
  let isMethod2 = false;
  if (methods && methods.length > 0) {
    methods.forEach((method) => {
      if (method === "밀링") isMethod1 = true;
      if (method === "선반") isMethod2 = true;
    });
  }
  return (
    <FilterWrapper>
      <CheckboxAndText htmlFor="two">
        <Checkbox
          id="two"
          type="checkbox"
          method={1}
          value={"밀링"}
          onClick={checkMethods}
          defaultChecked={isMethod1}
        />
        <Text>밀링</Text>
      </CheckboxAndText>
      <CheckboxAndText>
        <Checkbox
          type="checkbox"
          method={2}
          value={"선반"}
          onClick={checkMethods}
          defaultChecked={isMethod2}
        />
        <Text>선반</Text>
      </CheckboxAndText>
    </FilterWrapper>
  );
}
