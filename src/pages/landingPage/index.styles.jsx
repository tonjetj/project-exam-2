import styled from "styled-components";
import PlaceIcon from '@mui/icons-material/Place';
import StarIcon from '@mui/icons-material/Star';
import heroImage from "../../assets/cabin2.jpg";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Century+Gothic&family=Raleway&display=swap');

  
`;

export default GlobalStyles;


export const HeroImgContainer = styled.div`
background-image: url(${heroImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 400px; 
  border-radius: 20px; 
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center;
`

export const HolidazeHero = styled.img`
max-width: 200px; 
`
export const HeroText = styled.p`
font-size: 20px; 
`

export const HeroCta = styled.button`
 border-radius: 20px;
 background-color: #3B00C7;
 border: none; 
 color: #fff; 
 padding: 10px 20px; 
 cursor: pointer; 
 font-size: 15px; 

`


export const LandingContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  color: #fff; 
  font-family: "Century Gothic", sans-serif; 
  @media screen and (max-width: 1200px){
    max-width: 60%; 
  }  @media screen and (min-width: 1200px){
    max-width: 55%; 
  } @media screen and (max-width: 768px){
    max-width: 90%; 
  } 
`;

export const CardList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  padding: 0;

  @media screen and (max-width: 1250px) {
    grid-template-columns: 1fr;
  }
  
`;

export const Card = styled.li`
  background-color: #000;
  border-radius: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: #fff;
  text-align: left; 
  

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const CardTitle = styled.p`
font-size: 20px; 
margin: 0 0 1 rem;  
`
export const CardText = styled.p`
font-size: 15px; 
margin: 0 0 1 rem; 
`

export const PlaceText = styled.p`
font-size: 15px; 
margin: 0 0 1 rem; 
`

export const Place = styled(PlaceIcon)`
max-height: 15px; 
opacity: 80%; 
`

export const Star = styled(StarIcon)`
max-height: 20px; 
color: #FFB300; 
`

export const VenueImage = styled.img`
  max-width: 100%; 
  min-height: 200px; 
  max-height: 200px; 
  border-radius: 20px 20px 0px 0px; 
`;


