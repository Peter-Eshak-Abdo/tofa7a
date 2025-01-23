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
          <ProjectsCard title="udemy_shop" text="Shop project for Udemy course" linkCode="https://github.com/PeterEshak/udemy_shop" linkHosting="" />
          <ProjectsCard
            title="Curricula"
            text="Personal Project for Primary Curricula"
            linkCode="https://github.com/PeterEshak/Curricula"
            linkHosting=""
          />
          <ProjectsCard
            title="CV"
            text="Personal Project for First CV"
            linkCode=""
            linkHosting="https://peter-eshak.blogspot.com/2020/10/blog-post.html"
          />
          <ProjectsCard
            title="Youtube Channel"
            text="My Youtube Channel"
            linkCode=""
            linkHosting="https://www.youtube.com/channel/UCdt02aWMr-mlqM2eC8A_brg"
          />
          <ProjectsCard title="كورس HTML" text="First blog" linkCode="" linkHosting="https://peter-eshak.blogspot.com/2020/12/html.html" />
          <ProjectsCard
            title="كورس Adobe illustrator"
            text="Second Blog"
            linkCode=""
            linkHosting="https://peter-eshak.blogspot.com/2020/12/adobe-illustrator-cc-aylastrytvr-css.html"
          />
          <ProjectsCard
            title="Github"
            text="Github README page"
            linkCode="https://github.com/Peter-Eshak-Abdo/Peter-Eshak-Abdo"
            linkHosting="https://github.com/Peter-Eshak-Abdo"
          />
        </div>
      </div>
    </>
  );
}

export default Projects;








