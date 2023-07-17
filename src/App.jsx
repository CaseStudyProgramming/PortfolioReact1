import { useState } from "react";

import SideNav from "./Components/SideNav";
import Main from "./Components/Main";
import Work from "./Components/Work";
import Projects from "./Components/Projects";

function App() {
  return (
    <>
      <div>
        <SideNav />
        <Main />
        <Work />
        <Projects />
      </div>
    </>
  );
}

export default App;
