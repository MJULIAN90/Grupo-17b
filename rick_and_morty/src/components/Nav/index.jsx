import React from "react";
import SearchBar from "../SearchBar";
import {Link } from "react-router-dom";

const Nav = ({onSearch}) => {
  return (
    <div 
      style={{
        display: "flex",
        flexDirection: 'row-reverse',
        gap: 10,
        alignItems: 'center',
      }}
    >
      <SearchBar onSearch={onSearch} />
      <Link to="/about">About</Link>
      <Link to='/home'>Home</Link>
    </div>
  );
};

export default Nav;
