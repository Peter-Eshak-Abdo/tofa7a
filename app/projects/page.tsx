import type { Metadata } from "next";
import ProjectsCard from "@/components/ProjectsCard";

export const metadata: Metadata = {
  title: "Projects-Portfolio", // Overrides the global title template
};
function Projects() {
  return (
    <>
      <div className="container d-flex flex-column min-vh-100">
        <div className="mt-5">
          <h1>My Projects</h1>
          <p>A showcase of my recent work.</p>
        </div>
        <ProjectsCard />
      </div>
    </>
  );
}

export default Projects;

