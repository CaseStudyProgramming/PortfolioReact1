import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const SideNav = () => {
  const [nav, setnav] = useState(false);
  const handlrdNav = () => {
    setnav(!nav);
  };
  return (
    <div>
      <AiOutlineMenu
        onClick={handlrdNav}
        className="absolute top-4 right-4 z-[99] md:hidden"
      />
    </div>
  );
};

export default SideNav;
