import React from "react";
import styled from "styled-components";

const SubNavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #151718;
  padding: 10px 20px;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 1;
  box-sizing: border-box;
  border-radius: 20px 20px 0px 0px; 

  @media screen and (min-width: 768px) {
    position: static;
    width: auto;
    box-shadow: none;
    border-radius: 0px 0px 20px 20px; 
  }
`;

const SubNavigationItem = styled.a`
  color: #fff;
  font-weight: bold;
  margin-right: 20px;
  cursor: pointer;
`;

function SubNavigation() {
  return (
    <SubNavWrapper>
      <SubNavigationItem>Home</SubNavigationItem>
      <SubNavigationItem>Explore</SubNavigationItem>
      <SubNavigationItem>Favourites</SubNavigationItem>
      <SubNavigationItem>Log In</SubNavigationItem>
    </SubNavWrapper>
  );
};

export default SubNavigation;
