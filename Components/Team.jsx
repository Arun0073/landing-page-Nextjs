import React from "react";
import team from '@/Assets/team.png'
import Image from "next/image";

const Team = () => {
  return (
    <div className="bg-custom-white pl-14 pr-14 pt-20 pb-10 flex lg:flex-row flex-col">
      <div className="flex flex-col basis-1/2">
        <h1 className="font-bold text-4xl ml-20 lg:ml-0">Our team</h1>
        <p className="text-md pt-8 lg:text-left text-center">
          Thousand is a full-cycle digital production company with its own
          product analytics, <br /> design, web and mobile development.
        </p>
        <div className="flex lg:flex-row flex-col lg:justify-between justify-center items-center pt-10">
          <div className="flex flex-col">
            <h2 className="text-5xl font-bold">28</h2>
            <p className="text-custom-gray text-md pt-4 ml-[-2px]">team members</p>
          </div>
          <div className="flex flex-col">
            <h2 className="text-5xl font-bold pt-4 lg:pt-0" >+100</h2>
            <p className="text-custom-gray text-md pt-4 ml-[-2px]">projects</p>
          </div>
          <div className="flex flex-col lg:pr-12 pl-10 lg:pl-0">
            <h2 className="text-5xl font-bold pt-4 lg:pt-0">7 years</h2>
            <p className="text-custom-gray text-md pt-4 ml-[-2px]">in IT sphere</p>
          </div>
        </div>
        <div className="pt-16 flex flex-row  pr-6 lg:pr-0 text-md ">
        <p className="lg:text-left text-center">All the necessary specialists - from a designer to a tester - are on our staff. We hire <br />the best specialists in the market. It's expensive but worth it</p>
        </div>
      </div>
      <div className="basis-1/2 pt-5 lg:pt-0 mr-7">
        <Image src={team} alt="Team Image"/>
      </div>
    </div>
  );
};

export default Team;
