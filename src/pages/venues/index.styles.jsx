import styled from "styled-components";
import Select from "@mui/material/Select";
import { MenuItem } from "@mui/material";

export const VenuesContainer = styled.div`
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

export const StyledFormControl = styled.div`
  margin: 1rem;
  min-width: 120px;
  color: #fff;

  & .MuiInputBase-input {
    color: #fff;
  }

  & .MuiOutlinedInput-root {
    & fieldset {
      border-color: grey;
    }
    &:hover fieldset {
      border-color: grey;
    }
    &.Mui-focused fieldset {
      border-color: grey;
    }
  }
`;

export const StyledSelect = styled(Select)`
  min-width: 200px; 
  max-height: 30px; 
  border: 0.5px solid; 
`;

export const StyledMenuItem = styled(MenuItem)`
  background-color: #000;
  color: #fff;
`;