import React from "react";
import styled from "styled-components";
import capaLogo from "../usedSVG/capaLogo.svg";
import A_img from "../usedSVG/A_img.svg";
import hamburger from "../usedSVG/hamburger.svg";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2.5em;
  height: 4em;
  background-color: #1565c0;
  @media (max-width: 942px) {
    padding: 0 1.25em;
    height: 3em;
  }
`;

const Logo = styled.img`
  @media (max-width: 942px) {
    block-size: 12px;
  }
`;

const ImgAndText = styled.div`
  display: flex;
  align-items: center;
`;

const A_text = styled.div`
  color: #ffffff;
  font-size: 0.875rem;
  font-weight: 500;
  font-family: "Noto Sans KR, sans-serif";
  margin-left: 10px;
`;
const A_IMG = styled.img``;

const Menus = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 13em;
  height: 50%;
  @media (max-width: 942px) {
    display: none;
  }
`;

const Divider = styled.div`
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: 500;
`;

const Logout = styled.div`
  font-weight: 400;
  color: #ffffff;
  font-size: 0.875rem;
`;

const HamburgerBtn = styled.img`
  display: none;
  @media (max-width: 942px) {
    display: inline-block;
    block-size: 12px;
    margin-right: 1em;
    cursor: pointer;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
`;
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
