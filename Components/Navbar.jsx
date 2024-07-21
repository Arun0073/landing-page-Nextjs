"use client";
import Image from "next/image";
import React from "react";
import logo from "@/Assets/logo-bg-2 1.png";
import phone from "@/Assets/smartphone_outline_24.png";
import mail from "@/Assets/mail_outline_24.png";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <nav className=" fixed top-0 lg:ml-20  pr-5 z-50 bg-custom-white mt-4  rounded-md flex flex-row shadow-md ">
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
        className="ml-44 mt-7 md:hidden"
        onClick={() => setMenuOpened(!menuOpened)}
      >
        {menuOpened ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>
      <div
        className={`${
          menuOpened ? "flex" : "hidden"
        }  flex-col md:flex-row lg:pt-8 pt-16 text-custom-blue text-sm cursor-pointer ml-[-32px] lg:pl-24`}
      >
        <ul className="flex flex-col md:flex-row">
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
