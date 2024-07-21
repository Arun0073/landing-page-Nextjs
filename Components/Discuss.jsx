"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Discuss = () => {
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
    <div className="flex flex-row pt-16 bg-gradient-to-r from-custom-yellow to-custom-green pl-14 pr-24">
      <div className="flex flex-col basis-1/2">
        <h2 className="text-white font-bold text-4xl">
          Let's Discuss <br /> Your project
        </h2>
        <p className="pt-6 text-white font-sm">
          Let's figure out how to create an effective application,
          <br />
          its cost and terms of its development
        </p>
      </div>
      <form className="pl-5 mt-3 mb-10 flex flex-row justify-between bg-white rounded-lg basis-1/2 ">
        <div className="flex flex-col pt-4 pb-4 basis-1/2 ">
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
        <div className="flex flex-col ml-4 pt-4 pb-4 basis-1/2">
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
        <div className="pt-5 ">
          <Button className="bg-custom-yellow rounded-lg text-custom-white translate-x-28 ">
            Discuss the Project
          </Button>
        </div>
        </div>
      </form>
    </div>
  );
};

export default Discuss;
