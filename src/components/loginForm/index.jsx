import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import API_BASE_URL from "../../api/apiBase";



const loginSchema = yup.object().shape({
    email: yup.string()
  .email('Please enter a valid email address.')
  .matches(/^(.*)@(stud\.)?noroff\.no$/, 'Use a valid email ending with "@stud.noroff.no" or "@noroff.no"')
  .required('Email is required.'),
    password: yup.string().required('Password is required.'),
  });

  function LoginForm() {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(loginSchema),
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
          const response = await fetch(`${API_BASE_URL}/holidaze/auth/login`, postData);
          console.log(response); 
          const json = await response.json(); 
          console.log(json);
          localStorage.setItem('accessToken', response.accessToken);

        } catch (error) {
          console.log(error);
        }
      };
      
  
      return (
        <form onSubmit={handleSubmit(onSubmit)}>

          <input {...register('email')} />
          {errors.email && <p>{errors.email.message}</p>}
          <input type="password" {...register('password')} />
          {errors.password && <p>{errors.password.message}</p>}
          <button type="submit">Log In</button>
        </form>
      );
  }

  export default LoginForm;