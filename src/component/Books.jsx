import React from "react";
import { BiLayer } from "react-icons/bi";

export default function Books({ title, description, descrp }) {
  return (
    <div className="bg-primary-color-100 mb-2 p-2 pb-8">
      <div className=" flex justify-center mb-4 mt-4">
        <BiLayer className="text-6xl bg-primary-color-500 rounded-full p-3" />
      </div>
      <h1 className="text-xl font-bold text-center mb-3">{title}</h1>
      <p>{description}</p>
      <p>{descrp}</p>
    </div>
  );
}
