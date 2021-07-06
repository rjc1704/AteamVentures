import { useState } from "react";
import RequestCardList from "./RequestCardList";
import ControlFilters from "./ControlFilters";
import {
  BodyWrapper,
  BodyBox,
  TitleAndInstruction,
  Title,
  Instruction,
} from "../styled-components/d_Body";

export default function D_Body() {
  const [methods, setMethods] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [isConsulting, setIsConsulting] = useState(false);
  const [isOpenMethods, setIsOpenMethods] = useState(false);
  const [isOpenMaterials, setIsOpenMaterials] = useState(false);
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
        <ControlFilters
          refresh={refresh}
          methods={methods}
          setMethods={setMethods}
          materials={materials}
          setMaterials={setMaterials}
          isConsulting={isConsulting}
          setIsConsulting={setIsConsulting}
          isOpenMethods={isOpenMethods}
          setIsOpenMethods={setIsOpenMethods}
          isOpenMaterials={isOpenMaterials}
          setIsOpenMaterials={setIsOpenMaterials}
        />
        <RequestCardList
          status={isConsulting}
          selectedMaterial={materials}
          selectedMethod={methods}
        />
      </BodyBox>
    </BodyWrapper>
  );
}
