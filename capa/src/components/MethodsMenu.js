import {
  FilterWrapper,
  CheckboxAndText,
  Checkbox,
  Text,
} from "../styled-components/methodsMenu";

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
