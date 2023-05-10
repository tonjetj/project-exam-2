import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import LoginForm from "../loginForm/index.jsx";
import API_BASE_URL from "../../api/apiBase.jsx";
import fetchWithToken from "../../api/storage";
import {AUTH_REGISTER, PROFILE_BY_NAME} from "../../api/apiEndpoints.js";


const schema = yup.object().shape({
  name: yup
    .string()
    .matches(/^[\w_]+$/, "Your name can only contain letters, numbers, and underscores")
    .required("A name is required"),
  email: yup
    .string()
    .email("Please enter your email address in format user@stud.noroff.no or user@noroff.no")
    .matches(/^(.*)@(stud\.)?noroff\.no$/, "Your email must be a valid @stud.noroff.no or @noroff.no email address")
    .required("Email is required"),
  password: yup.string().min(8, "Password must be at least 8 characters long").required("Password is required"),
  avatar: yup.string().url("Please enter a valid URL for your Avatar"),
  venueManager: yup.boolean(),
});

function RegisterForm() {
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

      const response = await fetch(`${API_BASE_URL}${AUTH_REGISTER}`, postData);
      console.log(response);
      const json = await response.json();
      console.log(json);
      setIsRegistered(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {!isRegistered ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" {...register("name")} />
          {errors.name && <p>{errors.name.message}</p>}
          <br/>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" {...register("email")} />
          {errors.email && <p>{errors.email.message}</p>}
          <br/>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" {...register("password")} />
          {errors.password && <p>{errors.password.message}</p>}
          <br/>
          <label htmlFor="avatar">Avatar:</label>
          <input type="text" id="avatar" {...register("avatar")} />
          {errors.avatar && <p>{errors.avatar.message}</p>}
          <br/>
          <label htmlFor="venueManager">Venue Manager:</label>
          <input type="checkbox" id="venueManager" {...register("venueManager")} />
          <br/>
          <button type="submit">Register</button>
        </form>
      ) : (
        <LoginForm />
      )}
    </>
  );
}

export default RegisterForm; 


  fetchWithToken(`${API_BASE_URL}${PROFILE_BY_NAME(name)}`);