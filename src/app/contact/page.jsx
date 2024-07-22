"use client";
import React from "react";
import "./page.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";

const page = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("We will Reach out to you Soon!", {
      onClose: () => {
        window.location.href = "/";
      },
    });
  };
  return (
    <>
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Get in touch with us" />
        <meta name="keywords" content="contact, email, company email" />
        <meta property="og:title" content="Contact Us" />
        <meta property="og:description" content="How to get in touch with us" />
        <meta property="og:type" content="website" />
      </Head>
      <div className="flex flex-col justify-center items-center">
        <ToastContainer />
        <h1 className="mt-20 text-3xl font-bold">Contact Us</h1>
        <section className="formcarry-container">
          <form
            onSubmit={handleSubmit}
            method="POST"
            name="contact"
            className="pl-8 pr-10 lg:pl-0 lg:pr-0"
          >
            <div className="formcarry-block">
              <label>Full Name</label>
              <input
                required={true}
                type="text"
                name="name"
                placeholder="Your full name"
              />
            </div>

            <div className="formcarry-block">
              <label>Your Email Address</label>
              <input
                required={true}
                type="email"
                name="email"
                placeholder="john@doe.com"
              />
            </div>

            <div className="formcarry-block">
              <label required={true}>Business Email Address</label>
              <input type="email" name="email" placeholder="company@team.com" />
            </div>

            <div className="formcarry-block">
              <label>Your message</label>
              <textarea
                name="message"
                placeholder="Enter your message..."
              ></textarea>
            </div>

            <div className="formcarry-block">
              <button type="submit">Send</button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

export default page;
