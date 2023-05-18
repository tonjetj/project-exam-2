import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { API_BASE_URL } from "../../api/apiBase.js";
import fetchWithToken from "../../api/storage";
import * as S from "./index.styles.jsx";
import { InputAdornment } from "@mui/material";
import { schema } from "./schema.jsx";
import LoginModal from "../loginModal/index.jsx";

function RegisterForm({onSuccess}) {

  const [isRegistered, setIsRegistered] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });


  const onSubmit = async (data) => {
    try {
      const postData = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      };

      const response = await fetch(`${API_BASE_URL}/holidaze/auth/register`, postData);
      const json = await response.json();

      if (response.ok) {
        setIsRegistered(true);
        onSuccess(); 
      } else {
        console.log(json);
      }

    } catch (error) {
      console.log(error);
    }
  };


  return (
    <>
    {!isRegistered ? (
      <S.FormWrapper onSubmit={handleSubmit(onSubmit)}>
        
        <S.FormInput type="text" id="name" {...register("name")} placeholder="Ola_Nordmann95" variant="standard" label="Username" InputProps={{
    startAdornment: (
      <InputAdornment position="start">
        <S.Person />
      </InputAdornment>
    ),
  }} />
        {errors.name && <S.ErrorMessage>{errors.name.message}</S.ErrorMessage>}


        <S.FormInput type="email" id="email" {...register("email")} placeholder="example@stud.noroff.no" variant="standard" label="Email" InputProps={{
    startAdornment: (
      <InputAdornment position="start">
        <S.Email />
      </InputAdornment>
    ),
  }} />
        {errors.email && <S.ErrorMessage>{errors.email.message}</S.ErrorMessage>}

      
        <S.FormInput  type="password" id="password" {...register("password")} placeholder="********" variant="standard" label="Password" InputProps={{
    startAdornment: (
      <InputAdornment position="start">
        <S.Password />
      </InputAdornment>
    ),
  }} />
        {errors.password && <S.ErrorMessage>{errors.password.message}</S.ErrorMessage>}

    
        <S.FormInput  type="text" id="avatar" {...register("avatar")} placeholder="https://image-url.com/something" variant="standard" label="Image URL" InputProps={{
    startAdornment: (
      <InputAdornment position="start">
        <S.Photo />
      </InputAdornment>
    ),
  }}/>
        {errors.avatar && <S.ErrorMessage>{errors.avatar.message}</S.ErrorMessage>}

        <S.VenueCheck>
        <label htmlFor="venueManager">Register as a Venue Manager</label>
        <input type="checkbox" id="venueManager" {...register("venueManager")} />
        </S.VenueCheck>


        <S.SubmitButton type="submit">Register</S.SubmitButton>
      </S.FormWrapper>
    ) : (


      <LoginModal />

    )}
  </>
  );
  
}

export default RegisterForm; 


  fetchWithToken(`${API_BASE_URL}/holidaze/profiles`);