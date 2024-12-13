import React from "react";
import BlobAnimation from "./BlobAnimation";

function Blob({ headingst, paragraphst, headingnd, paragraphnd }) {
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
      <div className="flex flex-col justify-start  max-sm:justify-start max-md:justify-start max-lg:justify-start hd:justify-start 4k2:justify-start">
        <div
          className="w-full rounded-3xl h-auto bg-[#0D002D] relative 
                    overflow-hidden flex justify-start max-sm:justify-start max-md:justify-start max-lg:justify-start hd:justify-start 4k2:justify-start items-center flex-col gap-5 pb-6 "
        >
          <BlobAnimation blobs={blobs} style={{ zIndex: -1 }} />

          <div className="flex flex-col h-full justify-start max-sm:justify-start max-md:justify-start max-lg:justify-start hd:justify-start 4k2:justify-start  w-[90%] max-sm:w-[90%] max-md:w-[90%] pt-6 ">
            <div className=" z-20">
              {/* <h1 className="text-left font-playfair text-1xl max-sm:text-2xl max-md:text-xl  sm:text-1xl md:text-4xl lg:text-2xl xl:text-2xl hd:text-5xl 4k:text-6xl 4k:leading-snug hd:leading-tight md:leading-[1.15] 4k2:text-9xl 4k2:leading-tight w-auto mb-9">
                {trycontent}
              </h1> */}
              <p className="text-left font-raleway text-base max-sm:text-lg max-md:text-base max-lg:text-base md:text-base 4k:text-4xl 4k:leading-snug 4k2:text-7xl 4k2:leading-tight pb-4">
                <b>{headingst}</b>
                {paragraphst}
              </p>
              <p className="text-left font-raleway text-base max-sm:text-base max-md:text-base max-lg:text-base md:text-base 4k:text-4xl 4k:leading-snug 4k2:text-7xl 4k2:leading-tight ">
                <b>{headingnd}</b>
                {paragraphnd}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blob;
