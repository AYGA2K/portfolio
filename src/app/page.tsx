"use client";
import * as React from "react";
import Image from 'next/image'
import { FaGithub, FaLinkedin, FaReact } from 'react-icons/fa';
import { SiNestjs } from 'react-icons/si'
export default function Home() {
  const [activeDiv, setActiveDiv] = React.useState(1)
  function handleLinkClick(num: number) {
    setActiveDiv(num)
  }
  return (
    <>
      <div className="sm:flex sm:p-0 py-5 justify-center items-center gap-64   ">
        <div className="hidden   h-screen sm:block  ">
          <div className="  h-screen   sm:flex sm:flex-col 
            justify-center gap-32 items-center">

            <a
              href="#profile"
              onClick={() => {
                handleLinkClick(1);
              }}
              className={`font-bold cursor-pointer text-gray-500 transition-
colors duration-300 ${activeDiv === 1 ? "before:content-['|'] before:px-2 before:ml-0.5 before:text-orange-500 text-blue-700 text-xl" : ""
                } hover:text-sky-500 hover:scale-105`}
            >
              Profile
            </a>
            <a
              href="#skills"
              onClick={() => {
                handleLinkClick(2);
              }}
              className={`font-bold cursor-pointer text-gray-500 transition-colors duration-300 ${activeDiv === 2 ? "before:content-['|'] before:px-2 before:ml-0.5 before:text-orange-500 text-blue-700 text-xl" : ""
                } hover:text-sky-500 hover:scale-105`}
            >
              Skills
            </a>
            <a
              href="/docs"
              onClick={() => {
                handleLinkClick(3);
              }}
              className={`font-bold cursor-pointer text-gray-500 transition-colors duration-300 ${activeDiv === 3 ? "before:content-['|'] before:px-2 before:ml-0.5 before:text-orange-500 text-blue-700 text-xl" : ""
                } hover:text-sky-500 hover:scale-105`}
            >
              Projects
            </a>
            <a
              href="/docs"
              onClick={() => {
                handleLinkClick(4);
              }}
              className={`font-bold cursor-pointer text-gray-500 transition-colors duration-300 ${activeDiv === 4 ? "before:content-['|'] before:px-2 before:ml-0.5 before:text-orange-500 text-blue-700 text-xl" : ""
                } hover:text-sky-500 hover:scale-105`}
            >
              Contact
            </a>
          </div>
        </div>
        <div id="profile" className={`flex px-5 sm:px-0 sm:w-3/6 flex-col
        justify-center items-center sm:gap-10 ${activeDiv == 1 ? 'sm:block' : 'sm:hidden'} `}>
          <div className=" w-full 
          flex justify-center items-end flex-1 ">
            <Image
              className="flex justify-center items-center"
              src="/DSC_1607.jpg"
              width={150}
              height={150}
              alt="Picture of the author"
            />
          </div>

          <div className="flex-1">
            <h3 className="text-blue-800
            text-center text-xl font-bold py-3">
              Ayoub GAROUAT
            </h3>
            <span className="text-xl">
              I am a developer who is passionate about coding and problem-solving. I have a strong interest in exploring new technologies. I love staying up-to-date with the latest advancements and enjoy the thrill of learning and applying new skills.
            </span>
          </div>
          <div className="flex p-2 justify-center gap-4 items-center" >
            <FaLinkedin className="fill-blue-800 cursor-pointer" size={"2em"} />
            <FaGithub className="cursor-pointer" size={"2em"} />
          </div>
        </div>
        <div className="block sm:hidden " >
          <div className="flex  justify-center my-24 sm:my-32">
            <div className="w-32 md:w-64 h-4 flex justify-between gap-1">
              <div className="w-1/3 border-4 border-white-500 bg-blue-500 rounded-lg"></div>
              <div className="flex w-1/3">
                <div className="w-1/3 border-4 border-white-500 bg-blue-500 rounded-full"></div>
                <div className="w-1/3 border-4 border-white-500 bg-blue-500 rounded-full"></div>
                <div className="w-1/3 border-4 border-white-500 bg-blue-500 rounded-full"></div>
              </div>
              <div className="w-1/3 border-4 border-white-500 bg-blue-500 rounded-lg"></div>
            </div>
          </div>

        </div>
        <div id="skills" className={`sm:flex px-5 sm:px-0 text-xl sm:w-3/6  ${activeDiv == 2 ? 'sm:block' : 'sm:hidden'} `}>
          <div className="sm:flex flex-col justify-center h-screen items-center gap-10">
            <h1 className="text-center p-10 sm:p-0 text-3xl font-bold text-blue-500  " > Skills </h1>
            <div className="flex flex-col gap-y-4 sm:flex-row justify-evenly sm:gap-32 items-center">

              <div className="flex flex-col  justify-center gap-y-4 items-center">
                <h2 className=" text-center font-bold">BackEnd</h2>
                <div className="flex gap-2 sm:flex-col justify-center items-center">
                  <div className=" border-sky-300 border-2 px-4 sm:px-8 
                rounded-lg hover:scale-[1.03] flex  gap-2 items-center">

                    <h4 className="text-gray-600 text-center font-medium text-xl lg:text-base">
                    </h4>
                    <SiNestjs size={"2em"} className="fill-red-500 mb-2" />
                    Nestjs
                  </div>
                  <div className=" border-sky-300 border-2 px-4 sm:px-8 
                rounded-lg hover:scale-[1.03] flex  gap-2 items-center">

                    <h4 className="text-gray-600 text-center font-medium text-xl lg:text-base">
                    </h4>
                    <SiNestjs size={"2em"} className="fill-red-500 mb-2" />
                    Nestjs
                  </div>
                </div>
              </div>
              <div className="flex flex-col  justify-center gap-y-4 items-center">
                <h2 className=" font-bold">FrontEnd</h2>
                <div className="flex gap-2 sm:flex-col justify-center items-center" >
                  <div className=" border-sky-300 border-2 px-4 sm:px-8 
                rounded-lg hover:scale-[1.03] flex  gap-2 items-center">

                    <h4 className="text-gray-600 text-center font-medium text-xl lg:text-base">
                    </h4>
                    <FaReact size={"2em"} className="fill-blue-500 mb-2" />
                    React
                  </div>
                  <div className=" border-sky-300 border-2 px-4 sm:px-8 
                rounded-lg hover:scale-[1.03] flex  gap-2 items-center">

                    <h4 className="text-gray-600 text-center font-medium text-xl lg:text-base">
                    </h4>
                    <FaReact size={"2em"} className="fill-blue-500 mb-2" />
                    React
                  </div>

                </div>

              </div>

              <div className="flex flex-col  justify-center gap-y-4 items-center">
                <h2 className=" font-bold">FrontEnd</h2>
                <div className="flex gap-2 sm:flex-col justify-center items-center" >
                  <div className=" border-sky-300 border-2 px-4 sm:px-8 
                rounded-lg hover:scale-[1.03] flex  gap-2 items-center">

                    <h4 className="text-gray-600 text-center font-medium text-xl lg:text-base">
                    </h4>
                    <FaReact size={"2em"} className="fill-blue-500 mb-2" />
                    React
                  </div>
                  <div className=" border-sky-300 border-2 px-4 sm:px-8 
                rounded-lg hover:scale-[1.03] flex  gap-2 items-center">

                    <h4 className="text-gray-600 text-center font-medium text-xl lg:text-base">
                    </h4>
                    <FaReact size={"2em"} className="fill-blue-500 mb-2" />
                    React
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>

      </div >
    </>
  );
}
