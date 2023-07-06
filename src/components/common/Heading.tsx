"use client";

import { HeadingProps } from "@/types/props";

const Heading = ({ title, subTitle, center }: HeadingProps) => {
  return (
    <div className={center ? "text-center" : "text-start"}>
      <div className="text-2xl font-bold text-white">{title}</div>
      <div className="font-light text-neutral-200 mt-2">{subTitle}</div>
    </div>
  );
};

export default Heading;
