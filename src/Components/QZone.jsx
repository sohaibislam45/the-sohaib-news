import React from 'react';
import swimimg from "../assets/swimming.png";
import classimg from "../assets/class.png";
import playimg from "../assets/playground.png";
const QZone = () => {
    return (
      <div className="p-3">
        <h1 className="font-semibold">Q-Zone</h1>
        <div className='flex flex-col items-center gap-8'>
          <img src={swimimg} alt="" />
          <img src={classimg} alt="" />
          <img src={playimg} alt="" />
        </div>
      </div>
    );
};

export default QZone;