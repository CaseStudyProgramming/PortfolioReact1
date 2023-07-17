import React from "react";
import ProjectsItem from "./ProjectsItem";
import GambarProjects from "../Assets/PencarianJobs.png";
import GambarProjects1 from "../Assets/Cuaca.png";

const Projects = () => {
  return (
    <div id="projects" className=" max-w-[1040px] md:pl-20 p-4 py-16">
      <h1 className=" text-4xl font-bold text-center text-[#242222]">
        Projects
      </h1>
      <p className=" text-center py-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia cum eos
        sed ratione quia consequatur exercitationem ipsam explicabo natus magni?
      </p>

      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectsItem
          img={GambarProjects}
          title="PencarianJobs"
          bahasa="React Vite"
        />
        <ProjectsItem
          img={GambarProjects1}
          title="Cuaca"
          bahasa="HTML,CSS,JS"
        />
        {/* <ProjectsItem img={} title="Cuaca"/>
        <ProjectsItem img={} title="Cuaca"/> */}
      </div>
    </div>
  );
};

export default Projects;
