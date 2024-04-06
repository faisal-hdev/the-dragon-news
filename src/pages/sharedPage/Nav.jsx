/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import userImg from "../../assets/user.png";
import { AuthContext } from "../../providers/AuthProvider";

const Nav = () => {
  const { user, logOut } = useContext(AuthContext);
  //Log out
  const handleSignOut = () => {
    logOut().then().catch();
  };
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/career">Career</NavLink>
      </li>
      <li>
        <NavLink to="/addict">News Addict</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 px-0 mt-4 lg:mt-5 mb-8 lg:mb-20">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar mr-2"
        >
          <div className="w-9 rounded-full">
            <img alt="Tailwind CSS Navbar component" src={userImg} />
          </div>
        </div>
        {user ? (
          <button
            onClick={handleSignOut}
            className="btn btn-neutral lg:px-8 py-2"
          >
            Log Out
          </button>
        ) : (
          <Link to="/login">
            <button className="btn btn-neutral lg:px-8 py-2">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Nav;
