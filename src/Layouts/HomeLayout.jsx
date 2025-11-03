import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import LatestNews from "../Components/LatestNews";
import Header from "../Components/Header";
import LeftAside from "../Components/homelayout/LeftAside";
import RightAside from "../Components/homelayout/rightAside";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>
        <section className="w-10/12 mx-auto">
          <LatestNews></LatestNews>
        </section>
        <nav className="w-10/12 mx-auto mt-6">
          <Navbar></Navbar>
        </nav>
      </header>
      <main className="w-10/12 mx-auto grid grid-cols-12 gap-4 mt-10">
        <aside className="col-span-3">
          <LeftAside></LeftAside>
        </aside>
        <section className="main col-span-6">
          <Outlet></Outlet>
        </section>
        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
