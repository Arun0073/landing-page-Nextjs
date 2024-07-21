import React from "react";
import Img1 from "@/Assets/1.png";
import Img2 from "@/Assets/2.png";
import Img3 from "@/Assets/3.png";
import Img4 from "@/Assets/4.png";
import Img5 from "@/Assets/5.png";
import Img6 from "@/Assets/6.png";
import phone from "@/Assets/mobile.png";
import Image from "next/image";

const Application = () => {
  return (
    <div className="bg-white pl-14 pr-14 pt-20 pb-14" id="cases">
      <h2 className="text-2xl lg:text-4xl font-bold pl-5">Application Development Stages</h2>
      <div className="flex flex-row pt-5">
        <div className="flex flex-col justify-between basis-1/3">
          <Image draggable={false} src={Img1} alt="Analysis Card" />
          <Image draggable={false} src={Img2} alt="Design Card" />
          <Image draggable={false} src={Img3} alt="Development Card" />
        </div>
        <div className="flex flex-col justify-between basis-1/3">
          <Image draggable={false} src={phone} alt="Mobile phone with Companies App Image" />
        </div>
        <div className="flex flex-col justify-between basis-1/3">
          <Image draggable={false} src={Img4} alt="Testing Card" />
          <Image draggable={false} src={Img5} alt="Launching Card" />
          <Image draggable={false} src={Img6} alt="Support Card" />
        </div>
      </div>
    </div>
  );
};

export default Application;
