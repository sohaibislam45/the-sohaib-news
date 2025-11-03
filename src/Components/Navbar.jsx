import React from 'react';
import { NavLink } from 'react-router';
import userImg from "../assets/user.png";
const Navbar = () => {
    return (
      <div className="flex justify-between items-center text-accent">
        <div></div>
        <div className="middle_part flex gap-6">
          <NavLink className="nav" to="/">
            Home
          </NavLink>
          <NavLink className="nav" to="/about">
            About
          </NavLink>
          <NavLink className="nav" to="/career">
            Career
          </NavLink>
        </div>
        <div className="right_side flex gap-3">
          <img src={userImg} alt="" />
          <div className="btn btn-primary">Login</div>
        </div>
      </div>
    );
};

export default Navbar;