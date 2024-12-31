import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import SingleNavItem from "./SingleNavItem";
import useOutsideClick from "../../hooks";
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
  { label: "Inpress", link: "/archives" },
  { label: "Archives", link: "/inpress" },
  { label: "Submission", link: "#" },
];

const MobileNav = ({ closeSideMenu }) => {
  const navRef = useOutsideClick(closeSideMenu);

  return (
    <div className="fixed left-0 top-0 flex h-full min-h-screen w-full justify-end bg-black/60 md:hidden">
      <div ref={navRef} className="h-full w-[65%] bg-white px-4 py-4 overflow-y-auto">
        {/* Close Icon */}
        <section className="flex justify-end">
          <AiOutlineClose
            onClick={closeSideMenu}
            className="cursor-pointer text-4xl"
          />
        </section>

        {/* Mobile Nav Items */}
        <div className="flex flex-col gap-2 text-sm transition-all">
          {navItems.map((item, index) => (
            <SingleNavItem
              key={index}
              label={item.label}
              link={item.link}
              children={item.children}
            />
          ))}
        </div>

        {/* Login/Register */}
        <section className="flex flex-col items-center gap-8">
          <button className="text-neutral-400 transition-all hover:text-black/90">
            Login
          </button>
        </section>
      </div>
    </div>
  );
};

export default MobileNav;
