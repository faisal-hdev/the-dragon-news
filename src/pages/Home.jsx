/* eslint-disable no-unused-vars */
import React from "react";
import Nav from "./sharedPage/Nav";
import Header from "./sharedPage/Header";
import RightSideNav from "./sharedPage/RightSideNav";
import LeftSideNav from "./sharedPage/LeftSideNav";
import BreakingNews from "./BreakingNews";

const Home = () => {
  return (
    <div>
      <Header />
      <BreakingNews />
      <Nav />
      <div className="max-w-[1140px] flex gap-4 md:gap-6 flex-col md:flex-row justify-between">
        <div className="w-full md:w-[285px]">
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="w-full md:w-[570px]">
          <h3>Hello news coming soon</h3>
        </div>
        <div className="w-full md:w-[285px]">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
