/* eslint-disable no-unused-vars */
import React from "react";
import logo from "../../assets/logo.png";
import moment from "moment";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="text-center my-4 md:my-6 lg:my-12 md:space-y-2 lg:space-y-4">
      <div className="flex items-center justify-center">
        <Link to="/">
          <img className="w-[270px] lg:w-[450px]" src={logo} alt="" />
        </Link>
      </div>
      <p className="text-lg">Journalism Without Fear or Favour</p>
      <p className="text-lg">{moment().format("dddd, MMMM D YYYY")}</p>
    </div>
  );
};

export default Header;
