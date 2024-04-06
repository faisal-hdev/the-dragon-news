/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { IoEyeSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { _id, title, image_url, details, total_view, author, rating } = news;
  return (
    <div>
      <div className="flex border mb-8 flex-col w-full space-y-6 overflow-hidden rounded-lg shadow-md text-black">
        <div className="flex flex-wrap p-5 bg-gray-100 justify-between">
          <div className="space-x-2">
            <div className="flex space-x-4">
              <img
                alt=""
                src={author.img}
                className="object-cover w-12 h-12 rounded-full shadow"
              />
              <div className="flex flex-col space-y-1">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-sm md:text-lg font-semibold"
                >
                  {author.name}
                </a>
                <span className="text-xs md:text-sm text-gray-600">
                  {author.published_date}
                </span>
              </div>
            </div>
          </div>
          <div className="space-x-2">
            <button
              aria-label="Share this post"
              type="button"
              className="p-2 text-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-4 md:h-5 h-4 md:w-5 fill-current text-gray-600"
              >
                <path d="M404,344a75.9,75.9,0,0,0-60.208,29.7L179.869,280.664a75.693,75.693,0,0,0,0-49.328L343.792,138.3a75.937,75.937,0,1,0-13.776-28.976L163.3,203.946a76,76,0,1,0,0,104.108l166.717,94.623A75.991,75.991,0,1,0,404,344Zm0-296a44,44,0,1,1-44,44A44.049,44.049,0,0,1,404,48ZM108,300a44,44,0,1,1,44-44A44.049,44.049,0,0,1,108,300ZM404,464a44,44,0,1,1,44-44A44.049,44.049,0,0,1,404,464Z"></path>
              </svg>
            </button>
            <button
              aria-label="Bookmark this post"
              type="button"
              className="p-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-4 md:h-6 h-4 md:w-6 fill-current text-gray-600"
              >
                <path d="M424,496H388.75L256.008,381.19,123.467,496H88V16H424ZM120,48V456.667l135.992-117.8L392,456.5V48Z"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="p-4">
          <h2 className="mb-3 text-xl font-semibold">{title}</h2>
          <img src={image_url} alt="" className="w-full mb-4" />

          {details.length > 200 ? (
            <p className="flex flex-col gap-2">
              {details.slice(0, 300)}.....
              <Link
                to={`/news/${_id}`}
                className="text-orange-600 hover:underline"
              >
                Read more
              </Link>
            </p>
          ) : (
            <p>{details}</p>
          )}
        </div>
        <div className="flex border-t p-4 flex-wrap justify-between">
          <div className="space-x-2">
            <div className="flex space-x-4">
              <div className="flex flex-col space-y-1">
                <p className="text-sm md:text-lg text-gray-500 font-medium">
                  Ratings : {rating?.number}
                </p>
              </div>
            </div>
          </div>
          <div className="space-x-2 flex text-gray-500 items-center gap-2">
            <IoEyeSharp size={25} />
            {total_view}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
