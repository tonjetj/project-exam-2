import styled from "styled-components";
import VerifiedIcon from '@mui/icons-material/Verified';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AddIcon from '@mui/icons-material/Add';

export const DashboardContainer = styled.div`
max-width: 100%;
margin: 80px auto;
padding: 0;
color: #fff; 
font-family: "Century Gothic", sans-serif; 
@media screen and (max-width: 1200px){
  max-width: 60%; 
}  @media screen and (min-width: 1200px){
  max-width: 55%; 
} @media screen and (max-width: 798px){
  max-width: 90%; 
} 
`;

export const SpinnerContainer = styled(DashboardContainer)`
justify-content: center;
align-items: center;
height: 100px;
margin: 10% auto; 
width: 100%; 
`


export const spinAnimation = styled.div`
text-align: center; 
justify-content: flex-center; 
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
export const Spinner = styled.div`
  border: 5px solid #808080;
  border-top: 5px #8EFFA1 solid;
  border-radius: 50%;
  margin: 0 auto; 
  height: 100px;
  width: 100px;
  animation: spin 1s linear infinite;


  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
    
  }
`;

export const AvatarContainer = styled.div`
  position: relative;
`;

export const AvatarImage = styled.img`
  width: 200px;
  height: 240px;
  transform-origin: top left;
  transform: scale(1) translate(0, 0); /* Juster disse verdiene for zoom og posisjon */
  transition: transform 0.3s ease-in-out;
  border-radius: 15px;
`;

export const ManagerIcon = styled(VerifiedIcon)`
max-height: 30px; 
padding: 0px 5px 0px 15px; 
`

export const ManagerBanner = styled.div`
position: absolute;
align-item: center; 
display: inline-flex; 
justify-content: flex-start; 
align-items: center; 
width: 200px; 
margin: 0 auto; 
bottom: 0;
color: #ffffff;
border-radius: 0px 0px 15px 15px;
background-color: #3B00C7; 
z-index: 9999; 
`

export const StyledBox = styled(Box)`
  width: 100%; 
  border-radius: 20px; 
  margin-top: 50px; 
`;

export const StyledAppBar = styled(AppBar)`
  background-color: #000!important;
  border-radius: 20px;
`;

export const StyledTabs = styled(Tabs)`
  background-color: none; 
  color: #fff!important; 
  border-radius: 20px; 
  .MuiTabs-indicator {
    height: 100%; 
    background-color: #3B00C7;
    border-radius: 15px; 
  }
`;

export const StyledTab = styled(Tab)`
  background-color: black; 
  color: #fff; 
  z-index: 9999; 
`;

export const StyledTabPanel = styled.div`
background-color: black; 
color: #fff; 
`;

export const Add = styled(AddIcon)`
color: #fff; 
`

export const Button = styled.button`
background-color: #000; 
padding: 5px; 
border: none; 
border-radius: 10px; 
margin-left: 10px; 
`

export const NewVenue = styled.div`
display: inline-flex; 
align-items: center; 
`
export const TabContainer = styled.div`
width: 100%; 
display: flex; 
justify-content: flex-end; 
`

export const ProfileContainer = styled.div`
background-color: #000; 
display: flex; 
padding: 50px;
border-radius: 30px; 
`

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex: 1;
  gap: 10px;
`;

export const RightContent = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
`;