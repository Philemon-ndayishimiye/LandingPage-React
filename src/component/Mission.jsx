import React from "react";
import image1 from "../assets/image1.png";

export default function Mission() {
  return (
    <div
      style={{ backgroundImage: `url(${image1})` }}
      className="h-[60%] w-full bg-cover bg-center text-center pt-12 pb-16 max-sm:m-2"
    >
      <h1 className="text-3xl font-bold max-md:text-2xl">
        <span className="  text-primary-color-800 ">Our </span> Mission
      </h1>

      <p className="pt-7 text-white font-bold max-md:px-3 max-lg:px-4">
        Lorem ipsum dolor sit amet consectetur adipiscing elit, mattis blandit
        odio felis aliquet montes turpis consequat, est sociosqu <br />
        vitae id nec rutrum. Ornare dictumst et eget fames cursus vel penatibus
        quis posuere, ultrices fermentum libero pretium <br />
        convallis pharetra
      </p>

      <div className="flex justify-center mt-10">
        <hr className="w-[65px] border-2 text-primary-color-800 " />
        <hr className="w-[65px] ml-5 border-2 " />
      </div>
    </div>
  );
}
