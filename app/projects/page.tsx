// import Container from "react-bootstrap/Container";
import MyNavbar from "@/components/Navigationbar";
import Footer from "../../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects-Portfolio", // Overrides the global title template
};
function Projects() {
  return (
    <>
    <MyNavbar />
    <div className="d-flex flex-column min-vh-100">
      <div className="mt-5">
        <h1>My Projects</h1>
        <p>A showcase of my recent work.</p>
      </div>
      <Footer />
    </div>
    </>
  );
}

export default Projects;




