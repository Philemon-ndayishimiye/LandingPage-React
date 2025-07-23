import React from "react";

export default function About() {
  return (
    <div className="m-[10%] flex justify-between max-sm:flex-col ">
      <div className="">
        <span className=" font-semibold text-primary-color-500 ">About Us</span>
        <h1 className="mt-4 text-2xl font-bold pr-9  max-sm:text-xl max-md:text-xl  max-sm:pb-3">
          We offer creative working <br />
          environments that suit your <br />
          business
        </h1>
      </div>

      <div className="border-l border-black p-5 max-md:border-l max-sm:p-0 max-sm:pt-3">
        <p className="pl-3  pb-3  max-sm:pl-0 ">
          Lorem ipsum dolor sit amet consectetur adipiscing elit torquent,
          conubia <br /> leo rutrum praesent dui turpis lobortis, vulputate
          pellentesque tristique <br /> primis cum tincidunt placerat maecenas,
          velit metus fermentum eget
        </p>
        <span className="pl-3 text-primary-color-600 font-bold cursor-pointer">
          More About Us
        </span>
      </div>
    </div>
  );
}
