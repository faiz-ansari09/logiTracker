import React from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="flex p-4 justify-between items-center">
      <h1 className="text-[20px] font-black cursor-pointer">
        Made with ❤ by<span className="text-blue-600"> Faiz Ansari </span>
      </h1>
      <div className="flex text-[30px] gap-3">
        {/* <FaWhatsapp color="green" />
        <FaFacebook color="blue" />
        <FaYoutube color="red" />
        <FaGithub color="black" /> */}
        <Link
          to="https://wa.me"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp color="green" />
        </Link>
        <Link
          to="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook color="blue" />
        </Link>
        <Link
          to="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube color="red" />
        </Link>
        <Link
          to="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub color="black" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
