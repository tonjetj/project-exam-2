import React from "react";
import RegisterForm from "../../components/registerForm";
import * as S from "./index.styles"

const RegisterPage = () => {
  return (
    <S.RegisterContainer>
      <S.FormBackground>
      <RegisterForm />
      </S.FormBackground>
    </S.RegisterContainer>
  );
};

export default RegisterPage;
