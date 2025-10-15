import type { Metadata } from "next";
import ProjectsCard from "@/components/ProjectsCard";
import React from "react";

export const metadata: Metadata = {
  title: "Projects-Portfolio",
};
function Projects() {
  return (
    <React.Fragment>
      <div className="container d-flex flex-column min-vh-100">
        <div className="mt-5">
          <h1>My Projects</h1>
          <p>A simples of my recent Projects.</p>
        </div>
        <ProjectsCard />
      </div>
    </React.Fragment>
  );
}

export default Projects;

