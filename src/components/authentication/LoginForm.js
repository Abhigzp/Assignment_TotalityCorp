import React, { useState } from "react";
import "./Form.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ onLogin }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate()
  const onSubmit = () => {
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    if (email === storedEmail && password === storedPassword) {
    navigate("/landingpage")
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div>
               <h1>Login Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Email</label>
        <input
          type="email"
          {...register("email", { required: true })}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email..."
        />
        {errors.email && <p>This field is required</p>}
        <label>Password</label>
        <input
          type="password"
          {...register("password", { required: true, maxLength: 10 })}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password..."
        />
        {errors.password && <p>This field is required (max 10 characters)</p>}
        <input type="submit" />
        <div>
        <p>if you are not rejistered with us ? <span onClick={()=>navigate('/register')}>Sign in</span> </p>
        </div>
       
      </form>
       
    </div>
  );
};

export default LoginForm;
