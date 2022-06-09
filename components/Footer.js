import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";
export default function Footer() {
  return (
    <footer className="flex justify-between items-center bg-yellow-500 px-8 py-2 lg:justify-center lg:gap-x-12">
      <span>Copyright &copy; 2022 Unisza</span>
      <div className="flex gap-3">
        <AiFillFacebook size={20} />
        <AiFillInstagram size={20} />
        <AiFillTwitterSquare size={20} />
      </div>
    </footer>
  );
}
