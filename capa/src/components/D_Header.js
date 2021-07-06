import capaLogo from "../usedSVG/capaLogo.svg";
import A_img from "../usedSVG/A_img.svg";
import hamburger from "../usedSVG/hamburger.svg";
import {
  HeaderWrapper,
  Logo,
  ImgAndText,
  A_text,
  A_IMG,
  Menus,
  Divider,
  Logout,
  HamburgerBtn,
  LogoWrapper,
} from "../styled-components/d_Header";

export default function D_Header({ openMobileMenu }) {
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <HamburgerBtn src={hamburger} onClick={openMobileMenu} />
        <Logo src={capaLogo} />
      </LogoWrapper>
      <Menus>
        <ImgAndText>
          <A_IMG src={A_img} />
          <A_text>A 가공 업체</A_text>
        </ImgAndText>
        <Divider>|</Divider>
        <Logout>로그아웃</Logout>
      </Menus>
    </HeaderWrapper>
  );
}
