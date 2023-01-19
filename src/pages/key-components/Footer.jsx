import React from "react";
//React Icons
import { FiTwitter } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div className=" bg-zinc-900 w-full gap-x-9 h-12 flex justify-between items-center pl-7 ">
      <span className="flex justify-items-end gap-x-10">
        <h1 className="text-white font-sans">© Mert Can BAKAR</h1>
        <a className="text-white font-sans hover:text-green-500" href="https://epigra.com/" target='_blank' rel="noopener">
          ⋮ Epigra
        </a>
      </span>
      <span className="flex justify-items-end gap-x-3 pr-7">
        <a className="text-white font-sans hover:text-green-500" href="https://twitter.com/merttcanbakar" target='_blank' rel="noopener">
          <FiTwitter />
        </a>
        <a className="text-white font-sans hover:text-green-500" href="https://github.com/mertcanbakar" target='_blank' rel="noopener">
          <AiFillGithub />
        </a>
        <a className="text-white font-sans hover:text-green-500" href="https://www.linkedin.com/in/mert-can-bakar-18a881248" target='_blank' rel="noopener">
          <BsLinkedin />
        </a>
      </span>
    </div>
  );
};

export default Footer;
