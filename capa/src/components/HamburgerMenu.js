import mobileLogo from "../usedSVG/mobileLogo.svg";
import partnerLogo from "../usedSVG/partnerLogo.svg";
import {
  MenuWrapper,
  MenuHeader,
  MenuBody,
  MenuItem,
  HeaderImg,
  Img,
  Text,
  Background,
} from "../styled-components/hamburgerMenu";

export default function HamburgerMenu({ closeMenu }) {
  return (
    <Background onClick={closeMenu}>
      <MenuWrapper onClick={(e) => e.stopPropagation()}>
        <MenuHeader>
          <HeaderImg src={mobileLogo} />
        </MenuHeader>
        <MenuBody>
          <MenuItem>
            <Img src={partnerLogo} />
            <Text>파트너정밀가공</Text>
          </MenuItem>
          <MenuItem>
            <Text>로그아웃</Text>
          </MenuItem>
        </MenuBody>
      </MenuWrapper>
    </Background>
  );
}
