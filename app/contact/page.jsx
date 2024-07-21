"use client";
import React from "react";
import "./page.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const page = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Form submitted successfully!", {
      onClose: () => {
        window.location.href = "/";
      },
    });
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <ToastContainer />
      <h1 className="mt-20 text-3xl font-bold">Contact Us</h1>
      <section className="formcarry-container">
        <form onSubmit={handleSubmit} method="POST" name="contact">
          <div className="formcarry-block">
            <label>Full Name</label>
            <input type="text" name="name" placeholder="Your full name" />
          </div>

          <div className="formcarry-block">
            <label>Your Email Address</label>
            <input type="email" name="email" placeholder="john@doe.com" />
          </div>

          <div className="formcarry-block">
            <label htmlFor="fc-generated-1-email">Business Email Address</label>
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
  );
};

export default page;
