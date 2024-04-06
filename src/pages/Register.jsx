/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import Nav from "./sharedPage/Nav";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, photo, email, password);

    // create User
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <Nav />
      <div className="w-full mx-auto max-w-[750px] bg-[#dbdbdb2b] md:py-20 md:px-16 p-3 space-y-8 rounded text-black">
        <h1 className="text-2xl md:text-4xl font-bold text-[#403F3F] text-center border-b pb-8">
          Register your account
        </h1>
        <form onSubmit={handleRegister} className="space-y-6">
          <div className="space-y-1 text-sm md:text-lg">
            <label className="block text-[#403F3F] font-semibold">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your name"
              className="w-full px-4 py-3 md:py-4 rounded-md border text-black focus:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm md:text-lg">
            <label className="block text-[#403F3F] font-semibold">
              Photo URL
            </label>
            <input
              required
              type="text"
              name="photo"
              placeholder="Enter your PhotoURL"
              className="w-full px-4 py-3 md:py-4 rounded-md border text-black focus:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm md:text-lg">
            <label className="block text-[#403F3F] font-semibold">Email</label>
            <input
              required
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-3 md:py-4 rounded-md border text-black focus:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm md:text-lg">
            <label
              htmlFor="password"
              className="block text-[#403F3F] font-semibold"
            >
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
            className="block mt- font-semibold md:text-lg w-full py-3 md:py-4 text-center rounded-md hover:bg-black duration-200 text-white bg-[#403F3F]"
          >
            Register
          </button>
        </form>
        <p className="md:text-lg text-center sm:px-6 text-gray-500">
          Already have an Account ?
          <Link to="/login" className="hover:underline text-red-600 ml-2">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
