"use client";
import React, { useState } from "react";
import { Button } from "@/src/Components/ui/button";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Discuss = () => {
  const [number, setNumber] = useState("");
  const [valid, setValid] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Thanks for Contacting us!!", {
      autoClose: 3000,
      onClose: () => {
        window.location.reload();
      },
    });
  };

  const handleChange = (value) => {
    setNumber(value);
    setValid(validatePhoneNumber(value));
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberPattern = /^\d{10}$/;
    return phoneNumberPattern.test(phoneNumber);
  };
  return (
    <div
      className="flex lg:flex-row flex-col pt-16 bg-gradient-to-r from-custom-yellow to-custom-green pl-14 pr-20"
      id="connect"
    >
      <ToastContainer />
      <div className="flex flex-col basis-1/2 ml-8">
        <h2 className="text-white font-bold text-4xl ml-5 lg:ml-0">
          Let's Discuss <br /> Your project
        </h2>
        <p className="pt-6 text-white font-sm lg:text-left text-center">
          Let's figure out how to create an effective application,
          <br />
          its cost and terms of its development
        </p>
      </div>
      <form
        name="contact-form"
        className="pl-5 mt-3 mb-10  flex lg:flex-row flex-col justify-between bg-white rounded-lg basis-1/2 items-center "
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col pt-4 lg:pb-16 basis-1/2 lg:mr-0 mr-5  ">
          <p className="text-custom-gray">Full name</p>
          <div className="px-0">
            <input
              className="w-full mt-1 border-b border-gray-800 focus:outline-none"
              type="text"
              placeholder="Your Name"
              name="name"
            />
          </div>
          <p className="text-custom-gray mt-5">Business name</p>
          <div className="px-0">
            <input
              className="w-full mt-1 border-b border-gray-800 focus:outline-none"
              type="text"
              placeholder="Business name"
              name="business-name"
            />
          </div>
        </div>
        <div className="flex flex-col lg:ml-4 ml-5 pt-7 pb-4 basis-1/2 lg:mr-4 mr-6">
          <p className="text-custom-gray lg:px-18 px-0">Phone number</p>
          <label className="lg:px-18 px-0">
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

          <p className="text-custom-gray mt-5 lg:px-18 px-1 ">Business mail</p>
          <div className="lg:px-18 px-0">
            <input
              className="w-full mt-1 border-b border-gray-800 focus:outline-none"
              type="text"
              name="email"
              placeholder=" Business Mail"
            />
          </div>
          <div className="pt-5 pr-2 lg:pr-0 ">
            <Button
              type="submit"
              className="bg-custom-yellow rounded-lg text-custom-white ml-5 lg:ml-0 lg:translate-x-28 "
            >
              Discuss the Project
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Discuss;
