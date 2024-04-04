/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);
  console.log(categories);

  useEffect(() => {
    fetch("data-categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <div className="space-y-8">
        <h3 className="text-lg font-semibold">All Categories </h3>
        {categories.map((category) => (
          <NavLink
            className="block ml-8"
            key={category.id}
            to={`/category/${category.id}`}
          >
            {category.name}
          </NavLink>
        ))}
        <div></div>
      </div>
    </div>
  );
};

export default LeftSideNav;
