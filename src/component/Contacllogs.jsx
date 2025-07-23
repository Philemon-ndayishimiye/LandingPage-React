import React from "react";

export default function ({ icon, title, location }) {
  return (
    <div className=" flex gap-6 mb-[50px] max-sm:gap-3 max-sm:mb-[23px] ">
      <div className="h-[80px] w-[80px] bg-primary-color-600 text-white text-3xl rounded-full flex justify-center items-center max-sm:h-[40px] max-sm:w-[40px] max-sm:text-xl ">
        {icon}
      </div>
      <div>
        <h1 className="font-bold text-black text-xl ">{title}</h1>
        <p>{location}</p>
      </div>
    </div>
  );
}
