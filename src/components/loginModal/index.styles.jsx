import styled from "styled-components";
import CloseIcon from '@mui/icons-material/Close';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0; 
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

export const ModalContent = styled.div`
position: relative; 
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  color: #000;
  @media screen and (max-width: 768px){
    margin: 0 auto; 
  }
`;
;


export const CloseButton = styled(CloseIcon)`
  position: absolute;
  top: 0;
  right: 0; 
  cursor: pointer;
  padding: 10px; 
`;