/* eslint-disable no-unused-vars */
import React from "react";
import Header from "./sharedPage/Header";
import RightSideNav from "./sharedPage/RightSideNav";
import { Link, useParams } from "react-router-dom";
import { RxArrowLeft } from "react-icons/rx";
import Nav from "./sharedPage/Nav";

const NewsDetails = () => {
  const { id } = useParams();
  return (
    <div>
      <Header />
      <Nav />
      <div className="max-w-[1180px] flex gap-5 flex-col md:flex-row justify-between mx-auto">
        <div className="w-full md:max-w-[885px] mx-auto">
          <h2 className="text-lg font-semibold">Dragon News</h2>
          <div className="p-4 md:p-8 shadow-md border rounded-md text-gray-500 mt-3">
            <div className="space-y-4">
              <div className="space-y-2">
                <img
                  src="https://source.unsplash.com/random/480x360/?4"
                  alt=""
                  className="block object-cover object-center w-full rounded-md h-72 bg-gray-500"
                />
              </div>
              <div className="space-y-2">
                <a rel="noopener noreferrer" href="#" className="block">
                  <h3 className="text-xl font-semibold text-violet-400">
                    Facere ipsa nulla corrupti praesentium pariatur architecto
                  </h3>
                </a>
                <p className="leading-snug text-gray-400">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Repellat, excepturi. Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Repellat, excepturi.
                </p>
              </div>
              <Link to="/">
                <button className="btn mt-4 flex items-center btn-error text-white">
                  <RxArrowLeft size={20} />
                  All news in this category
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[295px]">
          <RightSideNav />
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
