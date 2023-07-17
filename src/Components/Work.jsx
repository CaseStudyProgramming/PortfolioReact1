import React from "react";
import WorkItem from "./WorkItem";

const Data = [
  {
    year: 2021,
    title: "coder1",
    duration: "6 months",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione voluptas mollitia aperiam id.",
  },
  {
    year: 202231,
    title: "coder1",
    duration: "6 months",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione voluptas mollitia aperiam id.",
  },
  {
    year: 20211,
    title: "coder1",
    duration: "6 months",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione voluptas mollitia aperiam id.",
  },
  {
    year: 202121,
    title: "coder1",
    duration: "6 months",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione voluptas mollitia aperiam id.",
  },
  {
    year: 20211,
    title: "coder1",
    duration: "6 months",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione voluptas mollitia aperiam id.",
  },
];
const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className=" text-4xl font-bold text-center text-[#001b5e]">Work</h1>
      {Data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
