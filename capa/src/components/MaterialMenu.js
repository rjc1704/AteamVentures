import {
  FilterWrapper,
  CheckboxAndText,
  Checkbox,
  Text,
} from "../styled-components/materialMenu";

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
