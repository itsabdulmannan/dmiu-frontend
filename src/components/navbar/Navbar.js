import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import MobileNav from "./MobileNav";
import logo from "../../assets/images/logo.png";
import { useLocation, useNavigate } from "react-router-dom"; 
const navItems = [
  { label: "Home", link: "/" },
  {
    label: "About",
    children: [
      { label: "Aims & Scope", link: "/about/aims-and-scope" },
      { label: "Abstracting / Indexing", link: "/about/abstract-indexing" },
      { label: "Peer Review Process", link: "/about/peer-review-process" },
      {
        label: "Article Processing Charges",
        link: "/about/article-processing-charges",
      },
      { label: "Publication Ethics", link: "/about/publication-ethics" },
    ],
  },
  {
    label: "Guidelines",
    children: [
      { label: " Authors", link: "/guidelines/authors" },
      { label: "Reviewers", link: "/guidelines/reviewers-guidelines" },
      { label: "Editors", link: "/guidelines/editors" },
    ],
  },
  { label: "Editorial Board", link: "/editorial-board" },
  { label: "Inpress", link: "/inpress" },
  { label: "Archives", link: "/archives" },
  { label: "Submission", link: "#" },
];

const Navbar = () => {
  const [isSideMenuOpen, setSideMenu] = useState(false);
  const location = useLocation(); 
  const navigate = useNavigate(); 

  const openSideMenu = () => setSideMenu(true);
  const closeSideMenu = () => setSideMenu(false);


  const isActive = (path) => location.pathname === path;


  const isParentActive = (parent) => {
    if (isActive(parent.link)) return true;
    return parent.children?.some((child) => isActive(child.link));
  };


  const handleNavigate = (link) => {
    if (link) navigate(link); 
  };

  return (
    <div className="container-global flex w-full items-center justify-between">
      {/* Left Section */}
      <div className="font-bold text-lg">
        <img onClick={() => navigate("/")} className="w-[250px] h-[60px] cursor-pointer" src={logo} alt="logo" />
      </div>
      <section className="flex items-center gap-10">
        {/* Logo */}
        {isSideMenuOpen && <MobileNav closeSideMenu={closeSideMenu} />}

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-4 transition-all">
          {navItems.map((item, index) => (
            <div key={index} className="relative group px-2 py-2 transition-all">
              <button
                onClick={() => handleNavigate(item.link)}
                className={`flex cursor-pointer text-base items-center gap-2 ${
                  isParentActive(item)
                    ? "bg-secondary px-4 py-2 text-white rounded-md"
                    : "text-primaryText"
                } group relative`}
              >
                <span>{item.label}</span>
                {item.children && (
                  <IoIosArrowDown className="rotate-180 transition-all group-hover:rotate-0" />
                )}
                <span
                  className={`absolute bottom-0 left-0 w-0 h-[2px] bg-secondary transition-all duration-300 group-hover:w-full ${
                    isParentActive(item) ? "hidden" : ""
                  }`}
                ></span>
              </button>

              {/* Dropdown */}
              {item.children && (
                <div className="absolute left-3 top-10 hidden w-auto whitespace-nowrap flex-col gap-1 rounded-lg bg-white py-3 shadow-md transition-all group-hover:flex">
                  {item.children.map((child, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleNavigate(child.link)}
                      className={`flex cursor-pointer items-center py-1 pl-6 pr-8 ${
                        isActive(child.link)
                          ? "text-secondaryText"
                          : "text-primaryText"
                      } hover:text-secondaryText`}
                    >
                      {child.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Right Section */}
      <section className="hidden md:flex items-center gap-8">
        <button className="relative text-base text-primaryText transition-all group">
          Login
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-secondary transition-all duration-300 group-hover:w-full"></span>
        </button>
      </section>

      {/* Mobile Menu Icon */}
      <FiMenu
        onClick={openSideMenu}
        className="cursor-pointer text-4xl md:hidden"
      />
    </div>
  );
};

export default Navbar;
