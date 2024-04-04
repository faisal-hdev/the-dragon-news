/* eslint-disable no-unused-vars */
import React from "react";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="max-w-[1140px] px-4 md:px-0 mx-auto font-poppins">
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
