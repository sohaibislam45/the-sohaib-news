import React, { Suspense } from "react";
import CategoryNews from "../CategoryNews";

const LeftAside = () => {
  return (
    <div>
      <Suspense
        fallback={
          <div className="flex justify-center items-center">
            <span className="loading loading-dots loading-xl"></span>
          </div>
        }
      >
        <CategoryNews />
      </Suspense>
    </div>
  );
};

export default LeftAside;
