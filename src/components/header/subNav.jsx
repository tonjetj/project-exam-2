import React from "react";
import styled from "styled-components";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ExploreRoundedIcon from '@mui/icons-material/ExploreRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { NavLink } from "react-router-dom";


const Home = styled(HomeRoundedIcon)`
max-height: 20px; 
`;
const Explore = styled(ExploreRoundedIcon)`
max-height: 20px; 
`;
const Favourite = styled(FavoriteRoundedIcon)`
max-height: 20px; 
`;
const LogIn = styled(AccountCircleRoundedIcon)`
max-height: 20px; 
`;

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
    border-radius: 0px 0px 60px 60px; 
    width: 50%; 
    justify-content: space-between; 
    margin: 0 auto; 
  }
`;

const SubNavigationItem = styled(NavLink)`
  color: #fff;
  font-weight: light;
  cursor: pointer;
  text-align: center;
  font-size: 10px; 
  margin: 0 auto; 

`;

const Sp = styled.p`
padding: 0px; 
margin-top: 0px; 
`;

function SubNavigation() {
  return (
    <SubNavWrapper>
      <SubNavigationItem to="/" exact>
        <Home />
        <Sp>Home</Sp>
      </SubNavigationItem>
      <SubNavigationItem to="/venues">
        <Explore />
        <Sp>Explore</Sp>
      </SubNavigationItem>
      <SubNavigationItem to="/favourites">
        <Favourite />
        <Sp>Favourites</Sp>
      </SubNavigationItem>
      <SubNavigationItem to="/login">
        <LogIn />
        <Sp>Log In</Sp>
      </SubNavigationItem>
    </SubNavWrapper>
  );
};

export default SubNavigation;
