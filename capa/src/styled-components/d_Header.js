import styled from "styled-components";

export const HeaderWrapper = styled.div`
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

export const Logo = styled.img`
  @media (max-width: 942px) {
    block-size: 12px;
  }
`;

export const ImgAndText = styled.div`
  display: flex;
  align-items: center;
`;

export const A_text = styled.div`
  color: #ffffff;
  font-size: 0.875rem;
  font-weight: 500;
  font-family: "Noto Sans KR, sans-serif";
  margin-left: 10px;
`;
export const A_IMG = styled.img``;

export const Menus = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 13em;
  height: 50%;
  @media (max-width: 942px) {
    display: none;
  }
`;

export const Divider = styled.div`
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: 500;
`;

export const Logout = styled.div`
  font-weight: 400;
  color: #ffffff;
  font-size: 0.875rem;
`;

export const HamburgerBtn = styled.img`
  display: none;
  @media (max-width: 942px) {
    display: inline-block;
    block-size: 12px;
    margin-right: 1em;
    cursor: pointer;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
`;
