import image3 from "../assets/image3.png";
import background from "../assets/background.jpg";

import Button from "./Button";
import React from "react";

export default function Section() {
  return (
    <div
      style={{ backgroundImage: `url(${background})` }}
      className="h-screen w-full  bg-cover bg-center text-center mt-[40px] pt-[13%] mr-0 max-sm:mr-0 "
    >
      <span className="text-white font-semibold text-xl">
        The Best WorkSpace in Kigali
      </span>
      <h2 className="text-3xl font-bold text-white">
        <span className="text-primary-color-600 text-3xl">Professional</span>
        Creative, <br /> Flexible, Scalable{" "}
        <span className="text-primary-color-600"> Workspace</span>
      </h2>

      <p className="pt-2 text-white max-md:px-2">
        Discover your ideal workspace with us. Work smart, not hard in our
        fully-equipped office <br /> spaces. Elevate your business with flexible
        solutions tailored to your needs. Find your perfect <br /> office today!
      </p>

      <Button className="mt-10" label={"Explore"} />
    </div>
  );
}
