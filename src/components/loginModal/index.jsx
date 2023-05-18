import { useNavigate } from "react-router-dom";
import React, {useState} from "react";
import LoginForm from "../loginForm";
import * as S from "../loginModal/index.styles";
import { Link } from "react-router-dom";




export default function LoginModal (){
    const navigate = useNavigate(); 
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const openModal = () => {
      setIsModalOpen(!isModalOpen);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  
   

    return (
        <div>
          
            <S.ModalWrapper>
              <S.ModalContent>
                <Link to="/"><S.CloseButton/></Link>
                <LoginForm
                  onClose={closeModal}
                  onSuccess={() => {
                    closeModal();
                    navigate("/dashboard");
                  }}
                  navigate={navigate}
                />
              </S.ModalContent>
            </S.ModalWrapper>
          ;
        </div>
        
    );
}