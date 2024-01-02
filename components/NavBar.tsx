import React from "react";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";

function Navbar() {
  return (
    <div className="flex items-center justify-between p-2 shadow-md border-b-[1px]">
      <Image src="/iPhone.png" alt="logo" width={75} height={75} />
      <div className="hidden md:flex gap-5">
        <h2 className="hover:bg-blue-500 px-3 p-2 cursor-pointer rounded-full hover:text-white">
          Home
        </h2>
        <h2 className="hover:bg-blue-500 px-3 p-2 cursor-pointer rounded-full hover:text-white">
          History
        </h2>
        <h2 className="hover:bg-blue-500 px-3 p-2 cursor-pointer rounded-full hover:text-white">
          Contact Us
        </h2>
      </div>
      <UserButton />
    </div>
  );
}

export default Navbar;
