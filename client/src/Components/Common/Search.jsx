import React from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import "./Search.css";

const Search = () => {
  return (
    <div className="searchBox">
      <input type="text" placeholder="Search Courses" />
      <HiMagnifyingGlass />
    </div>
  );
};

export default Search;
