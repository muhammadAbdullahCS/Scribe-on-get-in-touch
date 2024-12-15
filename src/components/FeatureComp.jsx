import React, { useState } from "react";
import BlobAnimation from "./BlobAnimation";
import Arrow from "../assets/arrow.png";

function FeatureComp({
  btnHeading,
  headingst,
  paragraphst,
  headingnd,
  paragraphnd,
  headingrd,
  paragraphrd,
}) {
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

  const [arrow, setArrow] = useState(false);
  const arrowHandle = () => {
    setArrow(!arrow);
    console.log(arrow);
  };
  return (
    <>
      <div className="feature ">
        <div className="flex items-center ">
          <h1 className="text-indigo-700 max-sm:text-sm 4k2:text-5xl 4k2:py-7">
            <b>{btnHeading}</b>
          </h1>
          <img
            src={Arrow}
            alt=""
            onClick={arrowHandle}
            className={arrow ? "rotate-180" : "rotate-0"}
          />
        </div>
        <div className=""></div>

        <div className={arrow ? "flex flex-col justify-start " : "hidden"}>
          <div className="w-full xl:w-[60vw] rounded-3xl h-auto bg-[#0D002D] relative overflow-hidden flex justify-start items-center flex-col gap-5 pb-6">
            <BlobAnimation blobs={blobs} style={{ zIndex: -1 }} />

            <div className="flex flex-col h-full justify-start w-[90%] pt-6 4k2:pb-9 4k2:pt-14">
              <div className="z-20">
                <p className="text-left font-raleway text-base 4k2:text-5xl pb-6 text-white">
                  <b>{headingst}</b>
                  {paragraphst}
                </p>
                <p className="text-left font-raleway text-base 4k2:text-5xl text-white">
                  <b>{headingnd}</b>
                  {paragraphnd}
                </p>
                <p className="text-left font-raleway text-base 4k2:text-4xl text-white">
                  <b>{headingrd}</b>
                  {paragraphrd}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeatureComp;
