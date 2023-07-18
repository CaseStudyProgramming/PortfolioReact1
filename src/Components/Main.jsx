import React from "react";
import BgGambar1 from "../Assets/unnamed.jpg";
import { TypeAnimation } from "react-type-animation";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1]"
        src={BgGambar1}
        alt=""
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800 ">
            Halo saya David Cristian P.S.
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            Saya
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Belajar ReactJS",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Belajar NextJS",
                2000,
                "Belajar MERN",
                2000,
                "Belajar Docker",
                2000,
                "Belajar MySQL && NoSQL",
                2000,
              ]}
              wrapper="div"
              speed={50}
              style={{
                fontSize: "1em",
                display: "inline-block",
                paddingLeft: "5px",
              }}
              repeat={Infinity}
            />
          </h2>

          <div className="flex justify-between pt-6 max-w-[200px] w-full cursor-pointer">
            <FaTwitter className="hover:scale-110 ease-in duration-200" />
            <FaFacebookF className="hover:scale-110 ease-in duration-200" />
            <FaInstagram className="hover:scale-110 ease-in duration-200" />
            <FaLinkedinIn className="hover:scale-110 ease-in duration-200" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
