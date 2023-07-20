"use client";
import * as React from "react";
import Image from 'next/image'
import { FaDocker, FaGit, FaGitAlt, FaGithub, FaJava, FaLaravel, FaLinkedin, FaPhp, FaPython, FaReact, FaVuejs, } from 'react-icons/fa';
import { BiLogoGoLang, BiLogoTypescript } from 'react-icons/bi'
import { SiExpress, SiFlutter, SiNeovim, SiNestjs, SiNuxtdotjs, SiPrisma, SiQuasar, SiTailwindcss, SiTypescript } from 'react-icons/si'
import { TbBrandCpp, TbBrandNextjs } from 'react-icons/tb'
import { FcLinux } from 'react-icons/fc'
import Link from "next/link";
export default function Home() {
  const [activeDiv, setActiveDiv] = React.useState(1)
  function handleLinkClick(num: number) {
    setActiveDiv(num)
  }
  return (
    <>
      <div className="sm:flex sm:p-0 py-5 justify-start items-center gap-x-[5%]  ">
        <div className="hidden  sm:w-1/4   h-screen sm:block  ">
          <div className="  h-screen   sm:flex sm:flex-col 
            justify-center gap-y-32 items-center">

            <a
              href="#profile"
              onClick={() => {
                handleLinkClick(1);
              }}
              className={`font-bold cursor-pointer  transition-
colors duration-300 ${activeDiv === 1 ?
                  " text-blue-700  before:content-['|'] before:px-2 before:ml-0.5 before:text-orange-500 text-xl" : "text-gray-500"
                } hover:text-sky-500 hover:scale-105`}
            >
              Profile
            </a>
            <a
              href="#skills"
              onClick={() => {
                handleLinkClick(2);
              }}
              className={`font-bold cursor-pointer  transition-colors duration-300 ${activeDiv === 2 ? "before:content-['|'] before:px-2 before:ml-0.5 before:text-orange-500 text-blue-700 text-xl" : "text-gray-500"
                } hover:text-sky-500 hover:scale-105`}
            >
              Skills
            </a>
            <a
              href="#projects"
              onClick={() => {
                handleLinkClick(3);
              }}
              className={`font-bold cursor-pointer  transition-colors duration-300 ${activeDiv === 3 ? "before:content-['|'] before:px-2 before:ml-0.5 before:text-orange-500 text-blue-700 text-xl" : "text-gray-500"
                } hover:text-sky-500 hover:scale-105`}
            >
              Projects
            </a>
            <a
              href=""
              onClick={() => {
                handleLinkClick(4);
              }}
              className={`font-bold cursor-pointer transition-colors duration-300 ${activeDiv === 4 ? "before:content-['|'] before:px-2 before:ml-0.5 before:text-orange-500 text-blue-700 text-xl" : "text-gray-500 "
                } hover:text-sky-500 hover:scale-105`}
            >
              Contact
            </a>
          </div>
        </div>
        <div id="profile" className={`flex      sm:w-full flex-col
        justify-center items-center sm:gap-10 ${activeDiv == 1 ? 'sm:block' : 'sm:hidden'} `}>
          <div className="flex px-8 w-full justify-between sm:justify-around items-center">
            <div>
              <FcLinux size={"3em"} color="green" />
            </div>

            <div>
              <SiNeovim size={"3em"} color="green" />
            </div>


          </div>
          <div className=" w-full 
            flex justify-center gap-x-40   items-center ">

            <Image
              className="flex justify-center items-center"
              src="/DSC_1607.jpg"
              width={150}
              height={150}
              alt="Picture of the author"
            />
          </div>

          <div className="w-full flex flex-col justify-center items-center">
            <h3 className="text-blue-800
            text-center text-xl font-bold py-3">
              Ayoub GAROUAT
            </h3>
            <div className="text-xl px-4 sm:px-0 text-center  sm:w-3/5">

              I am a developer who is passionate about coding and problem-solving. I have a strong interest in exploring new technologies. I love staying up-to-date with the latest advancements and enjoy the thrill of learning and applying new skills.
            </div>
          </div>
          <div className="flex px-16 sm:px-28 pt-5 w-full justify-between sm:justify-around items-center" >

            <div className="">
              <button type="button" className="text-white sm:w-64 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Resume</button>
            </div>
            <div className="flex gap-x-2">
              <Link href={"https://www.linkedin.com/in/ayoub-garouat-aa7a601ba/"}>
                <FaLinkedin className="fill-blue-800 cursor-pointer" size={"2em"} />
              </Link>
              <Link href={""}>
                <FaGithub className="cursor-pointer" size={"2em"} />
              </Link>
            </div>
          </div>
        </div>
        <div className="block sm:hidden py-16 " >
          <div className="flex  justify-center ">
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
        <div id="skills" className={`sm:flex sm:px-0 sm:w-full  ${activeDiv == 2 ? 'sm:block' : 'sm:hidden'} `}>
          <div className="sm:flex flex-col justify-center sm:h-screen w-full items-center  ">
            <h1 className="text-center  text-3xl font-bold text-blue-500 pb-10 " > Skills </h1>
            <div className="flex flex-wrap flex-col gap-4 sm:flex-row justify-center  items-start">

              <div className="flex flex-col w-full sm:w-auto justify-center gap-y-4 items-center">
                <h2 className=" text-center font-bold">BackEnd</h2>
                <div className="flex flex-wrap gap-2 sm:flex-col justify-center items-center">
                  <Link href={"https://nestjs.com/"} className=" border-sky-300 w-40 sm:w-40 border-2 px-4 sm:px-8 
                rounded-lg hover:scale-[1.03] flex  gap-2 items-center">

                    <SiNestjs size={"2em"} className="fill-red-500 " />
                    <h4 className="text-gray-600 text-center font-medium text-xl lg:text-base">
                      Nestjs
                    </h4>

                  </Link>
                  <Link href={"https://laravel.com/"} className=" border-sky-300 w-40 sm:w-40 border-2 px-4 sm:px-8 
                rounded-lg hover:scale-[1.03] flex  justify-center gap-2 items-center">

                    <FaLaravel size={"2em"} className="fill-red-500 " />
                    <h4 className="text-gray-600 text-center font-medium text-xl lg:text-base">
                      Laravel
                    </h4>

                  </Link>
                  <Link href={"https://gofiber.io/"} className=" border-sky-300 w-40 sm:w-40 border-2 px-4 sm:px-8 
                rounded-lg hover:scale-[1.03] flex  gap-2 items-center">

                    <Image
                      className="to-blue-200 ml-1"
                      src="/icon-192x192.png"
                      width={40}
                      height={0}
                      alt="Picture of the author"
                    />
                    <h4 className="text-center font-medium text-xl lg:text-base">
                      Fiber
                    </h4>

                  </Link>
                  <Link href={"https://gin-gonic.com/"} className=" border-sky-300 w-40 sm:w-40  border-2 px-4 sm:px-8 
                rounded-lg hover:scale-[1.03] flex  justify-center gap-2 items-center">

                    <Image
                      className="to-blue-200 my-1 ml-1 mx-2"
                      src="/color.svg"
                      width={23}
                      height={0}
                      alt="Picture of the author"
                    />
                    <h4 className="text-center font-medium text-xl lg:text-base">
                      Gin
                    </h4>

                  </Link>
                  <Link href={"https://expressjs.com/"} className=" border-sky-300 w-40 sm:w-40 border-2 px-4 sm:px-8 
                rounded-lg hover:scale-[1.03] flex  justify-center gap-2 items-center">

                    <SiExpress size={"2em"} className="fill-red-500 " />
                    <h4 className="text-gray-600 text-center font-medium text-xl lg:text-base">
                      Express
                    </h4>

                  </Link>
                </div>
              </div>
              <div className="flex flex-col w-full sm:w-auto justify-center gap-y-4 items-center">
                <h2 className=" font-bold">FrontEnd</h2>
                <div className="flex gap-2 sm:flex-col flex-wrap justify-center items-center" >
                  <Link href={"https://react.dev/"} className=" border-sky-300 w-40 sm:w-48 border-2 px-4 sm:px-8 
                rounded-lg hover:scale-[1.03] flex  gap-2 items-center">

                    <FaReact size={"2em"} className="fill-blue-500" />
                    <h4 className="text-gray-600 text-center font-medium text-xl lg:text-base">
                      React

                    </h4>

                  </Link>
                  <Link href={"https://vuejs.org/"} className=" border-sky-300 w-40 sm:w-48 border-2 px-4 sm:px-8 
                rounded-lg hover:scale-[1.03] flex  gap-2 items-center">

                    <h4 className="text-gray-600 text-center font-medium text-xl lg:text-base">
                    </h4>
                    <FaVuejs size={"2em"} className="fill-green-800 text-green-600 " />
                    Vuejs
                  </Link>
                  <Link href={"https://nextjs.org/"} className=" border-sky-300 w-40 sm:w-48 border-2 px-4 sm:px-8 
                rounded-lg hover:scale-[1.03] flex  gap-2 items-center">

                    <TbBrandNextjs size={"2em"} className="fill-white " />
                    <h4 className="text-gray-600 text-center font-medium text-xl lg:text-base">
                      Nextjs

                    </h4>

                  </Link>

                  <Link href={"https://nuxt.com/"} className=" border-sky-300 w-40 sm:w-48 border-2 px-4 sm:px-8 
                rounded-lg hover:scale-[1.03] flex  gap-2 items-center">

                    <SiNuxtdotjs size={"2em"} className="fill-green-500" />
                    <h4 className="text-gray-600 text-center font-medium text-xl lg:text-base">
                      Nuxtjs

                    </h4>

                  </Link>
                  <Link href={"https://tailwindcss.com/"} className=" border-sky-300 w-40 sm:w-48 border-2 px-4 sm:px-8 
                rounded-lg hover:scale-[1.03] flex  gap-2 items-center">

                    <SiTailwindcss size={"2em"} className="fill-blue-500" />
                    <h4 className="text-gray-600 text-center font-medium text-xl lg:text-base">
                      Tailwind

                    </h4>


                  </Link>
                </div>

              </div>

              <div className="flex flex-col w-full sm:w-auto justify-center gap-y-4 items-center">
                <h2 className=" font-bold">Languages</h2>
                <div className="flex gap-2 sm:flex-col flex-wrap justify-center items-center" >
                  <Link href={"https://go.dev/"} className=" border-sky-300 sm:w-48 w-40 border-2 px-4 sm:px-8 
                rounded-lg hover:scale-[1.03] flex  gap-2 items-center">

                    <BiLogoGoLang size={"2em"} className="fill-blue-500 " />
                    <h4 className="text-gray-600 text-center font-medium text-xl lg:text-base">
                      Golang

                    </h4>

                  </Link>
                  <Link href={"https://www.typescriptlang.org/"} className=" border-sky-300 w-40 sm:w-48 border-2 px-4 sm:px-8 
                rounded-lg hover:scale-[1.03] flex  justify-around items-center">

                    <SiTypescript size={"2em"} className="fill-blue-500  py-1" />
                    <h4 className="text-gray-600 text-center font-medium text-xl lg:text-base">
                      TypeScript

                    </h4>

                  </Link>
                  <Link href={"https://isocpp.org/"} className=" border-sky-300 w-40 sm:w-48 border-2 px-4 sm:px-8 
                rounded-lg hover:scale-[1.03] flex  justify-around items-center">

                    <TbBrandCpp size={"2em"} className="" />
                    <h4 className="text-gray-600 text-center font-medium text-xl lg:text-base">
                      Cpp

                    </h4>

                  </Link>
                  <Link href={"https://www.python.org/"} className=" border-sky-300 w-40 sm:w-48 border-2 px-4 sm:px-8 
                rounded-lg hover:scale-[1.03] flex  gap-2 items-center">

                    <FaPython size={"2em"} className="fill-blue-700" />
                    <h4 className="text-gray-600 text-center font-medium text-xl lg:text-base">
                      Python

                    </h4>


                  </Link>
                  <Link href={"https://www.php.net/"} className=" border-sky-300 w-40 sm:w-48 border-2 px-4 sm:px-8 
                rounded-lg hover:scale-[1.03] flex  gap-x-7 items-center">

                    <FaPhp size={"2em"} className="fill-black " />
                    <h4 className="text-gray-600 text-center font-medium text-xl lg:text-base">
                      Php

                    </h4>

                  </Link>
                  <Link href={"https://www.java.com/en/"} className=" border-sky-300 w-40 sm:w-48 border-2 px-4 sm:px-8 
                rounded-lg hover:scale-[1.03] flex  gap-2 items-center">

                    <FaJava size={"2em"} className="fill-blue-600 py-1" />
                    <h4 className="text-gray-600 text-center font-medium text-xl lg:text-base">
                      Java

                    </h4>

                  </Link>

                </div>

              </div>
              <div className="flex flex-col w-full sm:w-auto justify-center gap-y-4 items-center">
                <h2 className=" font-bold">CrossPlatform</h2>
                <div className="flex gap-2 sm:flex-col flex-wrap  justify-center items-center" >
                  <Link href={"https://quasar.dev/"} className=" border-sky-300 sm:w-48 w-40 border-2   px-4 sm:px-8
                    rounded-lg hover:scale-[1.03] flex  gap-2 items-center">

                    <SiQuasar size={"2em"} className="fill-blue-900 py-1 " />
                    <h4 className="text-gray-600 text-center font-medium text-xl lg:text-base">
                      Quasar

                    </h4>


                  </Link>
                  <Link href={"https://flutter.dev/"} className=" border-sky-300 sm:w-48 w-40 border-2 px-4 sm:px-8 
                    rounded-lg hover:scale-[1.03] flex  gap-2 items-center">

                    <SiFlutter size={"2em"} className="fill-blue-500 py-1 " />
                    <h4 className="text-gray-600 text-center font-medium text-xl lg:text-base">
                      Flutter

                    </h4>


                  </Link>

                </div>

              </div>

              <div className="flex flex-col w-full sm:w-auto justify-center gap-y-4 items-center">
                <h2 className=" font-bold">Tools</h2>
                <div className="flex gap-2 sm:flex-col flex-wrap  justify-center items-center" >
                  <Link href={"https://www.docker.com/"} className=" border-sky-300 sm:w-48 w-40 border-2   px-4 sm:px-8
                    rounded-lg hover:scale-[1.03] flex  gap-2 items-center">

                    <FaDocker size={"2em"} className="fill-blue-900 " />
                    <h4 className="text-gray-600 text-center font-medium text-xl lg:text-base">
                      Docker

                    </h4>

                  </Link>
                  <Link href={"https://gorm.io/"} className=" border-sky-300 sm:w-48 w-40 border-2 px-4 sm:px-8 
                    rounded-lg hover:scale-[1.03] flex py-2  gap-2 items-center">

                    <Image
                      className="to-blue-200 ml-1 "
                      src="/gorm.svg"
                      width={60}
                      height={0}
                      alt="Picture of the author"
                    />
                    <h4 className="text-gray-600 text-center font-medium text-xl lg:text-base">
                      Gorm

                    </h4>

                  </Link>
                  <Link href={"https://www.python.org/"} className=" border-sky-300 w-40 sm:w-48 border-2 px-4 sm:px-8 
                rounded-lg hover:scale-[1.03] flex  gap-2 items-center">

                    <SiPrisma size={"2em"} className="fill-black py-1" />
                    <h4 className="text-gray-600 text-center font-medium text-xl lg:text-base">
                      Prisma
                    </h4>


                  </Link>
                  <Link href={"https://www.python.org/"} className=" border-sky-300 w-40 sm:w-48 border-2 px-4 sm:px-8 
                rounded-lg hover:scale-[1.03] flex  gap-x-7 items-center">

                    <FaGitAlt size={"2em"} className="fill-orange-600" />
                    <h4 className="text-gray-600 text-center font-medium text-xl lg:text-base">
                      Git
                    </h4>


                  </Link>


                </div>

              </div>

            </div>

          </div>
        </div>
        <div className="block sm:hidden py-16 " >
          <div className="flex  justify-center ">
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

        <div id="projects" className={`sm:flex  text-xl  sm:w-full ${activeDiv == 3 ? 'sm:block' : 'sm:hidden'}`}>
          <div className="sm:flex flex-col justify-center w-full   sm:h-screen items-center ">
            <h1 className="text-center  text-3xl pb-10  text-blue-500 font-bold ">Projects</h1>

            <div className="sm:flex sm:flex-row flex-wrap px-2 sm:px-0 flex-col gap-4 items-center justify-center ">
              <div className="w-full sm:w-5/12  shadow-md rounded-lg p-6">
                <h2 className="text-xl font-bold mb-4">Project 1</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className="  flex gap-1 mt-4">
                  <p className="rounded-full text-gray-700 bg-blue-200 px-4 "> Python</p>

                </div>
              </div>
              <div className="w-full sm:w-5/12   shadow-md rounded-lg p-6">
                {/* Project Content */}
                <h2 className="text-xl font-bold mb-4">Project 1</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className="  flex gap-1 mt-4">
                  <p className="rounded-full text-gray-700 bg-blue-200 px-4 "> Python</p>

                </div>
              </div>

              <div className="w-full sm:w-5/12   shadow-md rounded-lg p-6">
                {/* Project Content */}
                <h2 className="text-xl font-bold mb-4">Project 1</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className="  flex gap-1 mt-4">
                  <p className="rounded-full text-gray-700 bg-blue-200 px-4 "> Python</p>

                </div>
              </div>

              <div className="w-full sm:w-5/12   shadow-md rounded-lg p-6">
                {/* Project Content */}
                <h2 className="text-xl font-bold mb-4">Project 1</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className="  flex gap-1 mt-4">
                  <p className="rounded-full text-gray-700 bg-blue-200 px-4 "> Python</p>

                </div>
              </div>



            </div>
          </div>
        </div>
      </div >
    </>
  );
}
