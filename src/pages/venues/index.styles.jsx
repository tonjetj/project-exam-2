import styled from "styled-components";
import Select from "@mui/material/Select";
import { MenuItem } from "@mui/material";
import PlaceIcon from '@mui/icons-material/Place';
import StarIcon from '@mui/icons-material/Star';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { Link } from "react-router-dom";




export const VenuesContainer = styled.div`
max-width: 100%;
margin: 0 auto;
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

export const CardLink = styled(Link)`
text-decoration: none; 
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

export const PriceText = styled(CardText)`
justify-content: flex-start; 
`;
export const RatingText = styled(CardText)`
justify-content: flex-end; 
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
  min-width: 280px;
  max-width: 280px; 
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

export const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0; 
  @media screen and (max-width: 798px) {
    justify-content: flex-end;
  }
`;

export const StyledFormControl = styled(FormControl)`
  min-width: 120px;

  & .MuiInputBase-input {
    color: #fff;
  }
`;

export const StyledSelect = styled(Select)`
  min-width: 100px; 
  max-height: 30px; 
  margin: 2px; 
  font-size: 11px!important; 
`;


export const StyledMenuItem = styled(MenuItem)`
  color: #fff; 
  
`;

export const Label = styled(InputLabel)`
color: #fff!important; 
`


export const BackToTopButton = styled.button`
  position: fixed;
  bottom: 10%;
  right: 20px;
  background-color: #3B00C7;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  z-index: 9999;
  margin-left: 20px; 
`;
