import React from "react";

export default function Card({ image, title, description, text }) {
  return (
    <div className=" border border-gray-300 shadow-xl max-sm:border-0 ">
      <img src={image} alt="" className="pb-2" />

      <span className="text-center">
        {" "}
        <h2 className="py-4 font-bold text-primary-color-500 text-xl">
          {title}
        </h2>
      </span>

      <p className="text-xs pl-2 text-center">{description}</p>

      <h3 className="pt-5 font-bold text-center text-primary-color-500">
        {text}
      </h3>
    </div>
  );
}
