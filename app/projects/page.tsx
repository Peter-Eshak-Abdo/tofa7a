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
        <div className="d-flex flex-row justify-content-between flex-wrap">
          <ProjectsCard
            title="Netlab-Course"
            text="That was offline course"
            linkCode="https://github.com/Peter-Eshak-Abdo/Netlab-Course"
            linkHosting="https://peter-eshak-abdo.github.io/Netlab-Course/"
          />
          <ProjectsCard
            title="MoveOn"
            text="Collage Section Project With Team of 3 girls in second Year and fisrt Semester"
            linkCode="https://github.com/Peter-Eshak-Abdo/MoveOn"
            linkHosting="https://moveon-7ee89.web.app/"
          />
          <ProjectsCard
            title="Section3_Apple"
            text="Collage Section Project With Team of 4 girls in First Year and first Semester"
            linkCode="https://github.com/Peter-Eshak-Abdo/Section3_Apple"
            linkHosting="https://section3-apple.web.app/"
          />
          <ProjectsCard
            title="Abona Faltaus"
            text="Personal Project for Christian media without React or Next"
            linkCode="https://github.com/Peter-Eshak-Abdo/Abona-Faltaos"
            linkHosting="https://abona-faltaos.web.app/"
          />
        </div>
      </div>
    </>
  );
}

export default Projects;






