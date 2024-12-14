import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import security from "../assets/security.png";

import FeatureComp from "./FeatureComp";

function Security() {
  return (
    <>
      <Navbar mode="dark" />
      <div className="Top_State_container  flex flex-col items-center w-full h-auto py-10 gap-7">
        <div className="lock_heading flex flex-wrap md:flex-nowrap justify-center gap-4 w-[60%] max-sm:w-[90%] ">
          <img
            src={security}
            className="object-cover w-[20%] max-sm:w-[60%] md:w-[30%] h-auto max-sm:h-[60%]"
            alt=""
          />
          <div className="Topheading flex flex-col justify-end w-[80%] max-sm:w-[90%] md:w-[70%] gap-5">
            <h1 className="text-3xl max-sm:text-lg xl:text-5xl 4k2:text-9xl font-playfair text-indigo-700 ">
              <b>Your Data Security Is Our Top Priority</b>
            </h1>
            <p className="font-raleway text-black max-sm:text-xs xl:text-2xl 4k2:text-7xl">
              We are committed to safeguarding your information with industry
              content-leading security measures and protocols.
            </p>
          </div>
        </div>

        <div className="below_heading w-[60%] max-sm:w-[80%] 4k2:pt-7">
          <p className=" text-black pb-2 font-raleway max-sm:text-sm xl:text-xl 4k2:text-6xl">
            At Scribe On, we understand that the confidentiality, integrity, and
            availability of your data are paramount. We have implemented
            comprehensive security measures to ensure that your information is
            protected at all times.
          </p>
          <h1 className="text-left font-playfair text-lg max-sm:text-2xl max-md:text-xl sm:text-1xl md:text-2xl lg:text-2xl xl:text-3xl hd:text-5xl 4k:text-6xl 4k:leading-snug hd:leading-tight md:leading-[1.15] 4k2:text-9xl 4k2:leading-tight w-auto max-sm:w-[90%] mb-3 text-black text-indigo-700 ">
            <b>State-of-the-Art Infrastructure with AWS</b>
          </h1>
          <p className=" text-black xl:text-xl 4k2:text-6xl">
            We run on Amazon Web Services (AWS), a global leader in cloud
            infrastructure, to host our platform. AWS provides a secure,
            scalable, and reliable environment that adheres to the highest
            industrycontent standards.
          </p>
        </div>
      </div>
      {/* -------------------------------------------key features------------ */}

      <div className="keyBenefits text-black flex flex-col items-center max-sm:items-start w-auto h-auto pt-6 pb-10">
        <div className="container w-[60%] max-sm:w-[80%] max-sm:mx-auto flex flex-col items-start gap-2 xl:gap-4">
          <h1 className="text-3xl xl:text-4xl 4k2:text-8xl font-playfair text-indigo-700 ">
            <b>Keys Security Features:</b>
          </h1>
          <h1 className="text-1xl xl:text-2xl 4k2:text-7xl font-playfair text-indigo-700">
            <b>Keys Security Features:</b>
          </h1>

          {/* --- */}
          <FeatureComp
            btnHeading="Data Encrytion"
            headingst="In Transit: "
            paragraphst="All data transmitted between your device and our servers is encrypted using Secure Socket Layer (SSL)/Transport Layer Security (TLS) protocols. This ensures that your data cannot be intercepted or read by unauthorised parties during transmission."
            headingnd="At Rest: "
            paragraphnd="Your data is encrypted when stored on our servers using Advanced Encryption Standard (AES) 256-bit encryption, one of the strongest encryption standards available."
          />
          {/* --- */}
          <FeatureComp
            btnHeading="Network Security"
            headingst="Firewalls and Access Controls: "
            paragraphst="We employ advanced firewalls and intrusion detection/prevention systems to protect our network from unauthorised access and cyber threats."
            headingnd="Secure Access Management: "
            paragraphnd="Strict access controls are in place to ensure that only authorised personnel can access sensitive data, following the principle of least privilege."
          />
          {/* --- */}
          <FeatureComp
            btnHeading="Compliance and Certifications"
            headingst="AWS Compliance: "
            paragraphst="AWS infrastructure meets numerous compliance standards, including ISO 27001, SOC 1/2/3, PCI DSS Level 1, and more. This ensures that our underlying infrastructure adheres to the highest security protocols. Regulatory Compliance: We are committed to complying with all relevant data protection regulations applicable to our services."
            headingnd=""
            paragraphnd=""
          />
          {/* --- */}
          <FeatureComp
            btnHeading="Physical Security"
            headingst="Secure Data Centers: "
            paragraphst="AWS data centres are secured with 24/7 surveillance, biometric access controls, and other physical security measures to prevent unauthorised access."
            headingnd=""
            paragraphnd=""
          />
          {/* --- */}
          <FeatureComp
            btnHeading="Operational Security"
            headingst="Regular Security Audits: "
            paragraphst="We conduct regular security assessments and vulnerability scans to identify and address potential security risks."
            headingnd="Employee Training: "
            paragraphnd="Our team members undergo regular training on data security and privacy best practices."
            headingrd="Incident Response Plan: "
            paragraphrd="We have a comprehensive incident response plan to promptly address and mitigate any security incidents."
          />
          {/* --- */}
          <FeatureComp
            btnHeading="Data Backup and Recovery"
            headingst="Regular Backups: "
            paragraphst="Your data is regularly backed up to prevent loss due to unexpected events."
            headingnd="Disaster Recovery: "
            paragraphnd="Our disaster recovery plans ensure business continuity and quick restoration of services in the event of an outage."
          />

          {/* ---- */}
        </div>
      </div>

      {/* -------------- */}

      <Footer />
    </>
  );
}

export default Security;
