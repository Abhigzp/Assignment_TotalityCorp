import React, { useState } from 'react';
import './Form.css'
import { useForm } from "react-hook-form";
const RegistrationForm = ({ onRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { register, handleSubmit,watch,formState: { errors } } = useForm({ defaultValues: {example: "", exampleRequired: "" } });
  const handleRegister = () => {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    onRegister();
  };

  return (
    <>
    <h1> Registration form</h1>
    <form
    onSubmit={handleSubmit((data) => {
      alert(JSON.stringify(data));
    })}
  >
    <label>Name</label>
    <input {...register("name")} defaultValue="Name..." />
    {errors.email && <p>This field is required</p>}
    <label>Email</label>
    <input {...register("email")} defaultValue="test@gmail.com" />
    {errors.email && <p>This field is required</p>}
    <label>Password</label>
    <input
      {...register("PasswordRequired", { required: true, maxLength: 10 })}
    />
    {errors.exampleRequired && <p>This field is required</p>}
    <input type="submit" />
  </form>
  </>
    // <div>
    //   <h2>Registration</h2>
    //   <input
    //     type="text"
    //     placeholder="Username"
    //     value={username}
    //     onChange={(e) => setUsername(e.target.value)}
    //   />
    //   <input
    //     type="password"
    //     placeholder="Password"
    //     value={password}
    //     onChange={(e) => setPassword(e.target.value)}
    //   />
    //   <button onClick={handleRegister}>Register</button>
    // </div>
   
  );
};

export default RegistrationForm;
