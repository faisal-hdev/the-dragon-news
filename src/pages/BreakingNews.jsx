/* eslint-disable no-unused-vars */
import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="flex gap-2 bg-gray-100 p-2 lg:p-4 rounded-lg">
      <button className="btn btn-error text-white md:px-8">Latest</button>
      {/* <Marquee pauseOnHover={true} speed={60}>
        <Link to="/" className="mr-4">
          I can be a React component, multiple React components, or just some
          text......
        </Link>
        <Link to="/">
          I can be a React component, multiple React components, or just some
          text......
        </Link>
      </Marquee> */}
    </div>
  );
};

export default BreakingNews;
