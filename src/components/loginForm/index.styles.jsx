import styled from "styled-components";
import { Link } from "react-router-dom";
import { TextField } from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

export const Email = styled(EmailOutlinedIcon)`
max-width: 20px; 
`
export const Password = styled(LockOutlinedIcon)`
max-width: 20px; 
`

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: 0 auto; 
  align-items: left;
  font-family: "Century Gothic";
    @media screen and (max-width: 768px) {
        max-width: 350px;
    }
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

export const RegisterText = styled.p`
  margin-top: 20px;
  font-size: 14px; 
`;

export const SLink = styled(Link)`
color: #000; 
font-weight: bold; 
border-radius: 5px;
`


export const ModalWrapper = styled.div`
  position: fixed;
  top: 0; 
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

export const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  color: #000;
  @media screen and (max-width: 768px){
    margin: 0 auto; 
  }
`;