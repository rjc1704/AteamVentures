import { useState } from "react";
import styled from "styled-components";
import D_Header from "./D_Header";
import D_Body from "./D_Body";
import HamburgerMenu from "./HamburgerMenu";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;
`;

export default function Dashboard() {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  const openMobileMenu = () => {
    setIsOpenMobileMenu(true);
    document.body.style.overflow = "hidden";
  };
  const closeMenu = () => {
    setIsOpenMobileMenu(false);
    document.body.style.overflow = "auto";
  };

  return (
    <PageWrapper>
      {isOpenMobileMenu && <HamburgerMenu closeMenu={closeMenu} />}
      <D_Header openMobileMenu={openMobileMenu} />
      <D_Body />
    </PageWrapper>
  );
}
