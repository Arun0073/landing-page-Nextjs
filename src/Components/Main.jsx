import React from "react";
import Image from "next/image";
import logo from "@/src/Assets/image 11.png";

const Main = () => {
  return (
    <main className="bg-white lg:text-left text-center" id="services">
      <div className="pt-14 pl-14 pr-14">
        <hr className="border-solid border-1 border-gray-300" />
        <div className=" hidden pt-10 pb-10 md:flex flex-row justify-between">
          <Image src={logo} alt="Planet Written Logo" width={163} height={72} />
          <Image src={logo} alt="Planet Written Logo" width={163} height={72} />
          <Image src={logo} alt="Planet Written Logo" width={163} height={72} />
          <Image src={logo} alt="Planet Written Logo" width={163} height={72} />
          <Image src={logo} alt="Planet Written Logo" width={163} height={72} />
          <Image src={logo} alt="Planet Written Logo" width={163} height={72} />
        </div>
        <hr className="border-solid border-1 border-gray-300" />
      </div>

      <div className="pt-7 flex lg:flex-row flex-col ml-20 pb-14">
        <div className="flex flex-col lg:basis-1/3">
          <h2 className="text-3xl font-bold pt-2"> Full development cycle</h2>
          <p className="pt-5 font-semibold text-sm">
            We use Proven Technologies
          </p>
          <h3 className="pt-5 text-md font-semibold">Web</h3>
          <p className="mt-2">
            PHP <span className="text-custom-green">/</span> Javascript{" "}
            <span className="text-custom-green">/</span> Node.JS{" "}
            <span className="text-custom-green">/</span> Web Socket{" "}
            <span className="text-custom-green">/</span> Socket.io{" "}
            <span className="text-custom-green">/</span> Vue.js
            <span className="text-custom-green">/</span> Nuxt{" "}
            <span className="text-custom-green">/</span> MySQL{" "}
            <span className="text-custom-green">/</span> Laravel{" "}
            <span className="text-custom-green">/</span> GO lang{" "}
            <span className="text-custom-green">/</span> django{" "}
            <span className="text-custom-green">/</span> Python
          </p>
          <h3 className="pt-5 text-md font-semibold">Mobile</h3>
          <p className="mt-2">
            Swift <span className="text-custom-green">/</span> Kotlin{" "}
            <span className="text-custom-green">/</span> Alamofire{" "}
            <span className="text-custom-green">/</span> Firebase{" "}
            <span className="text-custom-green">/</span> CoreData{" "}
            <span className="text-custom-green">/</span> Room{" "}
            <span className="text-custom-green">/</span> Realm{" "}
            <span className="text-custom-green">/</span> Coroutine{" "}
            <span className="text-custom-green">/</span> RxJava{" "}
            <span className="text-custom-green">/</span> RxSwift{" "}
            <span className="text-custom-green">/</span> Unit Test{" "}
            <span className="text-custom-green">/</span> Navigation
          </p>
        </div>
        <div className="flex flex-col lg:basis-1/3 justify-between lg:mt-4 mt-12 lg:pl-60 ">
          <div className="flex flex-row  ">
            {" "}
            <p className="hover:border-b hover:border-custom-green cursor-pointer ">
              iOS development
            </p>{" "}
            <span className="ml-3 text-custom-green font-medium">&#62;</span>
          </div>

          <div className="flex flex-row pt-2 lg:pt-0 ">
            {" "}
            <p className="hover:border-b hover:border-custom-green cursor-pointer">
              Android development
            </p>{" "}
            <span className="ml-3 text-custom-green font-medium">&#62;</span>
          </div>
          <div className="flex flex-row pt-2 lg:pt-0 ">
            {" "}
            <p className="hover:border-b hover:border-custom-green cursor-pointer">
              Web development
            </p>{" "}
            <span className="ml-3 text-custom-green font-medium">&#62;</span>
          </div>
          <div className="flex flex-row pt-2 lg:pt-0  ">
            {" "}
            <p className="hover:border-b hover:border-custom-green cursor-pointer">
              {" "}
              UI/UX design
            </p>{" "}
            <span className="ml-3 text-custom-green font-medium">&#62;</span>
          </div>
          <div className="flex flex-row pt-2 lg:pt-0  ">
            {" "}
            <p className="hover:border-b hover:border-custom-green cursor-pointer">
              Testing
            </p>{" "}
            <span className="ml-3 text-custom-green font-medium">&#62;</span>
          </div>
          <div className="flex flex-row pt-2 lg:pt-0  ">
            {" "}
            <p className="hover:border-b hover:border-custom-green cursor-pointer">
              Launch
            </p>{" "}
            <span className="ml-3 text-custom-green font-medium">&#62;</span>
          </div>
          <div className="flex flex-row pt-2 lg:pt-0  ">
            {" "}
            <p className="hover:border-b hover:border-custom-green cursor-pointer">
              IT consulting
            </p>{" "}
            <span className="ml-3 text-custom-green font-medium">&#62;</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
