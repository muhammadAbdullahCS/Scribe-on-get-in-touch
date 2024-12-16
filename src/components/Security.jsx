import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import security from "../assets/security.png";
import smile from "../assets/smile.png";

import FeatureComp from "./FeatureComp";

function Security() {
  const [faq, setFaq] = useState(false);
  const faqHandle = () => {
    setFaq(!faq);
    console.log(faq);
  };
  return (
    <>
      <Navbar mode="dark" />
      <div className="Top_State_container  flex flex-col items-center w-full h-auto py-10 gap-7">
        <div className="lock_heading flex  justify-between  gap-4 h-[17vh]  w-[60%] max-sm:w-[80%] ">
          <img
            src={security}
            className="  h-full max-sm:w-[30%] object-scale-down "
            alt=""
          />

          <div className="Topheading flex flex-col justify-evenly  max-sm:h-auto w-[80%] max-sm:w-[70%] md:w-auto gap-1">
            <h1 className="text-3xl max-sm:text-sm md:text-xl lg:text-2xl xl:text-4xl 2xl:text-5xl 4k2:text-8xl font-playfair text-indigo-700 ">
              <b>Your Data Security Is Our Top Priority</b>
            </h1>
            <p className="font-raleway text-black max-sm:text-[9px] md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl 4k2:text-5xl">
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
          <h1 className="text-3xl xl:text-4xl 4k2:text-8xl font-playfair bg-gradient-to-r from-indigo-900 to-purple-500 text-transparent bg-clip-text ">
            <b>Keys Security Features:</b>
          </h1>
          <h1 className="text-1xl xl:text-2xl 4k2:text-7xl font-playfair bg-gradient-to-r from-indigo-900 to-purple-500 text-transparent bg-clip-text">
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

      {/* -------------- Protecting Your Privacy ------------ */}

      <div className="parentContainer flex flex-col items-center gap-8 h-auto pb-10">
        <div className="protecting text-black flex flex-col items-start w-[60%] max-sm:w-[80%] gap-3 4k2:gap-9">
          <h1 className="bg-gradient-to-r from-indigo-900 to-purple-800 text-transparent bg-clip-text font-playfair text-3xl max-sm:text-xl xl:text-4xl 4k2:text-8xl ">
            <b>Protecting Your Privacy</b>
          </h1>
          <p className="xl:text-xl 4k2:text-6xl">
            We are committed to maintaining the confidentiality of your
            information. Our
            <b>
              <i>
                <u> Privacy Policy </u>
              </i>
            </b>
            outlines how we collect, use, and protect your data.
          </p>
          <h1 className="bg-gradient-to-r from-indigo-900 to-purple-800 text-transparent bg-clip-text font-playfair text-xl max-sm:text-base 4k2:text-6xl">
            <b>No Unauthorised Sharing</b>
          </h1>
          <p className="xl:text-xl 4k2:text-6xl">
            We do not share your personal or patient data with third parties
            without your explicit consent.
          </p>
          <h1 className="bg-gradient-to-r from-indigo-900 to-purple-800 text-transparent bg-clip-text font-playfair text-xl max-sm:text-base 4k2:text-6xl">
            <b>Data Minimisation</b>
          </h1>
          <p className="xl:text-xl 4k2:text-6xl">
            We collect only the data necessary to provide our services
            effectively.
          </p>
          <h1 className="bg-gradient-to-r from-indigo-900 to-purple-800 text-transparent bg-clip-text font-playfair text-xl max-sm:text-base 4k2:text-6xl">
            <b>Anonymisation and Pseudonymisation</b>
          </h1>
          <p className="xl:text-xl 4k2:text-6xl">
            Where appropriate, we anonymise or pseudonymised data to enhance
            privacy protection.
          </p>
        </div>
        {/* ----------------- User Responsibilities ----------- */}
        <div className="UserResponsibilities text-black flex flex-col items-start w-[60%] max-sm:w-[80%] gap-3 4k2:gap-9">
          <div className="flex items-center w-full">
            <img
              src={smile}
              alt=""
              className=" h-10 max-sm:w-[20%] object-scale-down"
            />
            <h1 className="bg-gradient-to-r from-indigo-900 to-purple-800 text-transparent bg-clip-text font-playfair text-3xl max-sm:text-lg xl:text-4xl 4k2:text-8xl  max-sm:w-[80%] ">
              <b>User Responsibilities</b>
            </h1>
          </div>
          <p className="xl:text-xl 4k2:text-6xl">
            While we take extensive measures to protect your data, security is a
            shared responsibility. We encourage you to:
          </p>
          <h1 className="bg-gradient-to-r from-indigo-900 to-purple-800 text-transparent bg-clip-text font-playfair text-xl max-sm:text-base 4k2:text-6xl">
            <b>Use Strong Passwords</b>
          </h1>
          <p className="xl:text-xl 4k2:text-6xl">
            Create complex passwords and keep them confidential.
          </p>
          <h1 className="bg-gradient-to-r from-indigo-900 to-purple-800 text-transparent bg-clip-text font-playfair text-xl max-sm:text-base 4k2:text-6xl">
            <b>Stay Vigilant</b>
          </h1>
          <p className="xl:text-xl 4k2:text-6xl">
            Be cautious of phishing attempts and unauthorised access to your
            account.
          </p>
        </div>
        {/* ----------------- Continuous Improvement ----------- */}
        <div className="Continuousheading flex flex-col text-black w-[60%] max-sm:w-[80%] gap-3 4k2:gap-9 ">
          <h1 className="bg-gradient-to-r from-indigo-900 to-purple-800 text-transparent bg-clip-text font-playfair text-3xl max-sm:text-xl xl:text-4xl 4k2:text-8xl ">
            <b>Continuous Improvement</b>
          </h1>
          <p className="xl:text-xl 4k2:text-6xl">
            We are dedicated to continuously enhancing our security measures. As
            new threats emerge, we adapt and strengthen our protocols to ensure
            your data remains secure.
          </p>
          <h1 className="bg-gradient-to-r from-indigo-900 to-purple-800 text-transparent bg-clip-text font-playfair text-xl max-sm:text-base 4k2:text-6xl">
            <b>Contact Us</b>
          </h1>
          <p className="xl:text-xl 4k2:text-6xl">
            If you have any questions or concerns about our security measures,
            please do not hesitate to get in touch with us.
          </p>
        </div>
      </div>
      {/* ----------------- Frequently Asked Questions ----------- */}
      <div className="container text-black flex flex-col justify-center items-center  gap-3 4k2:gap-9">
        <div className="displayFAQ flex flex-col items-start w-[60%] max-sm:w-[80%] xl:w-[55%] hd:w-[60%] 2k:w-[55%]  gap-3 4k2:gap-9">
          <h1 className="font-playfair text-3xl max-sm:text-base 4k2:text-7xl">
            <b>Frequently Asked Questions</b>
          </h1>
          <h1 className="font-playfair text-2xl max-sm:text-base 4k2:text-7xl">
            <b>How is my data protected during transmission?</b>
          </h1>
          <p className="xl:text-xl 4k2:text-6xl">
            All data transmitted between your device and our servers is
            encrypted using SSL/TLS protocols.
          </p>
          <h1 className="font-playfair text-2xl max-sm:text-base 4k2:text-7xl">
            <b>Where is my data stored?</b>
          </h1>
          <p className="xl:text-xl 4k2:text-6xl">
            Your data is securely stored on AWS servers, benefiting from
            advanced encryption and compliance with industry-leading
            certifications such as ISO 27001, SOC 2, and HIPAA. This ensures a
            robust and reliable environment for sensitive information.
          </p>
          <h1 className="font-playfair text-2xl max-sm:text-base 4k2:text-7xl">
            <b>Do you share my data with third parties?</b>
          </h1>
          <p className="xl:text-xl 4k2:text-6xl">
            No, we do not share your personal or patient data with third parties
            without your explicit consent.
          </p>

          <p
            className={faq ? "hidden" : "cursor-pointer 4k2:text-4xl"}
            onClick={faqHandle}
          >
            <b>
              <u>Show more</u>
            </b>
          </p>
        </div>
        {/* ------------------------------hidden FAQ --------------- */}
        <div
          className={
            faq
              ? "hiddenFAQ flex flex-col gap-3 items-start w-[60%] max-sm:w-[80%] xl:w-[55%] hd:w-[60%] 4k2:gap-9"
              : "hidden"
          }
        >
          <h1 className="font-playfair text-2xl max-sm:text-base 4k2:text-7xl">
            <b>How often is your security reviewed?</b>
          </h1>
          <p className="xl:text-xl 4k2:text-6xl">
            We conduct regular security audits and continuously monitor our
            systems to ensure the highest level of security.
          </p>

          <p className="cursor-pointer 4k2:text-4xl " onClick={faqHandle}>
            <b>
              <u>Show less</u>
            </b>
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Security;
