import * as yup from "yup";

export const schema = yup.object().shape({
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
  