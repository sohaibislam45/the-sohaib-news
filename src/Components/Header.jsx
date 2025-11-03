import React from 'react';
import logo from "../assets/logo.png";
import TodayDate from "./TodayDate";
const Header = () => {
    return (
      <div className="flex flex-col items-center gap-3 my-10">
        <img src={logo} alt="" />
        <h1 className='text-sm'>Journalism Without Fear or Favour</h1>
        <TodayDate></TodayDate>
      </div>
    );
};

export default Header;