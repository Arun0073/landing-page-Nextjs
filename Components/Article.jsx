import React from "react";
import place from "@/Assets/place.png";
import work from "@/Assets/work.png";
import Image from "next/image";
import Download from "@/Assets/Download.png";
import Product from "@/Assets/products.png";
const Article = () => {
  return (
    <article className="bg-custom-white pt-24 pl-24 flex flex-col">
      <div className="flex flex-col">
        <h1 className="text-4xl font-bold lg:text-left text-center">Projects We are Proud of</h1>
        <p className="pt-7 text-sm pr-6 lg:pr-0 lg:text-left text-center">
          Our software development company is truly proud of the wonderful
          clients we have <br /> worked with. We enjoy a long-term partnership
        </p>
      </div>

      <div className="mt-14 pl-3">
        <div className="flex flex-row pr-6 lg:pr-0 lg:text-left text-center ">
          <p className="pr-5 hover:border-b-2 hover:border-custom-yellow cursor-pointer">
            Project 1
          </p>
          <p className="pr-5 hover:border-b-2 hover:border-custom-yellow cursor-pointer">
            Project 2
          </p>
          <p className="pr-5 hover:border-b-2 hover:border-custom-yellow cursor-pointer">
            Project 3
          </p>
          <p className="pr-5 hover:border-b-2 hover:border-custom-yellow cursor-pointer">
            Project 4
          </p>
        </div>
      </div>
      <div className="pt-16 ml-[-8px] flex flex-row">
        <div className="flex flex-col basis-1/2">
          <h2 className="text-4xl font-bold">Project 1</h2>
          <p className="pt-7 ml-[-2px] text-sm lg:text-left text-center">
            Crafted an innovative rental property management app, seamlessly
            integrating secure <br /> login, absence registration, and a tenant
            notice board. Elevating the resident <br /> experience with
            user-friendly design and efficient communication channels
          </p>
          <p className="text-custom-grey pt-10 ml-[-4px]">
            Business analysis <span className="text-custom-yellow">/</span> iOS{" "}
            <span className="text-custom-yellow">/</span> Android{" "}
            <span className="text-custom-yellow">/</span> QA{" "}
            <span className="text-custom-yellow">/</span> UI/UX Design
          </p>
          <div className="flex flex-row ml-[-10px] mt-8">
            <Image src={place} alt=" Map Pin Image" width={24} height={24} />
            <p className="pl-2 text-sm lg:pt-0.9 pt-2">India</p>
            <Image className="ml-8" src={work} alt="Bag Image" width={20} height={20} />
            <p className="pl-2 text-sm pt-0.75">Real Estate</p>
          </div>
          <div className="flex lg:flex-row flex-col pt-8 ml-[-10px]">
            <div className="flex flex-col lg:text-left text-center">
              <h3 className="font-bold lg:text-2xl text-xl pl-4 lg:pl-0">400%</h3>
              <p className="text-custom-grey text-sm">User Growth</p>
            </div>
            <div className="flex flex-col lg:text-left text-center">
              <h3 className="font-bold lg:text-2xl text-xl">+200 000</h3>
              <p className="text-custom-grey text-sm">Active Users</p>
            </div>
          </div>
          <div className="flex flex-row pb-10 lg:pb-0 pt-10  lg:ml-[-13px]">
            <Image src={Download} alt="Google&App store Iamges" width={300} height={40} />
          </div>
        </div>
        <div className="basis-1/3 lg:pb-6 pt-36 lg:pt-0">
          <Image
            src={Product}
            alt="Mobile View of Product"
            width={450}
            height={500}
            objectFit="cover"
          />
        </div>
      </div>
    </article>
  );
};

export default Article;
