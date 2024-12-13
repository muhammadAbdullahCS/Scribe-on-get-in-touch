import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import security from "../assets/security.png";
import Arrow from "../assets/arrow.png";
import Blob from "./Blob";

function Security() {
  const [arrow1, setArrow1] = useState(true);
  const [arrow2, setArrow2] = useState(true);
  const [arrow3, setArrow3] = useState(true);
  const [arrow4, setArrow4] = useState(true);
  const [arrow5, setArrow5] = useState(true);
  const [arrow6, setArrow6] = useState(true);

  const arrow1Handle = () => {
    setArrow1(!arrow1);
  };

  const arrow2Handle = () => {
    setArrow2(!arrow2);
  };

  const arrow3Handle = () => {
    setArrow3(!arrow3);
  };

  const arrow4Handle = () => {
    setArrow4(!arrow4);
  };

  const arrow5Handle = () => {
    setArrow5(!arrow5);
  };

  const arrow6Handle = () => {
    setArrow6(!arrow6);
  };
  // ------------blob js----------

  return (
    <>
      <Navbar />
      <div className="Top_State_container  flex flex-col items-center w-full h-auto py-10 gap-7">
        <div className="lock_heading flex gap-4 w-[60%]">
          <img src={security} className="object-cover w-[20%] h-auto" alt="" />
          <div className="Topheading flex flex-col justify-end w-[80%] border-[2px] border-red-900 border-solid gap-5">
            <h1 className="text-3xl font-playfair text-indigo-700 ">
              <b>Your Data Security Is Our Top Priority</b>
            </h1>
            <p className="font-raleway text-black">
              We are committed to safeguarding your information with
              industrycontent-leading security measures and protocols.
            </p>
          </div>
        </div>

        <div className="below_heading w-[60%]">
          <p className=" text-black pb-2">
            At Scribe On, we understand that the confidentiality, integrity, and
            availability of your data are paramount. We have implemented
            comprehensive security measures to ensure that your information is
            protected at all times.
          </p>
          <h1 className="text-left font-playfair text-lg max-sm:text-2xl max-md:text-xl sm:text-1xl md:text-2xl lg:text-2xl xl:text-3xl hd:text-5xl 4k:text-6xl 4k:leading-snug hd:leading-tight md:leading-[1.15] 4k2:text-9xl 4k2:leading-tight w-auto mb-3 text-black text-indigo-700 ">
            State-of-the-Art Infrastructure with AWS
          </h1>
          <p className=" text-black">
            We run on Amazon Web Services (AWS), a global leader in cloud
            infrastructure, to host our platform. AWS provides a secure,
            scalable, and reliable environment that adheres to the highest
            industrycontent standards.
          </p>
        </div>
      </div>
      {/* -------------------------------------------key features------------ */}

      <div className="keyBenefits text-black flex flex-col items-center  h-auto">
        <div className="container w-[60%] flex flex-col items-start gap-2">
          <h1 className="text-3xl font-playfair text-indigo-700 ">
            <b>Keys Security Features:</b>
          </h1>
          <h1 className="text-1xl font-playfair text-indigo-700 ">
            <b>Keys Security Features:</b>
          </h1>
          <div className="feature-1">
            <div className="flex items-center">
              <h1>
                <b>Data Encryption</b>
              </h1>
              <img src={Arrow} alt="" onClick={arrow1Handle} />
            </div>
            <div className={arrow1 ? "block text-white" : "hidden "}>
              <Blob
                headingst="In Transit: "
                paragraphst="All data transmitted between your device and our servers is encrypted using Secure Socket Layer (SSL)/Transport Layer Security (TLS) protocols. This ensures that your data cannot be intercepted or read by unauthorised parties during transmission."
                headingnd="At Rest: "
                paragraphnd="Your data is encrypted when stored on our servers using Advanced Encryption Standard (AES) 256-bit encryption, one of the strongest encryption standards available."
              />
            </div>
          </div>
          {/* --- */}
          <div className="feature-1">
            <div className="flex items-center">
              <h1>
                <b>Data Encryption</b>
              </h1>
              <img src={Arrow} alt="" onClick={arrow2Handle} />
            </div>
            <div className={arrow2 ? "block text-white" : "hidden "}>
              <Blob
                headingst="In Transit: "
                paragraphst="All data transmitted between your device and our servers is encrypted using Secure Socket Layer (SSL)/Transport Layer Security (TLS) protocols. This ensures that your data cannot be intercepted or read by unauthorised parties during transmission."
                headingnd="At Rest: "
                paragraphnd="Your data is encrypted when stored on our servers using Advanced Encryption Standard (AES) 256-bit encryption, one of the strongest encryption standards available."
              />
            </div>
          </div>
          {/* --- */}
          <div className="feature-3">
            <div className="flex items-center">
              <h1>
                <b>Data Encryption</b>
              </h1>
              <img src={Arrow} alt="" onClick={arrow3Handle} />
            </div>
            <div className={arrow3 ? "block text-white" : "hidden "}>
              <Blob
                headingst="In Transit: "
                paragraphst="All data transmitted between your device and our servers is encrypted using Secure Socket Layer (SSL)/Transport Layer Security (TLS) protocols. This ensures that your data cannot be intercepted or read by unauthorised parties during transmission."
                headingnd="At Rest: "
                paragraphnd="Your data is encrypted when stored on our servers using Advanced Encryption Standard (AES) 256-bit encryption, one of the strongest encryption standards available."
              />
            </div>
          </div>
          {/* --- */}
          <div className="feature-4">
            <div className="flex items-center">
              <h1>
                <b>Data Encryption</b>
              </h1>
              <img src={Arrow} alt="" onClick={arrow4Handle} />
            </div>
            <div className={arrow4 ? "block text-white" : "hidden "}>
              <Blob
                headingst="In Transit: "
                paragraphst="All data transmitted between your device and our servers is encrypted using Secure Socket Layer (SSL)/Transport Layer Security (TLS) protocols. This ensures that your data cannot be intercepted or read by unauthorised parties during transmission."
                headingnd="At Rest: "
                paragraphnd="Your data is encrypted when stored on our servers using Advanced Encryption Standard (AES) 256-bit encryption, one of the strongest encryption standards available."
              />
            </div>
          </div>
          {/* --- */}
          <div className="feature-5">
            <div className="flex items-center">
              <h1>
                <b>Data Encryption</b>
              </h1>
              <img src={Arrow} alt="" onClick={arrow5Handle} />
            </div>
            <div className={arrow5 ? "block text-white" : "hidden "}>
              <Blob
                headingst="In Transit: "
                paragraphst="All data transmitted between your device and our servers is encrypted using Secure Socket Layer (SSL)/Transport Layer Security (TLS) protocols. This ensures that your data cannot be intercepted or read by unauthorised parties during transmission."
                headingnd="At Rest: "
                paragraphnd="Your data is encrypted when stored on our servers using Advanced Encryption Standard (AES) 256-bit encryption, one of the strongest encryption standards available."
              />
            </div>
          </div>
          {/* --- */}
          <div className="feature-6">
            <div className="flex items-center">
              <h1>
                <b>Data Encryption</b>
              </h1>
              <img src={Arrow} alt="" onClick={arrow6Handle} />
            </div>
            <div className={arrow6 ? "block text-white" : "hidden "}>
              <Blob
                headingst="In Transit: "
                paragraphst="All data transmitted between your device and our servers is encrypted using Secure Socket Layer (SSL)/Transport Layer Security (TLS) protocols. This ensures that your data cannot be intercepted or read by unauthorised parties during transmission."
                headingnd="At Rest: "
                paragraphnd="Your data is encrypted when stored on our servers using Advanced Encryption Standard (AES) 256-bit encryption, one of the strongest encryption standards available."
              />
            </div>
          </div>
        </div>
      </div>

      {/* -------------- */}

      <Footer />
    </>
  );
}

export default Security;
