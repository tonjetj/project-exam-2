import * as yup from "yup";

export const loginSchema = yup.object().shape({
    email: yup.string()
      .email('Please enter a valid email address.')
      .matches(/^(.*)@(stud\.)?noroff\.no$/, 'Email is required.')
      .required('Email is required.'),
    password: yup.string().required('Password is required.'),
  });