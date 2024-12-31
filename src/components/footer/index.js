import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white p-8 rounded-t-lg">
      <div className="Container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-between gap-6 pb-5">
        <div>
          <h1 className="font-semibold text-xl">Further Information</h1>
          <ul>
            <li>Abstracting/Indexing</li>
            <li>Peer Review Process</li> <li>Article Processing Charges</li>
          </ul>
        </div>
        <div>
          <h1 className="font-semibold text-xl">Further Information</h1>
          <ul>
            <li>For Authors</li>
            <li>For Reviewers</li> <li>For Section Editors</li>
          </ul>
        </div>
        {/* <div>
          <h1 className="font-semibold text-xl">PAKJAS Initiatives</h1>
          <ul>
            <li>NCBI</li>
            <li>SCOPUS</li> <li>CABI</li>
          </ul>
        </div> */}
        <div>
          <h1 className="font-semibold text-xl">FOLLOW US</h1>
          <ul>
            <li className="flex gap-2 items-center">
              <span>
                <FaFacebook />
              </span>
              <span>Facebook</span>
            </li>
            <li className="flex gap-2 items-center">
              <span>
                <FaTwitter />
              </span>
              <span>Twitter</span>
            </li>
            <li className="flex gap-2 items-center">
              <span>
                <FaLinkedin />
              </span>
              <span>Linked In</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t-2 border-white py-3 flex flex-wrap sm:justify-between ">
        <span className="">
          <h1 className="text-base text-center">
            Copyright All Right Reserved 2024, Dar-ul-Madinah.
          </h1>
        </span>
        <span className="text-base flex gap-1">
          <h1>Designed by</h1>
          <p className="underline underline-offset-4">
            <a className="" href="https://devcotk.com/">
              Devcotk
            </a>
          </p>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
