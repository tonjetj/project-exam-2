import React, { useState } from "react"; // Add the import statement
import LoginForm from "../loginForm";
import * as S from "./index.styles";
import { Link, useNavigate } from "react-router-dom";

export default function LoginModal() {
  const navigate = useNavigate();
  const [userProfile, setUserProfile] = useState(null);

  const handleLoginSuccess = (userData) => {
    setUserProfile(userData);
    closeModal();
    navigate("/dashboard");
  };

  const closeModal = () => {

  };

  return (
    <div>
      <S.ModalWrapper>
        <S.ModalContent>
          <Link to="/">
            <S.CloseButton />
          </Link>
          {userProfile ? (
            <LoginForm onClose={closeModal} navigate={navigate} />
          ) : (
            <LoginForm
              onClose={closeModal}
              onSuccess={handleLoginSuccess}
              navigate={navigate}
            />
          )}
        </S.ModalContent>
      </S.ModalWrapper>
    </div>
  );
}
