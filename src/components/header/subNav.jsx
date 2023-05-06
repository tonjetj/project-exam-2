import React from "react";
import styled from "styled-components";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ExploreRoundedIcon from '@mui/icons-material/ExploreRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

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
    box-shadow: none;
    border-radius: 0px 0px 20px 20px; 
    width: 50%; 
    justify-content: space-between; 
    margin: 0 auto; 
  }
`;

const SubNavigationItem = styled.a`
  color: #fff;
  font-weight: light;
  cursor: pointer;
  text-align: center;
  font-size: 14px; 
  margin: auto; 
`;

function SubNavigation() {
  return (
    <SubNavWrapper>
      <SubNavigationItem><HomeRoundedIcon/><p>Home</p></SubNavigationItem>
      <SubNavigationItem><ExploreRoundedIcon/><p>Explore</p></SubNavigationItem>
      <SubNavigationItem><FavoriteRoundedIcon/><p>Favourites</p></SubNavigationItem>
      <SubNavigationItem><AccountCircleRoundedIcon/><p>Log In</p></SubNavigationItem>
    </SubNavWrapper>
  );
};

export default SubNavigation;
