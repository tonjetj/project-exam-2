import React, {useState} from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { API_BASE_URL } from "../../api/apiBase";
import * as S from "./index.styles";
import { InputAdornment } from "@mui/material";
import { loginSchema } from "./schema";


function LoginForm({onClose, navigate, onSuccess}) {
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(loginSchema),
  });


  const onSubmit = async (data) => {
    try {
      setIsLoggingIn(true);

      const postData = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      };

      const response = await fetch(`${API_BASE_URL}/holidaze/auth/login`, postData);
      const json = await response.json();

       if (response.ok) {
        localStorage.setItem('accessToken', json.accessToken);
        onClose();
        onSuccess(json.userData);
        navigate("/dashboard");
      } else {
        console.log(json); 
      }

        setIsLoggingIn(false);
    } catch (error) {
        console.log(error);
        setIsLoggingIn(false); 
    }
  };


  return (
    <S.FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <h4>Log in</h4>
      <S.FormInput {...register("email")} placeholder="example@stud.noroff.no" variant="standard" label="Email" InputProps={{
    startAdornment: (
      <InputAdornment position="start">
        <S.Email />
      </InputAdornment>
    ),
  }} />
      {errors.email && <S.ErrorMessage>{errors.email.message}</S.ErrorMessage>}
      <S.FormInput type="password" {...register("password")} placeholder="********" variant="standard" label="Password" InputProps={{
    startAdornment: (
      <InputAdornment position="start">
        <S.Password />
      </InputAdornment>
    ),
  }} />
      {errors.password && <S.ErrorMessage>{errors.password.message}</S.ErrorMessage>}
      <S.SubmitButton type="submit" disabled={isLoggingIn}>
        {isLoggingIn ? "Logging In..." : "Log In"}
      </S.SubmitButton>
        <S.RegisterText onClick={onClose}>
          Don't have a profile? <S.SLink to="/register">Register</S.SLink>
        </S.RegisterText>
    </S.FormWrapper>
  );
}

export default LoginForm;
