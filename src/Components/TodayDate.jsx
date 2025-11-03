import React from 'react';

const TodayDate = () => {
  const today = new Date();

  const weekday = today.toLocaleDateString("en-US", { weekday: "long" });
  const monthDayYear = today.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="text-lg font-semibold">
      <span className="text-black">{weekday}</span>,{" "}
      <span className="text-gray-500">{monthDayYear}</span>
    </div>
  );
};

export default TodayDate;
