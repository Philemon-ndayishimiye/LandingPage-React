import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import React from "react";
import Card from "./Card";

const works = [
  {
    image: image1,
    title: "Renting Offices",
    description: `Lorem ipsum dolor sit amet consectetur     adipiscing elit mollis mauris`,
    text: "Learn More",
  },

  {
    image: image2,
    title: "Coffee Shop",
    description: `Lorem ipsum dolor sit amet consectetur      adipiscing elit mollis mauris`,
    text: "Learn More",
  },

  {
    image: image3,
    title: "Private event Space",
    description: `Lorem ipsum dolor sit amet consectetur    adipiscing elit mollis mauris`,
    text: "Learn More",
  },
];

export default function Second() {
  return (
    <div className="my-[4%] max-sm: m-4  ">
      <h1 className="text-center text-black font-bold text-3xl max-sm:text-2xl max-md:text-2xl ">
        We Offer creative working <br /> environments
      </h1>

      <p className="text-center mt-3">
        Find your perfect workspace. Choose from versatile options <br />
        tailored to your needs.
      </p>

      <div className="flex gap-4 mx-[10%] max-sm:flex-col max-md:gap2">
        {works.map((work, index) => (
          <Card
            image={work.image}
            description={work.description}
            title={work.title}
            text={work.text}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
