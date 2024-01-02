import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <div
      className="grid grid-cols-1 
    md:grid-cols-2"
    >
      <div>
        <h2 className="text-[40px] md:text-[60px] font-bold">
          Quick and Easy Car Rentals In Your Area
        </h2>
        <h2 className="text-[20px] text-gray-500 pr-20 mt-5">
          Book Your Cars with Ease, and Pay only for the Quality Drive
        </h2>
        <button
          className="p-2 mt-5 bg-blue-500 text-white
            px-4 rounded-full 
            hover:scale-105 transition-all"
        >
          Explore Cars
        </button>
      </div>
      <div>
        <Image
          src="/car1.png"
          alt="hero"
          width={200}
          height={300}
          className="w-full object-cover align-middle"
        />
      </div>
    </div>
  );
}

export default Hero;
