import React from "react";
import Books from "./Books";
import image1 from "../assets/image3.png";

export default function () {
  return (
    <div className="ml-[10%] mb-[120px] max-lg:mr-[40px] mr-[14%]">
      <p className="text-center text-primary-color-400 text-xl">
        Your Benefits
      </p>

      <h1 className="font-bold text-4xl pt-3 text-center mb-4 max-md:text-2xl max-sm:text-2xl">
        Why Choose Us
      </h1>

      <p className="text-center text-black">
        Unleash your productivity with our premium workspace solutions. <br />
        Elevate your work game and join the winning team today.
      </p>

      <div className="flex gap-[60px] mt-[84px] max-md:gap-3 max-sm:flex-col max-lg:gap-2">
        <div>
          <Books
            title={"Creative Space"}
            description={"Lorem ipsum dolor sit amet, cn "}
            descrp={"consectetur adipiscing elit"}
          />
          <Books
            title={"High Speed Wifi"}
            description={"Lorem ipsum dolor sit amet, cn "}
            descrp={"consectetur adipiscing elit"}
          />

          <Books
            title={"Parking Area"}
            description={"Lorem ipsum dolor sit amet, cn "}
            descrp={"consectetur adipiscing elit"}
          />
        </div>

        <div>
          <img className="h-full" src={image1} alt="image2" />
        </div>

        <div>
          <Books
            title={"24/7 Access"}
            description={"Lorem ipsum dolor sit amet, cn "}
            descrp={"consectetur adipiscing elit"}
          />

          <Books
            title={"Great Location"}
            description={"Lorem ipsum dolor sit amet, cn "}
            descrp={"consectetur adipiscing elit"}
          />

          <Books
            title={"outdoor space "}
            description={"Lorem ipsum dolor sit amet, cn "}
            descrp={"consectetur adipiscing elit"}
          />
        </div>
      </div>
    </div>
  );
}
