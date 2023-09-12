import React,{useState} from "react";
import "./Form.css";
import { useForm } from "react-hook-form";

const RegistrationForm = () => {
const [userData,setUserData]=useState([])
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues: { name: "", email: "", password: "" } });

  const onSubmit = (data) => {
    console.log(data)
    localStorage.setItem("name",data.name)
    localStorage.setItem("email",data.email)
    localStorage.setItem("password",data.password
    )
    // setUserData(prev=>[...prev,data])
    alert("register successfully");
  };

  return (
    <>
      <h1>Registration form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input {...register("name", { required: true })} placeholder="Name..." />
        {errors.name && <p>This field is required</p>}

        <label>Email</label>
        <input
          {...register("email", { required: true })}
          placeholder="test@gmail.com"
        />
        {errors.email && <p>This field is required</p>}

        <label>Password</label>
        <input
          {...register("password", { required: true, maxLength: 10 })}
          type="password"
          placeholder="Password..."
        />
        {errors.password && (
          <p>
            This field is required and must not exceed 10 characters in length
          </p>
        )}
        <input type="submit" />
      </form>
    </>
  );
};

export default RegistrationForm;
