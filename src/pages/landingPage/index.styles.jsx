import styled from "styled-components";
import PlaceIcon from '@mui/icons-material/Place';
import StarIcon from '@mui/icons-material/Star';
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
import heroImage from "../../assets/cabin2.jpg";
import registerImg from "../../assets/cabin1.jpg";
import { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";
import EastRoundedIcon from '@mui/icons-material/EastRounded';


const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Century+Gothic&family=Raleway&display=swap');

  
`;

export default GlobalStyles;

export const EastArrow = styled(EastRoundedIcon)`
max-height: 20px; 
`

export const HeroSection = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(7, 1fr);
  gap: 1rem;
  margin: 2rem 0;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
`;

export const HeroImgContainer = styled.div`
  background-image: url(${heroImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 400px; 
  border-radius: 20px; 
  grid-column: span 3;
  grid-row: span 7;
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center;
  padding: 0px 20px; 

  @media screen and (max-width: 768px) {
    grid-column: unset;
    grid-row: unset;
    margin-bottom: 1rem;
  }
`;

export const HolidazeHero = styled.img`
max-width: 150px; 
`
export const HeroText = styled.p`
font-size: 20px; 
`

export const Card1Text = styled(HeroText)`
text-shadow: 1px 1px 2px black, 0 0 1em black, 0 0 0.2em black;
`

export const HeroCta = styled.button`
 border-radius: 20px;
 background-color: #3B00C7;
 border: none; 
 color: #fff; 
 padding: 10px 20px; 
 cursor: pointer; 
 font-size: 15px; 
 margin-bottom: 60px; 
`

export const HeroCard = styled(Link)`
 background-image: url(${registerImg});
 background-size: cover;
 background-position: center;
 background-repeat: no-repeat;
  background-color: #000;
  grid-column: span 2;
  grid-row: span 4;
  padding: 20px; 
  border-radius: 20px; 
  text-decoration: none; 
  color: #fff; 
  @media screen and (max-width: 768px) {
    grid-column: unset;
    grid-row: unset;
    min-height: 120px; 
  }
`;

export const HeroCard2 = styled(HeroCard)`
background-image: none; 
background-color: #3B00C7;
grid-row: span 3; 
display: flex-block;
align-items: center;
`
export const Arrow = styled(ArrowOutwardRoundedIcon)`
transform: scale(2);
justify-content: flex-end;
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

export const ALink = styled(Link)`
text-decoration: none; 
`

export const ArrowLink = styled(ALink)`
display: inline-flex; 
align-items: center; 
justify-content: space-between;
color: #fff; 
font-size: 20px; 
`

export const CardList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  padding: 0;

  @media screen and (max-width: 1250px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 798px) {
    grid-template-columns: 1fr;
  }
`;
export const Card = styled.li`
  background-color: #000;
  border-radius: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: #fff;
  text-align: left;
  text-decoration: none; 
  @media screen and (min-width: 798px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 500px;
    max-height: 500px;
    max-width: 280px;
  }

  @media screen and (max-width: 798px) {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
    border-radius: 20px;
    min-width: 300px;
    min-width: 368px;
  }
`;

export const CardTitle = styled.p`
  font-size: 20px;
  font-family: "Century Gothic", sans-serif;
  margin: 5px 0;
  @media screen and (max-width: 798px) {
    margin: 0; 
    padding: 0; 
    font-size: 18px; 
  }

`;
export const CardText = styled.p`
  font-size: 15px;
  margin: 0 0 1rem;
  padding: 5px;
  @media screen and (max-width: 798px) {
    margin: 0; 
    padding: 0; 
    font-size: 13px; 
  }
`;

export const PlaceText = styled.p`
    font-size: 13px;
    font-family: "Century Gothic", sans-serif;
    opacity: 0.8;
    margin: 0 0 1rem;
    padding: 5px 0px; 
  @media screen and (max-width: 798px) {
    margin: 0; 
    font-size: 11px; 
  }
`;

export const BottomText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 798px){
    width: 270px; 
  } 
`;

export const CopyWrapper = styled.div` 
display: flex-block; 
align-items: center; 
padding: 20px; 
flex-direction: column;
margin-bottom: 20px; 
`

export const PriceText = styled(CardText)`
justify-content: flex-start; 
`;
export const RatingText = styled(CardText)`
justify-content: flex-end; 
`;

export const Place = styled(PlaceIcon)`
  max-height: 15px;
  opacity: 0.8;
`;

export const Star = styled(StarIcon)`
  max-height: 20px;
  color: #ffb300;
  text-align: right;
`;

export const VenueImage = styled.img`
  min-width: 180px;
  min-height: 280px;
  max-height: 280px;
  border-radius: 20px 20px 0px 0px;

  @media screen and (max-width: 798px) {
    min-width: 250px; 
    max-width: 250px; 
    min-height: 180px;
    max-height: 180px;
    border-radius: 0px 20px 20px 0px; 
  }
`;


export const ViewVenues = styled.div`
display: flex; 
justify-content: space-between;
width: 100%; 
align-items: center; 
`