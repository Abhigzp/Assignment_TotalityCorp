import React, { useState } from 'react';
import './Form.css'
import { useForm } from "react-hook-form";
const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const { register, handleSubmit,watch,formState: { errors } } = useForm({ defaultValues: {example: "", exampleRequired: "" } });
  const handleLogin = () => {
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
      onLogin();
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <>
      <h1> login form</h1>
    <form
    onSubmit={handleSubmit((data) => {
      alert(JSON.stringify(data));
    })}
  >
    <label>Email</label>
    <input {...register("email")} defaultValue="email..." />
    {errors.email && <p>This field is required</p>}
    <label>Password</label>
    <input
      {...register("PasswordRequired", { required: true, maxLength: 10 })}
    />
    {errors.exampleRequired && <p>This field is required</p>}
    <input type="submit" />
  </form>
    </>
  );
};

export default LoginForm;
