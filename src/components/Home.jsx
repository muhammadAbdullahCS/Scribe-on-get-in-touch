import Navbar from "./Navbar";
import bgImg from "../assets/bg-image.png";
import logo from "../assets/logo white transparent.png";
import timeIcon from "../assets/time.png";
import accuracyIcon from "../assets/accuracy.png";
import securityIcon from "../assets/security.png";
import serviceIcon from "../assets/service.png"
import processIcon from "../assets/process.png"
import humanIcon from "../assets/human.png"
import reportIcon from "../assets/report.png"
import FloatingCircle from "./FloatingCircle";
import BlobAnimation from "./BlobAnimation";
import Marquee from "./Marquee";
import Footer from "./Footer";
import { useState } from "react";

const Home = () => {

    const blobs = [
        { color: "#6DC6FE", size: "10.42vw", position: { top: "4.63vh", left: "25vw" }, type: "down", speed: 3 },
        { color: "#6DC6FE", size: "5.21vw", position: { top: "18.52vh", left: "42vw" }, type: "top", speed: 5 },
        { color: "#6DC6FE", size: "10.42vw", position: { top: "18.52vh", left: "40vw" }, type: "down", speed: 3 },
        { color: "#9B29FF", size: "9.37vw", position: { top: "4.63vh", left: "35vw" }, type: "top", speed: 5 },
        { color: "#9B29FF", size: "9.37vw", position: { top: "18.52vh", left: "30vw" }, type: "top", speed: 4 },
        { color: "#9B29FF", size: "7.82vw", position: { top: "4.63vh", left: "55vw" }, type: "down", speed: 5 },
        { color: "#9B29FF", size: "5.21vw", position: { top: "18.52vh", left: "20vw" }, type: "top", speed: 3 },
        { color: "#9B29FF", size: "10.42vw", position: { top: "18.52vh", left: "55vw" }, type: "down", speed: 5 },
        { color: "#6DC6FE", size: "9.37vw", position: { top: "13.89vh", left: "50vw" }, type: "top", speed: 4 },
    ];
    
  const testimonials = [
    {
      text: "Scribe On’s services have met our needs, time and time again, as we expanded and developed. Their team is extremely responsive to any questions we have, and the turnaround time is stellar. We have improved our documentation, allowing us to spend time on what matters by further opening the lines of communication with our referral sources.",
      author: "Dr. Joseph Slesenger, Occupational Physician",
    },
    {
      text: "I have been working with Scribe On for years, and their commitment to excellence never wavers. Their dedication to providing the best service is unmatched. Highly recommended for professionals!",
      author: "Dr. Emily Carter, General Practitioner",
    },
    {
      text: "Their team is an invaluable resource. Every time I’ve had a concern, they’ve been proactive and incredibly helpful. It’s hard to find a company that truly values its clients like Scribe On.",
      author: "Dr. Mark Hughes, Dermatologist",
    },
    {
        text: "Their team is an invaluable resource. Every time I’ve had a concern, they’ve been proactive and incredibly helpful. It’s hard to find a company that truly values its clients like Scribe On.",
        author: "Dr. Mark Hughes, Dermatologist",
      },
  ];
  
  const upperMarquee = [
    "/logo dark transparent.svg",
    "/logo transparent.svg",
    "/logo light transparent.svg",
    "/logo transparent.svg",
    "/logo dark transparent.svg",
    "/logo light transparent.svg",
    "/logo dark transparent.svg",
    "/logo transparent.svg",
    "/logo dark transparent.svg",
    "/logo light transparent.svg",
  ]

  const [currentIndex, setCurrentIndex] = useState(0);

  
  return (
    <>
        <div
        className="h-screen bg-cover bg-center bg-opacity-0 overflow-hidden flex flex-col items-center"
        style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgImg})`,}}>
        
            <div className="w-full">
                <Navbar mode="light"/>
            </div>


            <div className="flex flex-col h-2/3 w-10/12 lg:w-8/12 mt-10 lg:mt-32 xl:mt-16 
                        justify-around items-center md:items-start 4k2:mt-60">
            
                <img className="w-10/12 hd:w-5/12 lg:w-5/12 md:w-8/12 4k:w-2/6" src={logo} alt="image" />

                <p className="text-left font-playfair text-2xl sm:text-1xl md:text-4xl lg:text-4xl xl:text-5xl hd:text-5xl 4k:text-6xl 
                            4k:leading-snug hd:leading-tight md:leading-[1.15] 4k2:text-9xl 4k2:leading-tight">
                    Specialized Transcription Beyond AI. 
                    AI for Speed, Experts for Accuracy:
                    Transcription Elevated
                </p>


                <p className="text-left font-raleway text-1xl md:text-3xl 4k:text-4xl 
                                4k:leading-snug 4k2:text-7xl 4k2:leading-tight">
                    Precision you can trust, speed you can count on—tailored for high-stakes transcription.
                </p>
                <button className="self-start w-3/5 md:w-5/12 h-14 md:h-20 text-1xl md:text-2xl 4k:text-2xl 
                                4k:w-1/5 rounded-full border border-white text-white 
                                    bg-gradient-to-r from-[#5857F6] to-[#1010e0] 4k2:w-1/4 4k2:h-24 4k2:text-4xl">
                    Try Now For Free
                </button>
            </div>
        </div>

        {/* -------------------------- Floating Circles --------------------- */} 
        <div className="hidden lg:block">
        <FloatingCircle 
                    topOffset={130}
                    leftOffset="-12%"
                    size={250} 
                    borderThickness={8} 
                    ballSize={40} 
                    position="left"
                    className="lg:right-20"
                    />
        </div>
        <div className="hidden lg:block">
                <FloatingCircle 
                    topOffset={270}
                    leftOffset="-8%"
                    size={250} 
                    borderThickness={8} 
                    ballSize={40} 
                    position="right"
                    />
        </div>
            {/* -------------------------- Section 2 --------------------- */} 
        <div className="text-black h-inbetween 4k2:h-[130vh]">
            <div className="flex flex-col justify-center items-center pt-24 ">


                <div className="h-[30rem] flex flex-col justify-around w-10/12 md:w-4/5 lg:w-3/5 4k2:w-9/12">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl hd:text-6xl 4k2:text-9xl font-playfair text-transparent font-bold 
                    bg-clip-text bg-gradient-to-l from-[#5857F6] to-[#101052]">
                        We Scribe On so you can carry on
                    </h1>
                    <p className="font-raleway mt-2 md:text-lg lg:text-lg hd:text-2xl 4k2:text-6xl 4k2:my-16">
                        Scribe On is here to simplify the process of complex medicolegal transcriptions 
                        that require the highest levels of precision. We use advanced AI technology, 
                        combined with an experienced human team, to create clear, ready-to-use reports. 
                        By taking on the heavy lifting of transcription, we help ensure accuracy and save 
                        valuable time, allowing you to focus on making informed decisions with complete 
                        peace of mind.
                    </p>
                    <p className="font-raleway mt-4 md:text-lg hd:text-2xl 4k2:text-6xl">    
                        The administrative burden of documentation and report processing not only 
                        consumes valuable time but also detracts from patient care. Our innovative 
                        AI-powered transcription services, enhanced by Human Quality Assurance (QA), 
                        significantly reduce this time, ensuring that your reports are accurate and 
                        ready to use.
                    </p>
                </div>


                {/* Clear separator */}
                <div className="h-[1rem] max-xsml:h-[5rem] bg-transparent md:h-0 4k2:h-[20rem]"></div>

                {/* <FloatingCircle topOffset="30vh" size={250} leftOffset="43vw" 
                    borderThickness={8} ballSize={40} /> */}

                <div className="flex flex-col mt-24 justify-between h-[70vh] w-10/12 md:w-4/5 
                lg:w-3/5 4k2:w-9/12">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl hd:text-6xl 4k2:text-9xl font-playfair text-transparent font-bold bg-clip-text 
                    bg-gradient-to-l from-[#5857F6] to-[#101052]">
                        Key Benifits
                    </h1>
                    <div class="flex items-center space-x-2 mt-6">
                        <img className="w-6 md:w-9" src={timeIcon} alt="Icon" />
                        <span className="text-md md:text-2xl lg:text-2xl hd:text-4xl 4k2:text-7xl font-playfair text-transparent font-bold bg-clip-text 
                        bg-gradient-to-l from-[#5857F6] to-[#101052]">
                            Save Time and Increase Efficiency
                        </span>

                    </div>
                    <p className="font-raleway mt-2 md:text-lg hd:text-2xl 4k2:text-6xl">Our cutting-edge AI technology 
                        accelerates the transcription process, reducing report preparation 
                        time by up to 50%.</p>


                    <div class="flex items-center space-x-2 mt-6">
                        <img className="w-7 md:w-10 " src={accuracyIcon} alt="Icon" class="w-5 h-5" />
                        <span className="text-md md:text-2xl lg:text-2xl hd:text-4xl 4k2:text-7xl font-playfair text-transparent font-bold bg-clip-text 
                        bg-gradient-to-l from-[#5857F6] to-[#101052]">
                           Unmatched Accuracy with Integrated Human QA
                        </span>

                    </div>
                    <p className="font-raleway mt-2 md:text-lg hd:text-2xl 4k2:text-6xl">While our AI provides speed and 
                        initial accuracy, our human expertise is essential for ensuring 
                        nuanced quality assurance—catching subtle errors and contextual 
                        details that only humans can provide. We meticulously review each 
                        transcription, so you spend less time adjusting reports. Our human 
                        QA team will ensure that your reports stay true to your style.</p>


                    
                    <div class="flex items-center space-x-2 mt-6">
                        <img className="w-6 md:w-8 " src={securityIcon} alt="Icon" class="w-5 h-5" />
                        <span className="text-md md:text-2xl  lg:text-2xl hd:text-4xl 4k2:text-7xl font-playfair text-transparent font-bold bg-clip-text 
                        bg-gradient-to-l from-[#5857F6] to-[#101052]">
                            Secure and Confidential with AWS
                        </span>

                    </div>
                    <p className="font-raleway mt-2 md:text-lg hd:text-2xl 4k2:text-6xl">We prioritise the security and confidentiality of your patient data. By utilising Amazon Web Services (AWS), a leader in cloud security, we ensure that all your information is protected with state-of-the-art encryption and complies with industry standards and regulations.</p>

                </div>
            </div>
            
        </div>
            
                    
        {/* Clear separator */}
        <div className="h-[17rem] max-xsml:h-[35rem] max-sm:h-[18rem] md:h-[12rem] lg:h-[25rem] xl:h-[5rem] hd:h-0 4k:mt-[10rem] 4k2:mt-0 bg-transparent"></div>
        
            {/* ----------------Section 3------------------ */}

        <div className="h-screen flex flex-col justify-start items-center mt-12 4k2:mt-0">
            <div className="text-black h-4/6 w-10/12 md:w-4/5 lg:w-3/5 4k2:w-9/12 flex flex-col justify-between">
                <div>
                    <h4 className=" text-md md:text-lg lg:text-2xl hd:text-3xl 4k2:text-6xl font-playfair text-transparent font-bold bg-clip-text 
                            bg-gradient-to-l from-[#5857F6] to-[#101052]">
                        How it works?
                    </h4>
                
                    <h1 className="text-2xl md:text-3xl lg:text-5xl hd:text-6xl 4k2:text-9xl font-playfair text-transparent font-bold bg-clip-text 
                            bg-gradient-to-l from-[#5857F6] to-[#101052]">
                                Like a Charm
                    </h1>
                </div>
                    
                    {/* ----------------Section 3.1   ------------------ */}

                <div className="mt-6 mb-6 md:mt-10">
                    <div class="flex items-center space-x-2 mb-4">
                        <img className="w-12 md:w-20" src={serviceIcon} alt="Icon"  />
                        <span className="md:text-2xl lg:text-3xl hd:text-5xl 4k2:text-8xl font-playfair text-transparent font-bold bg-clip-text 
                        bg-gradient-to-l from-[#5857F6] to-[#101052]">
                            Select Your Service 
                        </span>

                    </div>
                    <p className="font-raleway md:text-lg hd:text-2xl 4k2:text-6xl">
                        Choose from live consultation transcription or dictation 
                        services, depending on your needs.
                    </p>
                </div>


                <div className="mb-6">
                    <div class="flex items-center space-x-2 mb-4">
                        <img className="w-12 md:w-20" src={processIcon} alt="Icon"  />
                        <span className="md:text-2xl lg:text-3xl hd:text-5xl 4k2:text-8xl font-playfair text-transparent font-bold bg-clip-text 
                        bg-gradient-to-l from-[#5857F6] to-[#101052]">
                            Transcription Process
                        </span>

                    </div>
                    <p className="font-raleway md:text-lg hd:text-2xl 4k2:text-6xl">
                    Our advanced AI transcribes your audio files quickly and accurately, 
                    organising information under appropriate headings in your chosen template.
                    </p>
                </div>


                <div className="mb-6">
                    <div class="flex items-center space-x-2 mb-4">
                        <img className="w-9 md:w-14 " src={humanIcon} alt="Icon" class="w-5 h-5" />
                        <span className="md:text-2xl lg:text-3xl hd:text-5xl 4k2:text-8xl font-playfair text-transparent font-bold bg-clip-text 
                        bg-gradient-to-l from-[#5857F6] to-[#101052]">
                            Human QA Review
                        </span>

                    </div>
                    <p className="font-raleway md:text-lg hd:text-2xl 4k2:text-6xl">
                    Our dedicated Human QA team thoroughly reviews each transcription for accuracy, 
                    context, and completeness. They ensure medical terminology is correct, the 
                    formatting aligns with your preferences, and all details are accurately 
                    captured—so you receive reports that are ready to use.
                    </p>

                </div>

                <div className="mb-12">
                    <div class="flex items-center space-x-2 mb-4">
                        <img className="w-9 md:w-14" src={reportIcon} alt="Icon"  />
                        <span className="md:text-xl lg:text-3xl hd:text-5xl 4k2:text-8xl font-playfair text-transparent font-bold bg-clip-text 
                        bg-gradient-to-l from-[#5857F6] to-[#101052] ">
                            Receive Your Reports 
                        </span>

                    </div>
                    <p className="font-raleway md:text-lg hd:text-2xl 4k2:text-6xl">
                    Access your finalised reports through our secure platform, powered by AWS, 
                    ready for immediate use.
                    </p>
                </div>
            </div>
        </div>

        {/* Clear separator */}
        <div className="h-[17rem] max-xsml:h-[14rem] max-sm:h-[5rem] md:h-[12rem] 
        lg:h-[25rem] xl:h-[5rem] hd:h-0 4k:mt-[10rem] 4k2:mt-0 bg-transparent"></div>
        
        <div className="flex justify-center">
            <div className="w-11/12 h-[30rem] 4k2:h-[62rem] bg-[#0D002D] mb-24 sm:rounded-3xl relative 
            overflow-hidden flex justify-center items-center ">
            
                <BlobAnimation blobs={blobs} style={{zIndex:-1}}/>
                <div className="flex flex-col justify-around items-center 
                max-sm:w-full w-2/4 h-4/5 z-10">
                    <h1 className="max-sm:text-3xl md:text-2xl lg:text-3xl hd:text-5xl 
                    4k2:text-8xl font-playfair font-bold 
                            ">Testimonials</h1>
                    {/* Carousel */}
                    <div className="w-full relative overflow-hidden">
                        <div
                            className="flex transition-transform duration-700 ease-in-out space-x-8"
                            style={{
                            transform: `translateX(calc(-${currentIndex} * (100% + 2rem)))`,
                            }}
                        >
                            {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="flex flex-col justify-center items-center min-w-full px-4"
                            >
                                <p className="font-raleway md:text-lg hd:text-2xl 4k2:text-6xl 
                                text-center max-sm:text-sm">
                                {testimonial.text}
                                </p>
                                <h2 className="font-raleway md:text-lg hd:text-2xl 4k2:text-6xl 
                                font-bold mt-4 text-center">
                                — {testimonial.author}
                                </h2>
                            </div>
                            ))}
                        </div>

                        
                        </div>
                        {/* Navigation Dots */}
                        <div className="flex justify-center items-center mt-4 space-x-3">
                            {testimonials.map((_, index) => (
                            <button
                                key={index}
                                className={`w-4 h-4 4k2:w-8 4k2:h-8 rounded-full ${
                                index === currentIndex
                                    ? "bg-white opacity-100"
                                    : "bg-white opacity-50"
                                } hover:opacity-100 focus:opacity-100`}
                                onClick={() => setCurrentIndex(index)}
                            ></button>
                            ))}
                    </div>
                </div>
            </div>
        </div>
        

        <div className="h-[80vh] flex flex-col justify-start items-center mt-12 4k2:mt-0">
            <div className="text-black h-4/5 w-10/12 md:w-4/5 lg:w-3/5 4k2:w-9/12 flex 
            flex-col justify-between">
                <div className="mb-6">
                    <div class="flex items-center space-x-2 mb-4">
                        <img className="w-8 md:w-14" src={securityIcon} alt="Icon"  />
                        <span className=" md:text-2xl lg:text-3xl hd:text-5xl 4k2:text-8xl 
                        font-playfair text-transparent font-bold bg-clip-text 
                        bg-gradient-to-l from-[#5857F6] to-[#101052]">
                            Data Security and Privacy
                        </span>

                    </div>
                    <p className="font-raleway text-sm md:text-lg hd:text-2xl 4k2:text-6xl">
                    Your data security is our top priority. By leveraging AWS services, we offer:
                    </p>
                </div>
                <div class="flex items-center space-x-2 mt-6">
                        <span className="text-md md:text-2xl lg:text-2xl hd:text-4xl 4k2:text-7xl font-playfair text-transparent font-bold bg-clip-text 
                        bg-gradient-to-l from-[#5857F6] to-[#101052]">
                            Advanced Encryption
                        </span>

                    </div>
                    <p className="text-sm font-raleway mt-2 md:text-lg hd:text-2xl 4k2:text-6xl">Our cutting-edge AI technology 
                    All data is encrypted at all times both in transit and at rest.</p>


                    <div class="flex items-center space-x-2 mt-6">
                        <span className="text-md md:text-2xl lg:text-2xl hd:text-4xl 4k2:text-7xl font-playfair text-transparent font-bold bg-clip-text 
                        bg-gradient-to-l from-[#5857F6] to-[#101052]">
                           Compliance Standards
                        </span>

                    </div>
                    <p className="text-sm font-raleway mt-2 md:text-lg hd:text-2xl 4k2:text-6xl">
                        Adherence to HIPAA, GDPR, and APP (as outlined in the Privacy Act 1988).
                         ISO 27001, 27017 and 27018 certified – which means AWS has a robust, 
                         well-structured approach to safeguarding data, especially personal 
                         data in the cloud. These certifications mean AWS follows global best 
                         practices to keep your data safe and compliant with privacy 
                         standards.</p>


                    
                    <div class="flex items-center space-x-2 mt-6">
                        <span className="text-md md:text-2xl  lg:text-2xl hd:text-4xl 4k2:text-7xl font-playfair text-transparent font-bold bg-clip-text 
                        bg-gradient-to-l from-[#5857F6] to-[#101052]">
                            Reliable Infrastructure
                        </span>

                    </div>
                    <p className="text-sm font-raleway mt-2 md:text-lg hd:text-2xl 4k2:text-6xl">
                    AWS provides a robust and scalable platform with 99.99% uptime.</p>

            </div>
        </div>
        
       {/* Clear separator */}
       <div className="h-[17rem] max-sm:h-[2rem] md:h-[7rem] 
        lg:h-[9rem] xl:h-[5rem] hd:h-0 4k:mt-[10rem] 4k2:mt-0 bg-transparent"></div>
        <Marquee images={upperMarquee} from={0} to={"-100%"}/>
        <div className="flex justify-center items-center lg:my-20 hd:my-24 4k2:my-32">
            <div className="w-4/5 md:w-2/5 mt-10 md:mb-10 max-xsml:mb-0 mb-5 flex flex-col justify-center items-center gap-5">
                <h1 className="text-1xl text-center md:text-1xl lg:text-2xl hd:text-4xl 
                        4k2:text-7xl font-playfair text-transparent font-bold 
                        bg-clip-text bg-gradient-to-l from-[#5857F6] to-[#101052]">
                            "Doctors spend up to 30% of their time on documentation. Our solutions can reduce this by up to 50%, with reports ready for immediate use."
                </h1>
                <p className="text-sm text-black text-center italic font-raleway mt-2 md:text-md hd:text-2xl 4k2:text-6xl">
                Ready to reclaim your time and enhance your practice?</p>
                
                <a href="/signup" className={`py-2 px-5 rounded-xl bg-black border text-1xl 4k:text-3xl 4k2:text-4xl 4k2:py-8 4k:px-10 4k:py-3`}>
                Get Started Today
              </a>
            </div>
        </div>

        <Marquee images={upperMarquee} from={"-100%"} to={0}/>

        <Footer />
    </>
  );
};

export default Home;
