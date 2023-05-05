import React from "react";
import styled from "styled-components";
import SubNavigation from "./subNav";
import SearchBar from "./SearchBar";

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #202124;
  color: #fff; 
`;

const TopHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0px;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImg = styled.img`
  max-height: 40px;
  min-width: 40px;
`;

function Header(){
  return (
    <HeaderWrapper>
      <TopHeader>
        <LogoWrapper>
          <LogoImg src="../../assets/logo.png" alt="logo" />
        </LogoWrapper>
        <SearchBar />
      </TopHeader>
      <SubNavigation />
    </HeaderWrapper>
  );
};

export default Header;
