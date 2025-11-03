import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
      <div className="flex items-center gap-6 bg-base-200 p-3 rounded">
        <button className="btn btn-secondary shadow-none px-6">Latest</button>
        <Marquee>
          <p className='font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam expedita deserunt nisi. Tenetur quis similique autem consequatur inventore quo modi!</p>
        </Marquee>
      </div>
    );
};

export default LatestNews;