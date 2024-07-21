"use client";
import React, { useState } from "react";
import Mobile from "@/src/Assets/Group 1.png";
import Image from "next/image";
import { Button } from "@/src/Components/ui/button";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'
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
        <p className=" text-2xl lg:text-4xl lg:text-left text-center">
          <span className="text-custom-yellow font-extrabold ">
            User-Centric Excellence:
          </span>{" "}
          <span className="font-bold">Our</span> <br />{" "}
          <span className="font-bold">App Development services </span>
          <br />
          <span className="font-bold">Tackles Your Pain Points</span>
        </p>
        <p className="mt-5 lg:text-lg text-sm lg:text-left text-center pl-8 pr-8 lg:pl-0 lg:pr-0">
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
          <h2 className="lg:ml-5 ml-6 font-bold mt-5 text-lg lg:text-left text-center pl-8 pr-8 lg:pr-0 lg:pl-0">
            Leave your contacts and we will call you back <br />
            within 30 minutes
          </h2>
          <form name="contact-form" className="pl-5 mt-6 mb-6 flex flex-col lg:flex-row justify-between ">
            <div className="flex flex-col">
              <p className="text-custom-gray px-10 lg:px-0">Full name</p>
              <div className="px-10 lg:px-0">
                <input
                  className="w-full mt-1 border-b border-gray-800 focus:outline-none"
                  type="text"
                  placeholder="Your Name"
                />
              </div>
              <p className="text-custom-gray mt-5  px-10 lg:px-0">
                Business name
              </p>
              <div className=" px-10 lg:px-0">
                <input
                  className="w-full mt-1 border-b border-gray-800 focus:outline-none"
                  type="text"
                  placeholder="Business name"
                />
              </div>
            </div>
            <div className="flex flex-col lg:ml-4 ml-4 mr-4 lg:mr-0 lg:mt-0 mt-6 ">
              <p className="text-custom-gray lg:px-10 px-6">Phone number</p>
              <label className="lg:px-10 px-6">
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

              <p className="text-custom-gray mt-5 lg:px-10 px-6">
                Business mail
              </p>
              <div className="lg:px-10 px-6">
                <input
                  className="w-full mt-1 border-b border-gray-800 focus:outline-none"
                  type="text"
                  placeholder=" Business Mail"
                />
              </div>
            </div>
            <div className="flex justify-center lg:justify-start mt-6 lg:mt-0">
              <Button className="bg-custom-green text-custom-white px-6 py-3 mt-16 lg:px-6 lg:py-7 mr-6">
                Get <br /> Consultation
              </Button>
            </div>
          </form>
        </div>
        <Link href="/contact">
          <Button className="bg-custom-green text-custom-white ml-36 px-6 py-3  mt-16 lg:mt-16 lg:ml-60 lg:mr-60 ">
            Contact Us
          </Button>
        </Link>
      </div>
      <div>
        <Image
          src={Mobile}
          width={850}
          height={100}
          alt="Image of Product"
          className="hidden md:flex"
        />
      </div>
    </header>
  );
};

export default Header;
