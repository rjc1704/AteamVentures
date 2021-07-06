import dropdownImg from "../usedSVG/dropdownImg.svg";
import MethodsMenu from "./MethodsMenu";
import MaterialMenu from "./MaterialMenu";
import reset from "../usedSVG/reset.svg";
import {
  FiltersWrapper,
  DropdownBtns,
  DropdownBtn1,
  DropdownBtn2,
  DropdownText,
  DropdownImg,
  ToggleBox,
  ToggleBar,
  ToggleCircle,
  ToggleAndText,
  Text,
  MaterialText,
  ResetImgAndText,
  ResetImg,
  ResetText,
} from "../styled-components/controlFilters";

export default function ControlFilters({
  refresh,
  methods,
  setMethods,
  materials,
  setMaterials,
  isConsulting,
  setIsConsulting,
  isOpenMethods,
  setIsOpenMethods,
  isOpenMaterials,
  setIsOpenMaterials,
}) {
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
  return (
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
          <MaterialMenu checkMaterials={checkMaterials} materials={materials} />
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
  );
}
