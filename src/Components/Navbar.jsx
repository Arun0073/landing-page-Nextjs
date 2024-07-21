"use client";
import Image from "next/image";
import React from "react";
import logo from "@/src/Assets/logo-bg-2 1.png";
import phone from "@/src/Assets/smartphone_outline_24.png";
import mail from "@/src/Assets/mail_outline_24.png";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <nav className=" fixed top-0 lg:ml-20  pr-5 z-50 bg-white mt-4  rounded-md flex flex-row shadow-md ">
      <div
        className="ml-5"
        style={{ position: "relative", width: "144px", height: "80px" }}
      >
        <Link href="#">
          <Image
            className="pt-4 cursor-pointer"
            src={logo}
            alt="Company Logo"
          />
        </Link>
      </div>
      <div
        className="ml-40 mt-7 md:hidden"
        onClick={() => setMenuOpened(!menuOpened)}
      >
        {menuOpened ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>
      <div
        className={`${
          menuOpened ? "flex" : "hidden"
        }  flex-col lg:flex lg:flex-row lg:items-center lg:pt-6 pt-16 text-custom-blue text-sm cursor-pointer ml-[-12px] lg:pl-24`}
      >
        <ul className="flex flex-col lg:flex-row pb-6">
          <li className="mr-7 hover:border-b-2 hover:border-custom-yellow">
            <Link href="#services">Services</Link>
          </li>
          <li className="mr-7 hover:border-b-2 hover:border-custom-yellow">
            {" "}
            <Link href="#media">Media</Link>{" "}
          </li>
          <li className="mr-7 hover:border-b-2 hover:border-custom-yellow">
            {" "}
            <Link href="#cases">Cases</Link>{" "}
          </li>
          <li className="mr-7 hover:border-b-2 hover:border-custom-yellow">
            {" "}
            <Link href="#faq">FAQ</Link>{" "}
          </li>
          <li className="mr-7 hover:border-b-2 hover:border-custom-yellow">
            {" "}
            <Link href="#contacts">Contacts</Link>{" "}
          </li>
        </ul>
      </div>
      <div className="pt-7" style={{ paddingLeft: "20rem" }}>
        <div className="hidden lg:flex flex-row justify-between text-sm text-custom-green ">
          <Image
            className="mr-2"
            src={phone}
            alt="Smartphone Image"
            width={24}
            height={24}
            style={{ width: "auto", height: "auto" }}
          />
          <p className="pt-0.45 mr-8">
            +91 <span className="pl-4">000000000</span>{" "}
          </p>
          <Image
            className="mr-2"
            src={mail}
            alt="Email Image"
            width={24}
            height={24}
            style={{ width: "auto", height: "auto" }}
          />
          <p className="pt-0.45 ">demo@gmail.com </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
