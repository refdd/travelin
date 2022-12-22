import React from "react";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { BsFolderCheck } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import HeaderSection from "./helper/HeaderSection";
import aboutImage from "../public/assets/images/travel.png";
import Image from "next/image";
import CounterSection from "./helper/CounterSection";
import Head from "next/head";
function AboutSection() {
  return (
    <div className="pt-10 container mx-auto">
     
      <div className="flex flex-col md:flex-row justify-center items-center gap-3">
        {/* content */}
        <div className="flex flex-col gap-3 md:w-2/4 ">
          <HeaderSection
            titel="Get To Know Us"
            partOne="Explore All Tours Of"
            partTwo=" Egypt The World With Us."
          />
          <div className="flex flex-col justify-center items-center gap-4 border-y py-3">
            <p className="text-[#777] text-lg leading-7  font-Poppins capitalize text-center">
              Around Egypt Tours is a young innovative travel company yet
              matured and experienced. Founded in 2005, Around Egypt Tours has
              made a considerable impact on the Egyptian tourism sector by
              promoting Egypt as one of the fascinating destinations in the
              world.
            </p>
            <p className="text-[#777] text-lg font-Poppins capitalize text-center">
              Due to the excellent services provided by Around Egypt Tours, it
              becomes an active member in:
            </p>
           <ul className="flex flex-col gap-2">
            <li className="text-[#777] text-lg font-Poppins capitalize text-center md:text-left ">
            The Egyptian Travel Agent Association “ETAA”
            </li>
            <li className="text-[#777] text-lg font-Poppins capitalize text-center md:text-left ">
            The American Society of Travel Agents “ASTA”
            </li>
            <li className="text-[#777] text-lg font-Poppins capitalize text-center md:text-left ">
            The International Association of Travel and Tourism “IATT”
            </li>
            <li className="text-[#777] text-lg font-Poppins capitalize text-center md:text-left ">
            The International Organization for E – Tourism “ IOET”
            </li>
           </ul>
          </div>

          <div className="w-full h-full ">
            <ul className="flex flex-wrap gap-2 justify-center items-center mt-5">
              <li className="flex gap-1 items-center text-[#777]">
                <CiLocationOn color="#029e9d" />
                Tour Guide
              </li>
              <li className="flex gap-1 items-center text-[#777] ">
                <AiOutlineDollarCircle color="#029e9d" />
                Budget prices
              </li>
              <li className="flex gap-1 items-center  text-[#777] ">
                <BsFolderCheck color="#029e9d" />
                Reliable Tour Package
              </li>
            </ul>
          </div>
        </div>
        {/* image */}
        <div className="py-7 cursor-pointer md:w-2/4">
          <Image
            src={aboutImage}
            width={500}
            height={500}
            layout={"intrinsic"}
          />
        </div>
      </div>
      <CounterSection />
    </div>
  );
}

export default AboutSection;
