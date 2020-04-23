import React, { useEffect } from "react";
import "./Projects.css";
import ProjectsComputerScreen from "../ProjectsComputerScreen/ProjectsComputerScreen";
import ProjectsTabletScreen from "../ProjectsTabletScreen/ProjectsTabletScreen";
import ProjectsMobileScreen from "../ProjectsMobileScreen/ProjectsMobileScreen";

function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <ProjectsComputerScreen />
      <ProjectsTabletScreen />
      <ProjectsMobileScreen />
    </div>
  );
}

export default Projects;
