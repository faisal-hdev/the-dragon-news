/* eslint-disable no-unused-vars */
import React from "react";
import Nav from "./sharedPage/Nav";
import Header from "./sharedPage/Header";
import RightSideNav from "./sharedPage/RightSideNav";
import LeftSideNav from "./sharedPage/LeftSideNav";
import BreakingNews from "./BreakingNews";
import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";

const Home = () => {
  const news = useLoaderData();
  console.log(news);
  return (
    <div>
      <Header />
      <BreakingNews />
      <Nav />
      <div className="max-w-[1180px] flex gap-4 md:gap-6 flex-col md:flex-row justify-between">
        <div className="w-full md:w-[295px]">
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="w-full md:w-[590px]">
          <h3 className="text-lg font-semibold mb-3">
            Dragon News Home {news.length}
          </h3>
          <div>
            {news.map((aNews) => (
              <NewsCard
                className="mb-4 block"
                key={aNews._id}
                news={aNews}
              ></NewsCard>
            ))}
          </div>
        </div>
        <div className="w-full md:w-[295px]">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
