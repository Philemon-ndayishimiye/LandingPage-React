import React from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="ml-[90px] mr-[50px]  max-sm:ml-1">
      <hr className="border border-primary-color-700 w-full max-sm:ml-1" />

      <div className=" flex justify-between mt-[40px]  max-md:gap-4 max-sm:flex-col max-sm:gap-[40px]">
        <div>
          <div className="flex ml-[7%]">
            <MdOutlineDashboard className="text-primary-color-600 text-5xl" />
            <h1 className="text-black text-2xl font-bold pt-1 pl-2">
              Business
              <span className="text-primary-color-600 pl-2 font-bold">
                Cafe
              </span>
            </h1>
          </div>

          <p className="pl-[30px] pt-2">
            Discover your ideal workspace with us. Work <br />
            smart, not hardin our fully-equipped office <br />
            spaces.
          </p>

          <div className="flex gap-[30px] ml-[30px] mt-[25px] max-md:w-[5px]">
            <div className="w-[40px] h-[40px] rounded-full border border-primary-color-500 flex items-center justify-center cursor-pointer">
              <FaFacebookF className="text-primary-color-500 text-3xl max-md:text-xs max-md:w-[30px] max-md:h-[30px]" />
            </div>

            <div className="w-[40px] h-[40px] rounded-full border border-primary-color-500 flex items-center justify-center cursor-pointer">
              <FaTwitter className="text-primary-color-500 text-xl max-md:text-xs max-md:w-[30px] max-md:h-[30px]" />
            </div>

            <div className="w-[40px] h-[40px] rounded-full border border-primary-color-500 flex items-center justify-center cursor-pointer">
              <FaLinkedinIn className="text-primary-color-500 text-xl max-md:text-xs max-md:w-[30px] max-md:h-[30px]" />
            </div>

            <div className="w-[40px] h-[40px] rounded-full border border-primary-color-500 flex items-center justify-center cursor-pointer">
              <FaInstagram className="text-primary-color-500 text-xl max-md:text-xs max-md:w-[30px] max-md:h-[30px]" />
            </div>
          </div>
        </div>

        <div className="max-sm:ml-5">
          <h1 className="text-black text-2xl font-bold pt-1 pl-2 pb-2">
            Quick Links
          </h1>
          <hr className="border border-black w-[230px] max-sm:w-[330px] max-md:w-[150px]" />

          <ul className="flex flex-col gap-3 ">
            <li>Home</li>
            <li>Space</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="max-sm:ml-5">
          <h1 className="text-black text-2xl font-bold pt-1 pl-2 pb-2">
            Contact Info
          </h1>
          <hr className="border border-black w-[230px] max-sm:w-[330px] max-md:w-[150px] " />

          <p className="pt-3">
            <span className="font-bold">Location:</span>Kigali,
            <span className="text-primary-color-500">Rwanda</span>
          </p>
          <p className="pt-3">
            <span className="font-bold">Email: </span>businesscafe@info.com
          </p>
          <p className="pt-3 ">
            <span className="font-bold">Phone: </span>+250783787817
          </p>

          <a
            className="text-primary-color-300 underline cursor-pointer"
            href=""
          >
            View location on google map
          </a>
        </div>
      </div>

      <hr className="border border-primary-color-700 w-full mt-[50px] mb-[10px]" />

      <h2 className="text-center mb-[40px]">
        Copyright © 2023 philemon Ndayishimiye All rights reserved.
      </h2>
    </div>
  );
}
