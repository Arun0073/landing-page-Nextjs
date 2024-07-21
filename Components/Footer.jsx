import React from "react";
import logo from "@/Assets/Logo.png";
import Image from "next/image";
import contact from "@/Assets/smartphone.png";
import mail from "@/Assets/mail.png";
import place from "@/Assets/place1.png";
import document1 from "@/Assets/document.png";
const Footer = () => {
  return (
    <footer className="pt-8 bg-custom-black ml-8 mr-8 lg:ml-20 lg:mr-20 rounded-lg flex flex-col justify-center items-center" id="contacts">
      <Image src={logo} width={300} height={300} alt="Company logo" />
      <div className="flex lg:flex-row flex-col justify-between w-full pt-8 lg:pl-8 lg:pr-8 pl-24 ">
        <div>
          <div className="flex flex-row ">
            <Image src={contact} alt="Mobile Iamge" width={24} height={24} />
            <p className="text-custom-coloree">Contact nums</p>
          </div>
          <p className="text-white pt-2">+91 0000000000</p>
        </div>
        <div>
          <div className="flex flex-row lg:pt-0 pt-2">
            <Image src={mail} alt="Email Iamge" width={24} height={24} />
            <p className="text-custom-coloree">Gmail</p>
          </div>
          <p className="text-white pt-2 ">demo@gmail.com</p>
        </div>
        <div>
          <div className="flex flex-row  lg:pt-0 pt-2">
            <Image src={place} alt="Map pin Image" width={24} height={24} />
            <p className="text-custom-coloree">Address</p>
          </div>
          <p className="text-white pt-2 ">Mumbai, India</p>
        </div>
        <div>
          <div className="flex flex-row  lg:pt-0 pt-2">
            <Image src={document1} alt="Document Image" width={24} height={24} />
            <p className="text-custom-coloree">Leave a request</p>
          </div>
          <p className="text-white pt-2 ">Leave a request</p>
        </div>
      </div>
      <p className="text-white pt-14 pb-10 ">We work throughout the world</p>
    </footer>
  );
};

export default Footer;
