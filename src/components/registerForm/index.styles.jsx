import styled from "styled-components";
import CloseIcon from '@mui/icons-material/Close';
import { TextField } from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined';



export const Email = styled(EmailOutlinedIcon)`
max-width: 20px; 
`
export const Password = styled(LockOutlinedIcon)`
max-width: 20px; 
`

export const Person = styled(PersonOutlineOutlinedIcon)`
max-width: 20px; 
`

export const Photo = styled(PhotoOutlinedIcon)`
max-width: 20px; 
`

export const FormWrapper = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: width: 100%;
  margin: 0 auto; 
  align-items: left;
  width: 400px; 
  background-color: #fff; 
  padding: 20px; 
  border-radius: 15px; 
  font-family: "Century Gothic";
    @media screen and (max-width: 768px) {
        max-width: 350px;
    }
`;


export const CloseButton = styled(CloseIcon)`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
  cursor: pointer;
`;



export const FormInput = styled(TextField)`
  min-width: 100%;
  padding: 5px 0px; 
  && {
    margin-bottom: 10px; 
  }
`;

export const ErrorMessage = styled.p`
  color: #000;
  margin-bottom: 15px;
  background-color: #fd8898; 
  width: 100%;
  border-radius: 5px; 
  padding: 7px 0px; 
  font-size: 10px; 
  text-align: center
`;

export const SubmitButton = styled.button`
  background-color: #000;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px; 
  width: 100%; 
  font-size: 15px;
`;

export const VenueCheck = styled.div`
display: inline-flex;
justify-content: flex-end; 
align-items: center;  
font-size: 15px; `

