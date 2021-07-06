import styled, { keyframes } from "styled-components";

const SlideFromLeft = keyframes`
  from {
    left: -78%;
  }
  to {
    right: 0%;
  }
`;
export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 78%;
  height: 100%;
  position: absolute;
  z-index: 99;
  background-color: #ffffff;
  top: 0em;
  left: 0%;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
  animation: ${SlideFromLeft} 0.3s ease-out;
`;

export const MenuHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 3em;
  border-bottom: 1px solid #e5e5e5;
`;

export const MenuBody = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2em;
  padding-left: 1.8em;
`;

export const MenuItem = styled.div`
  display: flex;
  margin-bottom: 1.5em;
`;
export const HeaderImg = styled.img`
  margin-left: 1.25em;
`;
export const Img = styled.img`
  margin-right: 10px;
`;
export const Text = styled.div`
  color: #323d45;
  font-family: "Noto Sans KR, sans-serif";
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 20px;
  display: flex;
  padding-top: 4px;
`;

export const Background = styled.div`
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;
