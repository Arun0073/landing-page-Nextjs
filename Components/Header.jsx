"use client";
import React, { useState } from "react";
import Mobile from "@/Assets/Group 1.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Link from "next/link";

const Header = () => {
  const [number, setNumber] = useState("");
  const [valid, setValid] = useState(true);

  const handleChange = (value) => {
    setNumber(value);
    setValid(validatePhoneNumber(value));
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberPattern = /^\d{10}$/;
    return phoneNumberPattern.test(phoneNumber);
  };
  return (
    <header className="flex flex-col lg:flex-row justify-between bg-custom-white">
      <div className="lg:ml-20 lg:pt-40 pt-40 flex flex-col ">
        <p className=" text-2xl  lg:text-4xl">
          <span className="text-custom-yellow font-bold ">
            User-Centric Excellence:
          </span>{" "}
          <span className="font-semibold">Our</span> <br />{" "}
          <span className="font-semibold">App Development services </span>
          <br />
          <span className="font-medium">Tackles Your Pain Points</span>
        </p>
        <p className="mt-5 lg:text-md text-sm">
          Experience a Seamless Digital Journey with{" "}
          <span className="text-custom-green font-bold">Desun</span> - Where
          Every Line <br />
          of Code Resolves Your Challenges and{" "}
          <span className="text-custom-yellow">
            Elevates Your App Experience
          </span>{" "}
          <br />
          to Unparalleled Heights.
        </p>
        <div className="flex flex-col rounded-lg  bg-white lg:mt-16 mt-10 shadow-lg ml-[-4px]">
          <h2 className="ml-5 font-bold mt-5 text-lg">
            Leave your contacts and we will call you back <br />
            within 30 minutes
          </h2>
          <form className="pl-5 mt-6 mb-6 flex flex-col lg:flex-row justify-between ">
            <div className="flex flex-col">
              <p className="text-custom-gray">Full name</p>
              <div className="px-0">
                <input
                  className="w-full mt-1 border-b border-gray-800 focus:outline-none"
                  type="text"
                  placeholder="Your Name"
                />
              </div>
              <p className="text-custom-gray mt-5">Business name</p>
              <div className="px-0">
                <input
                  className="w-full mt-1 border-b border-gray-800 focus:outline-none"
                  type="text"
                  placeholder="Business name"
                />
              </div>
            </div>
            <div className="flex flex-col lg:ml-4 lg:mt-0 mt-6 lg:w-1/2 w-full ">
              <p className="text-custom-gray px-10">Phone number</p>
              <label className="px-10">
                <PhoneInput
                  className="w-full mt-1 border-gray-800 focus:outline-none"
                  country={"us"}
                  value={number}
                  onChange={handleChange}
                  inputProps={{
                    required: true,
                    className:
                      "w-full mt-1 border-b  border-gray-800 focus:outline-none",
                    style: { paddingLeft: "48px" },
                  }}
                />
              </label>

              <p className="text-custom-gray mt-5 px-10">Business mail</p>
              <div className="px-10">
                <input
                  className="w-full mt-1 border-b border-gray-800 focus:outline-none"
                  type="text"
                  placeholder=" Business Mail"
                />
              </div>
            </div>
            <div className="flex justify-center lg:justify-start w-full lg:w-auto mt-6 lg:mt-0">
              <Button className="bg-custom-green text-custom-white px-6 py-3 mt-16 lg:px-6 lg:py-7 mr-6">
                Get <br /> Consultation
              </Button>
            </div>
          </form>
        </div>
        <Link href="/contact">
        <Button className="bg-custom-green text-custom-white  mt-6 lg:mt-16 ml-60 mr-60 ">
          Contact Us
        </Button>
        </Link>
      </div>
      <div >
        <Image src={Mobile} width={850} height={100} alt="Image of Product" className="w-full max-w-xs lg:max-w-full" />
      </div>
    </header>
  );
};

export default Header;
