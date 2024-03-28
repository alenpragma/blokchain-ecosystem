import { useForm } from "react-hook-form";
import Container from "../shared/Container";
import { useContext, useState } from "react";
import { AuthContext } from "../../hooks/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
 
  const onSubmit = (data) => {
    localStorage.setItem("username", data.username);
    localStorage.setItem("password", data.password);
    navigate(from, { replace: true })
  };

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  return (
    <Container>
      <div className="max-w-xl mx-auto border border-slate-300 rounded-lg p-8 my-20">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <input
            type="text"
            className="w-full  px-5 py-2  rounded border border-slate-300  focus:outline focus:outline-slate-400"
            placeholder="username"
            id="name"
            {...register("username", { required: true })}
          />
          <input
            type="password"
            className="w-full  px-5 py-2  rounded border border-slate-300  focus:outline focus:outline-slate-400"
            placeholder="Password"
            id="password"
            {...register("password", { required: true })}
          />
          <button
            type="submit"
            className="w-full py-3 bg-blue-700 rounded-md text-[#fff] font-bold"
          >
            Login
          </button>
        </form>
      </div>
    </Container>
  );
};

export default Login;
