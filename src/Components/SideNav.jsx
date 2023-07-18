import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineMail,
} from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { BsPerson } from "react-icons/bs";

const SideNav = () => {
  const [nav, setnav] = useState(false);
  const [isHomeHover, setIsHomeHover] = useState(false);
  const [isJobsHover, setIsJobsHover] = useState(false);
  const [isProjectsHover, setIsProjectsHover] = useState(false);
  const [isSayaHover, setIsSayaHover] = useState(false);
  const [isContactHover, setIsContactHover] = useState(false);
  const handledNav = () => {
    setnav(!nav);

    document.body.classList.toggle("overflow-hidden");
  };

  const handleHomeMouseEnter = () => {
    setIsHomeHover(true);
  };

  const handleHomeMouseLeave = () => {
    setIsHomeHover(false);
  };

  const handleJobsMouseEnter = () => {
    setIsJobsHover(true);
  };

  const handleJobsMouseLeave = () => {
    setIsJobsHover(false);
  };

  const handleProjectsMouseEnter = () => {
    setIsProjectsHover(true);
  };

  const handleProjectsMouseLeave = () => {
    setIsProjectsHover(false);
  };

  const handleSayaMouseEnter = () => {
    setIsSayaHover(true);
  };

  const handleSayaMouseLeave = () => {
    setIsSayaHover(false);
  };

  const handleContactMouseEnter = () => {
    setIsContactHover(true);
  };

  const handleContactMouseLeave = () => {
    setIsContactHover(false);
  };

  return (
    <div>
      <AiOutlineMenu
        onClick={handledNav}
        className="fixed top-4 right-4 z-[99] md:hidden"
      />
      {nav ? (
        <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
          <a
            onClick={handledNav}
            href="#main"
            className="w-[75%] flex justify-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineHome size={20} />
            <span className="pl-4">Home</span>
          </a>
          <a
            onClick={handledNav}
            href="#work"
            className="w-[75%] flex justify-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <GrProjects size={20} />
            <span className="pl-4">Work</span>
          </a>
          <a
            onClick={handledNav}
            href="#projects"
            className="w-[75%] flex justify-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineProject size={20} />
            <span className="pl-4">Projects</span>
          </a>
          <a
            onClick={handledNav}
            href="#main"
            className="w-[75%] flex justify-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <BsPerson size={20} />
            <span className="pl-4">Resume</span>
          </a>
          <a
            onClick={handledNav}
            href="#contact"
            className="w-[75%] flex justify-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineMail size={20} />
            <span className="pl-4">Contact</span>
          </a>
        </div>
      ) : (
        ""
      )}

      <div className="md:block hidden fixed top-[25%] z-10">
        <div className="flex flex-col">
          <div className="flex items-center">
            <a
              href="#main"
              className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 flex items-center"
              onMouseEnter={handleHomeMouseEnter}
              onMouseLeave={handleHomeMouseLeave}
            >
              <AiOutlineHome size={20} />
            </a>
            {isHomeHover && <span className="ml-2">Home</span>}
          </div>

          <div className="flex items-center">
            <a
              href="#work"
              className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
              onMouseEnter={handleJobsMouseEnter}
              onMouseLeave={handleJobsMouseLeave}
            >
              <GrProjects size={20} />
            </a>
            {isJobsHover && <span className="ml-2">Jobs</span>}
          </div>

          <div className="flex items-center">
            <a
              href="#projects"
              className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
              onMouseEnter={handleProjectsMouseEnter}
              onMouseLeave={handleProjectsMouseLeave}
            >
              <AiOutlineProject size={20} />
            </a>
            {isProjectsHover && <span className="ml-2">Projects</span>}
          </div>

          <div className="flex items-center">
            <a
              href="#main"
              className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
              onMouseEnter={handleSayaMouseEnter}
              onMouseLeave={handleSayaMouseLeave}
            >
              <BsPerson size={20} />
            </a>
            {isSayaHover && <span className="ml-2">Saya</span>}
          </div>

          <div className="flex items-center">
            <a
              href="#contact"
              className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
              onMouseEnter={handleContactMouseEnter}
              onMouseLeave={handleContactMouseLeave}
            >
              <AiOutlineMail size={20} />
            </a>
            {isContactHover && <span className="ml-2">Contact</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
