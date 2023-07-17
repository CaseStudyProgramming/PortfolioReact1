import { useState } from "react";

import SideNav from "./Components/SideNav";
import Main from "./Components/Main";
import Work from "./Components/Work";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {
  return (
    <>
      <div>
        <SideNav />
        <Main />
        <Work />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
