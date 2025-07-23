import React from "react";
import { MdOutlineDashboard } from "react-icons/md";

export default function Navigation() {
  return (
    <div className="mx-[2%] my-3 flex justify-between max-sm:flex-col max-md:flex ">
      <div className="flex ml-[7%]">
        <MdOutlineDashboard className="text-primary-color-600 text-5xl" />
        <h1 className="text-black text-2xl font-bold pt-1 pl-2">
          Business
          <span className="text-primary-color-600 pl-2 font-bold">Cafe</span>
        </h1>
      </div>

      <div className="mr-[10%] pt-2">
        <a
          className="  text-primary-color-600 pl-6 font-semibold cursor-pointer hover:text-primary-color-600"
          href="#"
        >
          Home
        </a>
        <a
          className=" pl-6 font-semibold cursor-pointer hover:text-primary-color-600"
          href="#"
        >
          Space
        </a>
        <a
          className=" pl-6 font-semibold cursor-pointer hover:text-primary-color-600"
          href="#"
        >
          About
        </a>
        <a
          className=" pl-6 font-semibold cursor-pointer hover:text-primary-color-600"
          href="#"
        >
          Contact
        </a>
      </div>
    </div>
  );
}
