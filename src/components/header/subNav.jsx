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
  border-radius: 60px 60px 0px 0px; 

  @media screen and (min-width: 768px) {
    position: static;
    box-shadow: none;
    border-radius: 0px 0px 60px 60px; 
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
  font-size: 12px; 
  margin: 0 auto; 
`;

const Sp = styled.p`
padding: 0px; 
margin-top: 0px; `

function SubNavigation() {
  return (
    <SubNavWrapper>
      <SubNavigationItem><HomeRoundedIcon/><Sp>Home</Sp></SubNavigationItem>
      <SubNavigationItem><ExploreRoundedIcon/><Sp>Explore</Sp></SubNavigationItem>
      <SubNavigationItem><FavoriteRoundedIcon/><Sp>Favourites</Sp></SubNavigationItem>
      <SubNavigationItem><AccountCircleRoundedIcon/><Sp>Log In</Sp></SubNavigationItem>
    </SubNavWrapper>
  );
};

export default SubNavigation;
