import { IoMdMenu } from "react-icons/io";
import { MdClose } from "react-icons/md";
import React, { useState } from "react";

export default function Menu() {
  const [menuOpen, setmenuOpen] = useState(false);

  const handleClick = () => {
    setmenuOpen(true);
  };

  const handleClose = () => {
    setmenuOpen(false);
  };
  return (
    <div className="max-sm:block max-md:hidden max-lg:hidden max-xl:hidden max-2xl:hidden  ">
      {menuOpen ? (
        <MdClose
          className=" absolute top-2 right-5 text-4xl text-primary-color-500"
          onClick={handleClose}
        />
      ) : (
        <IoMdMenu
          className=" absolute top-2 right-5 text-4xl text-primary-color-500"
          onClick={handleClick}
        />
      )}

      {menuOpen && (
        <div className="flex flex-col gap-6 bg-primary-color-300 px-7">
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
      )}
    </div>
  );
}
