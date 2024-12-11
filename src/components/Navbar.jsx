import logoLight from "../assets/logo white transparent.png";
import logoDark from "../assets/logo dark transparent.png";
import { Link } from 'react-router-dom';  // New logo for dark mode
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = ({ mode = "light" }) => {

  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  }

  const navItems = [
    { label: "Use-Cases", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "Templates", href: "#" },
    { label: "Customers", href: "#" },
    { label: "Our Story", href: "#" },
    { label: "Contact Sales", href: "#" },
  ]

  const isDarkMode = mode === "dark"; // Determine if dark mode is active

  return (
    <>
      <nav className={`sticky top-0 z-50 py-6 border-b border-neutral-700/80 backdrop-blur-lg `}>
        <div className="container px-4 mx-auto relative text-sm">
          <div className="flex justify-between items-center">
            <div className="flex justify-center items-center flex-shrink-0">
            <Link to="/home">  {/* Wrap the logo with a Link component */}
                <img 
                className="mr-2 w-28 md:w-50 xl:w-55 4k2:w-60"
                src={isDarkMode ? logoDark : logoLight} // Switch logo based on mode
                alt="logo" 
                />
            </Link>
            </div>
            <ul className={`hidden xl:flex ml-14 space-x-12 ${isDarkMode ? 'text-black' : 'text-white'} text-1xl 4k:text-3xl`}>
              {navItems.map((item, index) =>
                <li key={index}>
                  <a href={item.href}> {item.label}</a>
                </li>
              )}
            </ul>
            <div className={`hidden xl:flex justify-center space-x-10 items-center`}>
              <a href="/signin" className={`py-2 px-5 rounded-xl bg-[#5857F6] text-1xl 4k:text-3xl 4k:px-10 4k:py-3`}>
                Login
              </a>
              <a href="/signup" className={`py-2 px-5 rounded-xl bg-black border text-1xl 4k:text-3xl 4k:px-10 4k:py-3`}>
                Sign Up
              </a>
            </div>
            <div className="xl:hidden lg:flex flex-col justify-end">
              <button onClick={toggleNavbar}>
                {mobileDrawerOpen ? <X color={isDarkMode ? 'black' : 'white'} /> : <Menu color={isDarkMode ? 'black' : 'white'} />} {/* Change icon color based on mode */}
              </button>
            </div>
          </div>
          {mobileDrawerOpen && (
            <div className={`fixed right-0 z-20 mt-4 w-full p-12 flex flex-col 
            justify-center items-center xlg:hidden bg-[#0d0720] }`}>
              <ul className="w-full">
                {navItems.map((item, index) =>
                  <li
                    key={index}
                    className={`py-4 w-full transition-colors duration-300 ${isDarkMode ? 'hover:bg-[#2d2f96] hover:bg-opacity-50' : 'hover:bg-[#2d2f96] hover:bg-opacity-20'}`}
                  >
                    <a
                      href={item.href}
                      className="block w-full text-center"
                    >
                      {item.label}
                    </a>
                  </li>
                )}
              </ul>
              <div className="flex space-x-6 mt-4">
              <Link
                to="/signin"
                className={`py-2 px-5 rounded-xl bg-[#5857F6] text-1xl transition-colors duration-300 hover:bg-[#4645c4] hover:shadow-lg`}
                >
                Login
                </Link>
                <Link
                to="/signup"
                className={`py-2 px-5 rounded-xl bg-black border text-1xl 
                    transition-colors duration-300 hover:bg-[#1a1a1a] 
                    hover:border-[#5857F6]`}
                >
                Sign Up
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}

export default Navbar;
