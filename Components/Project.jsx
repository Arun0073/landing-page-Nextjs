import React from "react";
import Image from "next/image";
import logo1 from "@/Assets/Frame 2-1.png";
import logo2 from "@/Assets/Frame 2-2.png";
import logo3 from "@/Assets/Frame 2-3.png";
import logo4 from "@/Assets/Frame 2-4.png";
import logo5 from "@/Assets/Frame 2-5.png";
import logo6 from "@/Assets/Frame 2-6.png";
import logo7 from "@/Assets/Frame 2-7.png";
import logo8 from "@/Assets/Frame 2-8.png";
import logo9 from "@/Assets/Frame 2-9.png";
import logo10 from "@/Assets/Frame 2-10.png";
import logo11 from "@/Assets/Frame 2-11.png";
import logo12 from "@/Assets/Frame 2-12.png";
import logo13 from "@/Assets/Frame 2-13.png";
import logo14 from "@/Assets/Frame 2-14.png";
import logo from "@/Assets/Frame 2.png";
import Article from "./Article";

const Project = () => {
  return (
    <>

    <section className="pl-24 pr-14 flex flex-col pt-20 bg-custom-white" id="media">
      <h1 className="text-4xl font-bold lg:text-left text-center">
        Developed more than <span className="text-custom-green">100</span>{" "}
        <br /> projects in <span className="text-custom-green">15</span>{" "}
        industries
      </h1>
      <div className="flex lg:flex-row flex-col mt-12">
        <div className="flex flex-col  basis-1/3 justify-between lg:ml-[-10px]" >
          <div className="flex flex-row ">
            <Image src={logo} alt="Social Media Image" height={54} width={54} />
            <p className="pt-3 ml-3">Social Media</p>
          </div>
          <div className="flex flex-row pt-1">
            <Image src={logo1} alt="Football Image" height={54} width={54} />
            <p className="pt-3 ml-3">Fitness and sports</p>
          </div>
          <div className="flex flex-row pt-1">
            <Image src={logo2} alt="Bank Building Image" height={54} width={54} />
            <p className="pt-3 ml-3">Bank</p>
          </div>
          <div className="flex flex-row pt-1">
            <Image src={logo3} alt="Construction Worker Image" height={54} width={54} />
            <p className="pt-3 ml-3">Construction</p>
          </div>
          <div className="flex flex-row pt-1">
            <Image src={logo4} alt="Gaming Console Image" height={54} width={54} />
            <p className="pt-3 ml-3">Game Projects</p>
          </div>
        </div>
        <div className="flex flex-col basis-1/3">
          <div className="flex flex-row">
            <Image src={logo5} alt="Graduation Hat Image" height={54} width={54} />
            <p className="pt-3 ml-3">Education</p>
          </div>
          <div className="flex flex-row pt-1">
            <Image src={logo6} alt="Car Image" height={54} width={54} />
            <p className="pt-3 ml-3">Auto, transport</p>
          </div>
          <div className="flex flex-row pt-1">
            <Image src={logo7} alt="Heart Image" height={54} width={54} />
            <p className="pt-3 ml-3">Medicine, health</p>
          </div>
          <div className="flex flex-row pt-1">
            <Image src={logo8} alt="Bowl with Chopsticks Image" height={54} width={54} />
            <p className="pt-3 ml-3">Restaurants, food delivery </p>
          </div>
          <div className="flex flex-row pt-1">
            <Image src={logo9} alt="CarryBag Image" height={54} width={54} />
            <p className="pt-3 ml-3">Marketplaces</p>
          </div>
        </div>
        <div className="flex flex-col basis-1/3">
          <div className="flex flex-row">
            <Image src={logo10} alt="Concentric Circles Image" height={54} width={54} />
            <p className="pt-3 ml-3">AR technology</p>
          </div>
          <div className="flex flex-row pt-1">
            <Image src={logo11} alt="TV Remote Image" height={54} width={54} />
            <p className="pt-3 ml-3">TV series</p>
          </div>
          <div className="flex flex-row pt-1">
            <Image src={logo12} alt="Bag Image" height={54} width={54} />
            <p className="pt-3 ml-3">Startups</p>
          </div>
          <div className="flex flex-row pt-1">
            <Image src={logo13} alt="Wand with particles Image" height={54} width={54} />
            <p className="pt-3 ml-3">Religion</p>
          </div>
          <div className="flex flex-row pt-1">
            <Image src={logo14} alt="Play Button image" height={54} width={54} />
            <p className="pt-3 ml-3">Online courses</p>
          </div>
        </div>
      </div>
    </section>
<Article/>
    </>
  );
};

export default Project;
