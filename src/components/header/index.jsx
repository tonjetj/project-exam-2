import React from "react";
import styled from "styled-components";
import SubNavigation from "./subNav";
import SearchBar from "./SearchBar";
import logo from "../../assets/logo.png";


const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #202124;
  color: #fff; 
  width: 100%; 
`;

const TopHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 50px;
  padding: 0px;
  margin: 0 20px; 
  @media screen and (min-width: 768px) {
    width: 50%; 
    justify-content: space-between; 
    margin: 0 auto; 
  }
`;

const LogoWrapper = styled.div`
  align-items: center;
  margin-left: 20px; 
`;

const LogoImg = styled.img`
  max-height: 20px;
  min-width: 40px;
`;

function Header(){
  return (
    <HeaderWrapper>
      <TopHeader>
        <LogoWrapper>
          <LogoImg src={logo} alt="Holidaze logo" />
        </LogoWrapper>
        <SearchBar />
      </TopHeader>
      <SubNavigation />
    </HeaderWrapper>
  );
};

export default Header;
