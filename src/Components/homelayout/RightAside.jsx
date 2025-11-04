import React from "react";
import SocialLogin from "./SocialLogin";
import FindUsOn from "../FindUsOn";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import QZone from "../QZone";
const RightAside = () => {
  return (
    <div>
      <SocialLogin />
      <section className="mt-10">
        <FindUsOn />
        <div className="join join-vertical w-full">
          <button className="btn bg-base-100 justify-start join-item">
            <FaFacebook />
            Facebok
          </button>
          <button className="btn bg-base-100 justify-start join-item">
            <FaTwitter /> Twitter
          </button>
          <button className="btn bg-base-100 justify-start join-item">
            <FaInstagram /> Instragram
          </button>
        </div>
      </section>
      <section className="mt-6 bg-base-200">
        <QZone />
      </section>
    </div>
  );
};

export default RightAside;
