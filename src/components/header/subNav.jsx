import React, {useState} from "react";
import styled from "styled-components";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ExploreRoundedIcon from '@mui/icons-material/ExploreRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { NavLink, useNavigate } from "react-router-dom";
import LoginForm from "../loginForm";
import * as S from "../loginModal/index.styles"


export const Home = styled(HomeRoundedIcon)`
max-height: 20px; 
`;
export const Explore = styled(ExploreRoundedIcon)`
max-height: 20px; 
`;
export const Favourite = styled(FavoriteRoundedIcon)`
max-height: 20px; 
`;
export const LogIn = styled(AccountCircleRoundedIcon)`
max-height: 20px; 
`;

export const SubNavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #151718;
  padding: 15px; 
  position: fixed;
  width: 100%;
  z-index: 1;
  box-sizing: border-box;
  border-radius: 60px 60px 0px 0px; 
  bottom: 0; 
  @media screen and (min-width: 1200px) {
    width: 55%; 
  }
  @media screen and (min-width: 768px) {
    padding: 10px;
    position: static; 
    border-radius: 0px; 
    width: 60%; 
    margin: 0 auto; 
    border-radius: 15px; 
  }
`;

export const SubNavigationItem = styled(NavLink)`
  color: #fff;
  font-weight: light;
  cursor: pointer;
  text-align: center;
  font-size: 10px; 
  margin: 0 auto; 
  text-decoration: none;

`;

export const Sp = styled.p`
padding: 0px; 
margin: 0px; 
`;





function SubNavigation() {
  const navigate = useNavigate(); 
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

 

  const handleScrollToLogo = () => {
    const logoWrapper = document.getElementById('logoWrapper');
    if (logoWrapper) {
      window.scrollTo({
        top: logoWrapper.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <SubNavWrapper>
      <SubNavigationItem to="/" exact onClick={handleScrollToLogo}>
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
      <SubNavigationItem onClick={handleToggleModal}>
        <LogIn />
        <Sp>Log In</Sp>
      </SubNavigationItem>
      {isModalOpen && (
        <S.ModalWrapper>
          <S.ModalContent>
            <S.CloseButton onClick={handleCloseModal} />
            <LoginForm
              onClose={handleCloseModal}
              onSuccess={() => {
                handleCloseModal();
                navigate("/dashboard");
              }}
              navigate={navigate}
            />
          </S.ModalContent>
        </S.ModalWrapper>
      )}
    </SubNavWrapper>
  );
};

export default SubNavigation;
