/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import Nav from "./sharedPage/Nav";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log("location in the login page", location);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        // navigate after login
        navigate(location?.state ? location?.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
    console.log(email, password);
  };

  return (
    <div>
      <Nav />
      <div className="w-full mx-auto max-w-[750px] bg-[#dbdbdb2b] md:py-20 md:px-16 p-3 space-y-8 rounded text-black">
        <h1 className="text-2xl md:text-4xl font-bold text-[#403F3F] text-center border-b pb-8">
          Login your account
        </h1>
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-1 text-sm md:text-lg">
            <label className="block text-[#403F3F] font-semibold">
              Email address
            </label>
            <input
              required
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-3 md:py-4 rounded-md border text-black focus:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm md:text-lg">
            <label className="block text-[#403F3F] font-semibold">
              Password
            </label>
            <input
              required
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 md:py-4 rounded-md border text-black focus:border-violet-400"
            />
          </div>
          <button
            type="submit"
            className="block mt- font-semibold md:text-lg w-full p-4 text-center rounded-md hover:bg-black duration-200 text-white bg-[#403F3F]"
          >
            Login
          </button>
        </form>
        <p className="md:text-lg text-center sm:px-6 text-gray-500">
          Dont’t Have An Account ?
          <Link to="/register" className="hover:underline ml-2 text-red-600">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
