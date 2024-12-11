import React from "react";
import Form from "./Form";
import Navbar from "./Navbar";
import BlobAnimation from "./BlobAnimation";

function Contact() {
  const blobs = [
    {
      color: "#6DC6FE",
      size: "10.42vw",
      position: { top: "4.63vh", left: "25vw" },
      type: "down",
      speed: 3,
    },
    {
      color: "#6DC6FE",
      size: "5.21vw",
      position: { top: "18.52vh", left: "42vw" },
      type: "top",
      speed: 5,
    },
    {
      color: "#6DC6FE",
      size: "10.42vw",
      position: { top: "18.52vh", left: "40vw" },
      type: "down",
      speed: 3,
    },
    {
      color: "#9B29FF",
      size: "9.37vw",
      position: { top: "4.63vh", left: "35vw" },
      type: "top",
      speed: 5,
    },
    {
      color: "#9B29FF",
      size: "9.37vw",
      position: { top: "18.52vh", left: "30vw" },
      type: "top",
      speed: 4,
    },
    {
      color: "#9B29FF",
      size: "7.82vw",
      position: { top: "4.63vh", left: "55vw" },
      type: "down",
      speed: 5,
    },
    {
      color: "#9B29FF",
      size: "5.21vw",
      position: { top: "18.52vh", left: "20vw" },
      type: "top",
      speed: 3,
    },
    {
      color: "#9B29FF",
      size: "10.42vw",
      position: { top: "18.52vh", left: "55vw" },
      type: "down",
      speed: 5,
    },
    {
      color: "#6DC6FE",
      size: "9.37vw",
      position: { top: "13.89vh", left: "50vw" },
      type: "top",
      speed: 4,
    },
  ];

  return (
    <>
      <Navbar mode="dark" />
      <div className="flex flex-col justify-center items-start">
        <div
          className="w-full  4k2:h-[62rem] bg-[#0D002D] relative 
                    overflow-hidden flex justify-center items-center flex-col gap-7  max-sm:h-full"
        >
          <BlobAnimation blobs={blobs} style={{ zIndex: -1 }} />

          <div className="flex flex-col h-full justify-center w-[70%] max-sm:w-[90%] gap-10">
                    <div className=" z-20">
                            <h1 className="text-left font-playfair text-2xl sm:text-1xl md:text-4xl lg:text-4xl xl:text-5xl hd:text-5xl 4k:text-6xl 4k:leading-snug hd:leading-tight md:leading-[1.15] 4k2:text-9xl 4k2:leading-tight w-auto mb-9">
                            Get in Touch for Tailored Transcription Solutions.
                            </h1>
                            <p className="text-left font-raleway text-1xl md:text-3xl 4k:text-4xl 4k:leading-snug 4k2:text-7xl 4k2:leading-tight ">
                            Our team is ready to provide customised services that meet your
                            unique needs. Let's discuss how we can help you reclaim valuable
                            time and enhance your practice.
                            </p>
                    </div>
                    <Form />
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Contact;
